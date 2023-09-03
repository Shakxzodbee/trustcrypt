import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Container from '../../components/Container';
import { NavLink, Navigate} from 'react-router-dom';
import { setUser } from '../../redux/user/userSlice';
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { IAccessCredentials } from '../../types';
import { authoriseUserViaFirebase } from '../../redux/user/userOperations';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  
  const onFinish = (values: IAccessCredentials) => {
    authoriseUserViaFirebase(values).then(userData => {
      if (userData) {
        dispatch(setUser(userData));
        userData.id && localStorage.setItem("userId", userData.id);
      }
    })
  };

  return (
    <div className='auth'>
      {isAuth && <Navigate to={'/'}/> }
      <Container>
        <div className='authOptions'>
          <Form
          name="normal_login"
          className="authForm"
          onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
            {
              type: 'email',
              message: 'Использован неверный формат электроной почты!',
            },
            {
              required: true,
              message: 'Введите адрес электронной почты!',
            }
            ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="e-mail"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Введите пароль!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="authFormButton">
                Войти
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p className='authTxt'>Нет аккаунта?</p>
            <NavLink to="/signup" className='registerButton'>
              <button className='registerButton'>Регистрация</button>
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;