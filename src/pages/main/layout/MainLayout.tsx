/***
 * @author created by william
 * @author updated by william
 * @Created date is 2019/7/29 11:53
 * @Updated date is 2019/7/29 11:53
 */
import * as React from 'react';
import {Menu, Icon, Layout, Avatar} from 'antd';
import {Route, withRouter} from 'react-router-dom';
import RootRouter from '../../../router/RootRouter';
import {MainLayoutInterface} from './MainLayout.interface';
import Styles from './MainLayout.module.scss';

class MainLayout extends React.PureComponent<any, MainLayoutInterface> {

    constructor(props: any) {
        super(props);
        this.state = {
            collapsed: false,
            defaultOpenKeys: '1',
            defaultSelectedKeys: '',
        }
    }

    public componentDidMount(): void {
        this.getDefaultSelectMenu();
    }

    public handleSelectMenu = (item: { key: string }) => {
        const { history } = this.props;
        if (item.key === '1') {
            history.push('/');
        }
    };

    public getDefaultSelectMenu = () => {
        const {location: {pathname}} = this.props;
        if (pathname === '/') {
            this.setState({
                defaultOpenKeys: '1',
                defaultSelectedKeys: '1',
            })
        }
    };

    public toggle = () => {
        const {collapsed} = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    };

    public renderNoChildrenItem = (children: { key: string, icon: string, name: string }) => {
        const {key, icon, name} = children;
        return (
            <Menu.Item key={key}>
                {icon ? <Icon type={icon} /> : ''}
                <span>{name}</span>
            </Menu.Item>
        );
    };

    public renderHasChildrenItem = (
        node: {
            key: string, icon: string, name: string, children: []
        }) => {
        return (
            <Menu.SubMenu
                key={node.key}
                title={(
                    <span>{node.icon ?
                        <Icon type={node.icon} /> : ''}<span>{node.name}</span></span>
                )}
            >
                {this.renderMenuItems(node.children)}
            </Menu.SubMenu>
        );
    };

    public renderMenuItems = (children: any) => children.map((val: any) => {
        if (val.children && val.children.length) {
            return this.renderHasChildrenItem(val);
        }

        return this.renderNoChildrenItem(val);
    });

    public renderMenuList = () => {
        const {collapsed, defaultOpenKeys, defaultSelectedKeys} = this.state;
        const {Sider} = Layout;
        return (
            <Sider
                trigger={null}
                collapsible={true}
                collapsed={collapsed}
            >
                <div className={Styles.root__name}>
                    {!collapsed ? '商城管理后台' : 'ADMIN'}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    key={defaultOpenKeys + defaultSelectedKeys}
                    defaultOpenKeys={[defaultOpenKeys]}
                    defaultSelectedKeys={[defaultSelectedKeys]}
                    onSelect={this.handleSelectMenu}
                >
                    {this.renderMenuItems(RootRouter())}
                </Menu>
            </Sider>
        );
    };

    public renderHeader = () => {
        const {collapsed} = this.state;
        const {Header} = Layout;
        return (
            <Header style={{background: '#fff', padding: 0}}>
                <Icon
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <div>
                    <Avatar
                        size="large"
                        icon="user"
                    />
                </div>
            </Header>
        )
    };

    public renderMainChildRoute = () => {
        return RootRouter().map(item => {
            return (
                <Route
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={true}
                />
            )
        })
    };

    public renderContent = () => {
        const {Content} = Layout;
        return (
            <Content>
                <div>
                    {this.renderMainChildRoute()}
                </div>
            </Content>
        )
    };

    public render() {
        return (
            <Layout>
                {this.renderMenuList()}
                <Layout>
                    {this.renderHeader()}
                    {this.renderContent()}
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(MainLayout);

