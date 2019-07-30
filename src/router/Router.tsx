/***
 * @author created by william
 * @author updated by william
 * @Created date is 2019/7/29 17:16
 * @Updated date is 2019/7/29 17:16
 */
import Goods from '../pages/goods/Goods';

const Router = () => [
    {
        children: [],
        component: Goods,
        icon: 'appstore',
        key: '1',
        name: '商品列表',
        path: '/goods',
    }
];

export default Router;

