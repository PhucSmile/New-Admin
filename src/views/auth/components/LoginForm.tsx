import React from 'react';
import {
  StyledForm,
  StyledFormItem,
  StyledInput,
  StyledInputPassword,
} from 'styles/overrides';
import { Form, Button } from 'antd';
import { useAppDispatch } from 'store/hooks';
import { doLogin } from 'store/slices/authSlice';

export const LoginForm = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: any) => {
    try {
      const result = await dispatch(doLogin(values)).unwrap();

      console.log({ result });
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <StyledForm form={form} layout="vertical" onFinish={handleSubmit}>
      <StyledFormItem name="username">
        <StyledInput />
      </StyledFormItem>

      <StyledFormItem name="password">
        <StyledInputPassword />
      </StyledFormItem>

      <StyledFormItem noStyle>
        <Button htmlType="submit">Submit</Button>
      </StyledFormItem>
    </StyledForm>
  );
};
