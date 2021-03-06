/* eslint-disable import/no-anonymous-default-export */
import React, { lazy, Suspense } from 'react';
import {
  SmileOutlined,
  AreaChartOutlined,
  TeamOutlined,
  ShoppingOutlined,
  SolutionOutlined,
  IdcardOutlined,
  CarOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';

const ProductList = lazy(() => import('../pages/Admin/Product/List'));

const UserShowList = lazy(() => import('../pages/Admin/User/show/List'));
const UserShowInfo = lazy(() => import('../pages/Admin/User/show/Info'));

const OrderShowList = lazy(() => import('../pages/Admin/Order/show/List'));
const OrderShowInfo = lazy(() => import('../pages/Admin/Order/show/Info'));
const OrderDispatchList = lazy(() => import('../pages/Admin/Order/Dispatch/List'));
const OrderDispatchInfo = lazy(() => import('../pages/Admin/Order/Dispatch/Info'));

const RegionShowList = lazy(() => import('../pages/Admin/Region/show/List'));

const DispatcherManageList = lazy(() => import('../pages/Admin/Dispatch/DispatcherManage/List'));

type TRoute = {
  path: string;
  name?: string;
  icon?: React.ReactNode;
  component?: React.ComponentType<any>;
  hideInMenu?: boolean;
  routes?: TRoute[];
};

const route: TRoute = {
  path: '/admin',
  routes: [
    {
      path: '/admin/welcome',
      name: '欢迎',
      icon: <SmileOutlined style={{ fontSize: 20 }} />,
    },
    {
      path: '/admin/data',
      name: '数据',
      icon: <AreaChartOutlined style={{ fontSize: 20 }} />,
    },
    {
      path: '/admin/user',
      name: '用户',
      icon: <TeamOutlined style={{ fontSize: 20 }} />,
      routes: [
        {
          path: '/admin/user/show',
          name: '用户总览',
          component: ProductList,
        },
      ],
    },
    {
      path: '/admin/product',
      name: '产品',
      icon: <ShoppingOutlined style={{ fontSize: 20 }} />,
      routes: [
        {
          path: '/admin/product/show',
          name: '产品总览',
        },
      ],
    },
    {
      path: '/admin/order',
      name: '订单',
      icon: <SolutionOutlined style={{ fontSize: 20 }} />,
      routes: [
        {
          path: '/admin/order/show/list',
          name: '订单总览',
        },
        {
          path: '/admin/order/show/info',
        },
        {
          path: '/admin/order/dispatch',
          name: '订单派发',
          routes: [
            {
              path: '/admin/order/dispatch/info/:uuid',
            },
          ],
        },
      ],
    },
    {
      path: '/admin/dispatch',
      name: '配送',
      icon: <IdcardOutlined style={{ fontSize: 20 }} />,
      routes: [
        {
          path: '/admin/dispatch/dispatcher/list',
          name: '配送员总览',
        },
      ],
    },
    {
      path: '/admin/region',
      name: '地区',
      icon: <CarOutlined style={{ fontSize: 20 }} />,
      routes: [
        {
          path: '/admin/region/show/list',
          name: '地区总览',
        },
      ],
    },
    {
      path: '/admin/setting',
      name: '设置',
      icon: <SettingOutlined style={{ fontSize: 20 }} />,
      routes: [
        {
          path: '/admin/account',
          name: '管理员账户',
        },
      ],
    },
  ],
};

const AdminRouter = () => {
  return (
    <Suspense
      fallback={
        <Spin size="large" tip="Loading..." style={{ display: 'block', margin: '0 auto' }} />
      }
    >
      <Switch>
        <Route exact path={'/admin/product/show'} component={ProductList} />
        <Route exact path={'/admin/user/show'} component={UserShowList} />
        <Route exact path={'/admin/user/show/info/:uuid'} component={UserShowInfo} />
        <Route exact path={'/admin/order/show/list'} component={OrderShowList} />
        <Route exact path={'/admin/order/show/info/:uuid'} component={OrderShowInfo} />
        <Route exact path={'/admin/order/dispatch'} component={OrderDispatchList} />
        <Route exact path={'/admin/order/dispatch/info/:uuid'} component={OrderDispatchInfo} />
        <Route exact path={'/admin/region/show/list'} component={RegionShowList} />
        <Route exact path={'/admin/dispatch/dispatcher/list'} component={DispatcherManageList} />
        <Redirect from="/admin/*" to="/admin" />
      </Switch>
    </Suspense>
  );
};
export { route };
export default AdminRouter;
