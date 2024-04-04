import React, { useState, useEffect } from 'react';
import { APP_STORAGE_KEY } from 'constants/app';
import { PATH_NAME } from 'constants/routes';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectIsLoggedIn, doCheckAuth } from 'store/slices/authSlice';

export const PrivateRoute = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const [isChecking, setIsChecking] = useState(true);
  const accessToken = localStorage.getItem(APP_STORAGE_KEY.TOKEN);

  useEffect(() => {
    if (accessToken && !isLoggedIn) {
      (async () => {
        try {
          const result = await dispatch(
            doCheckAuth({ accessToken: accessToken }),
          ).unwrap();

          console.log(result);
        } catch (error) {
          localStorage.removeItem(APP_STORAGE_KEY.TOKEN);
        }

        setIsChecking(false);
      })();
    } else {
      setIsChecking(false);
    }
  }, [dispatch, accessToken, isLoggedIn]);

  if (isChecking) {
    return <h1>Loading...</h1>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={PATH_NAME.LOGIN} />;
};
