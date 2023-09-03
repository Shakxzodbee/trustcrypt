import { Navigate } from 'react-router-dom';
 import { toast } from 'react-toastify';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { setUser } from '../../redux/user/userSlice';
import { useAuth } from '../../hooks/use-auth';
import { createNewUserViaFirebase } from '../../redux/user/userOperations';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addUserToFirebase } from '../../services/firebase/firebaseUserOperations';
import { IAccessCredentials } from '../../types';
import Container from '../../components/Container';

const SignupPage = () => {

    const dispatch = useAppDispatch();

    const { isAuth } = useAuth();

    const onFinish = (values: IAccessCredentials) => {
        createNewUserViaFirebase(values).then(userData => {
            if (userData) {
                addUserToFirebase(userData);
                dispatch(setUser(userData));
                userData.id && localStorage.setItem("userId", userData.id);
                toast.success(`Создан новый аккаунт с ${userData.email}`);
            }
        });
    };

    return (
        <div className='auth'>
            {isAuth && <Navigate to={'/'}/> }
            <Container>
                <div className='authOptions'>
                    <Form
                        className="authForm"
                        onFinish={onFinish}
                        name="register"
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
                            hasFeedback
                        >
                            <Input.Password
                              prefix={<LockOutlined className="site-form-item-icon" />}
                              type="password"
                              placeholder="Пароль"
                            />
                        </Form.Item>
                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                  required: true,
                                  message: 'Подтвердите пароль!',
                                },
                                ({ getFieldValue }) => ({
                                  validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                      return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Пароли не совпадают!'));
                                  },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Подтвердите пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="authFormButton">
                              Зарегистрироваться
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default SignupPage;