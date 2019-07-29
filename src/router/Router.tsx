/***
 * @author created by william
 * @author updated by william
 * @Created date is 2019/7/29 17:16
 * @Updated date is 2019/7/29 17:16
 */
import LazyLoad from '../common/lazy-load/LazyLoad';

const Login = LazyLoad(() => import('../pages/login/Login'));

const Router = () => [
    {
        path: '/login',
        icons: '',
        name: '',
        component: Login,
        children: [],
    }
];

export default Router;

