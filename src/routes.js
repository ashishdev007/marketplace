import React from 'react';

const Home = React.lazy(() => import('./views/home/Home'));
const Login = React.lazy(() => import('./views/login/Login'));
const Product = React.lazy(() => import('./views/product/Product'));
const Cart = React.lazy(() => import('./views/cart/Cart'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/product/:id', exact: true, name: 'Product', component: Product },
  { path: '/cart', exact: true, name: 'Cart', component: Cart },
];

export default routes;
