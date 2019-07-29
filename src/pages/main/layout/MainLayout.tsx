/***
 * @author created by william
 * @author updated by william
 * @Created date is 2019/7/29 11:53
 * @Updated date is 2019/7/29 11:53
 */
import * as React from 'react';
import { Menu, Icon } from 'antd';
import RootRouter from '../../../router/RootRouter';

console.log(RootRouter());

class MainLayout extends React.PureComponent {

    public renderNoChildrenItem = (children: { key: string, icon: string, name: string }) => {
        const { key, icon, name } = children;
        return  (
            <Menu.Item key={key}>
                {icon ? <Icon type={icon} /> : ''}
                <span>
        {name}
      </span>
            </Menu.Item>
        );
    };

    public renderHasChildrenItem = (
        node: { key: string, icon: string, name:string, children: []
    }) => {
        return (
            <Menu.SubMenu
                key={node.key}
                title={(
                    <span>
          {node.icon ? <Icon type={node.icon} /> : ''}
                        <span>{node.name}</span>
        </span>
                )}
            >
                {
                    this.renderMenuItems(node.children)
                }
            </Menu.SubMenu>
        );
    };

    public renderMenuItems = (children: any) => children.map((val: any) => {
        if (val.children && val.children.length) {
            return this.renderHasChildrenItem(val);
        }

        return this.renderNoChildrenItem(val);
    });

    public renderContainer = () => {
        return (
            <div>
                这是路由函数
            </div>
        )
    };

    public render() {
        return this.renderContainer();
    }
}

export default MainLayout;

