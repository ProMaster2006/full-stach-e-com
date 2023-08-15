import React, { FC } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useForm, SubmitHandler  } from 'react-hook-form';
import { toggleVisRegModal } from '../../../store/ModalsSlice';
import { useAppDispatch, useAppSelector } from '../../../types/storeFunc';
import { RegisterModalinputs } from '../../../types/inputs';
import { registerUser } from '../../../store/UserSlice';
import './ModalRegister.scss'

const ModalRegistration: FC = () => {

    const { isVisibleRegModal } = useAppSelector(state => state.modalsReducer);
    const dispatch = useAppDispatch();

    const modalClass = ['modal-register']

    if(isVisibleRegModal) {
        modalClass.push('show')
    }

    const closeModalHandler = () => {
        dispatch(toggleVisRegModal())
    }

    const {register, handleSubmit, reset, formState: { errors }} = useForm<RegisterModalinputs>({
        mode: 'onChange'
    })


    const onSubmit: SubmitHandler<RegisterModalinputs> = (data, e) => {
        dispatch(registerUser(data))
        dispatch(toggleVisRegModal())
        reset()
    }

    return (
        <div className={modalClass.join(' ')}>
            <div className="modal-register__content">
                <div onClick={closeModalHandler} className="modal-register__close">	&#x2716;</div>
                <div className="modal-register__header header-modal-register">
                    <div className="header-modal-register__title">Sign up</div>
                    <div className="header-modal-register__label">Registration takes less than a minute but gives you full control over your orders.</div>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control {...register('fullname', { required: 'Field is required' })} type="name" placeholder="Your full name" />
                        {errors?.fullname && <p>{errors.fullname.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control {...register('email', { required: 'Enter your email', pattern: { value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u, message: 'Enter validation email' } })} type="email" placeholder="Your working email" />
                        {errors?.email && <span>{errors.email.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control {...register('password', { required: true })} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check  {...register('checkbox', { required: true })} type="checkbox" label="Remember me" />
                    </Form.Group>
                    <button className="form_btn">Sign up</button>
                </Form>
                <div className="modal-register_log-in-ref">
                Already have an account? <a href="#">Sign in</a>
                </div>
            </div>  
        </div>
    );
};

export default ModalRegistration;