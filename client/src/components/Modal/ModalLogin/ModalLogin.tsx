import React, { FC } from 'react';
import './ModalLogin.scss';
import { Form, Button } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginModalFormInputs } from '../../../types/inputs';
import { useAppDispatch, useAppSelector } from '../../../types/storeFunc';
import { toggleVisLoginModal } from '../../../store/ModalsSlice';
import { loginUser } from '../../../store/UserSlice';
import { toggleIsAuth } from '../../../store/UserSlice';

const ModalLogin: FC = () => {

    const visibleModal = useAppSelector(state => state.modalsReducer.isVisibleLoginModal)
    const { register, handleSubmit, reset } = useForm<LoginModalFormInputs>();
    const dispatch = useAppDispatch();

    const modalClass = ['modal-login']

    if(visibleModal) {
        modalClass.push('active')
    }

    const onSubmit: SubmitHandler<LoginModalFormInputs> = (data) => {
        dispatch(loginUser(data))
        dispatch(toggleIsAuth())
        reset()
        dispatch(toggleVisLoginModal())
    }

    const closeModalHandler = () => {
        dispatch(toggleVisLoginModal())
    }

    return (
        <div className={modalClass.join(' ')}>
            <div className="modal-login__content">
                <div onClick={closeModalHandler} className="modal-register__close">	&#x2716;</div>
                <div className="modal-login__title">Войти</div>
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <Form.Group className="mb-3" controlId="formLoginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control {...register('email', { required: true })} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLoginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control {...register('password', { required: true })} type="password" placeholder="Enter password" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <button>Submit</button>
                </Form>
            </div>
        </div>
    );
};

export default ModalLogin;