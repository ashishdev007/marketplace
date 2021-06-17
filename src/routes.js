import React from 'react';

const Home = React.lazy(() => import('./views/home/Home'));
const Login = React.lazy(() => import('./views/login/Login'));
const Product = React.lazy(() => import('./views/product/Product'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/product/:id', exact: true, name: 'Product', component: Product },
];

export default routes;
