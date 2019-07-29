/***
 * @author created by william
 * @author updated by william
 * @Created date is 2019/7/29 11:53
 * @Updated date is 2019/7/29 11:53
 */
import * as React from 'react';

class MainLayout extends React.PureComponent{
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

