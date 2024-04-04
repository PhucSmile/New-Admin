import React from 'react';
import { useAppDispatch } from 'store/hooks';
import { Button, DatePicker } from 'antd';
import { doSwitchLocale } from 'store/slices/appSlice';
import { useIntl } from 'react-intl';
import { axiosInstance } from 'api/api';

import { doLogout } from 'store/slices/authSlice';

export function Dashboard() {
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const handleClick = async () => {
    const result = await axiosInstance.get('https://aaaaaaaaa', {
      params: { age: 19, name: 'x', c: null, d: undefined, a: ['b', 'e', 'f'] },
    });
  };

  return (
    <div>
      <Button onClick={() => dispatch(doSwitchLocale('en'))}>EN</Button>
      <Button onClick={() => dispatch(doSwitchLocale('vi'))}>VI</Button>
      <Button onClick={handleClick}>Click</Button>

      <Button danger onClick={() => dispatch(doLogout())}>
        LOGOUT
      </Button>
      <DatePicker />
    </div>
  );
}
