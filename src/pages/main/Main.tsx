/***
 * @author created by william
 * @author updated by william
 * @Created date is 2019/7/29 11:38
 * @Updated date is 2019/7/29 11:38
 */
import * as React from 'react';
import MainLayout from './layout/MainLayout';

class Main extends React.PureComponent {
    public renderMainLayout = () => {
        return (
            <MainLayout />
        )
    };

    public render() {
        return this.renderMainLayout();
    }
}

export default Main;
