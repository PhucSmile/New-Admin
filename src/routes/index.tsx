import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATH_NAME } from 'constants/routes';
import { PrivateRoute } from 'components/PrivateRoute';

import { Dashboard } from 'views/dashboard/Dashboard';
import { Login } from 'views/auth/Login';
import { AuthLayout } from 'layout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={PATH_NAME.ROOT} element={<Dashboard />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path={PATH_NAME.LOGIN} element={<Login />} />
      </Route>
    </Routes>
  );
};
