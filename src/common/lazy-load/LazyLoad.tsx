/***
 * @author created by william
 * @author updated by william
 * @Created date is 2019/7/29 17:23
 * @Updated date is 2019/7/29 17:23
 */
import React from 'react';
import LoadingComponent from '../loading/Loading';

const asyncLoadComponent = (importComponent: any) => {
    return class LazyLoad extends React.PureComponent {
        public constructor(props: object) {
            super(props);
            this.state = {
                components: null,
            }
        }

        public async componentDidMount() {
            const {defaultComponent: component} = await importComponent();
            this.setState({
                components: component,
            })

        }

        public render() {
            const {components}: any = this.state;
            return components ? (<components />) : <LoadingComponent />;
        }
    }
};

export default asyncLoadComponent;
