import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { inputsFormContant } from '../../types/inputsFormContant';
import { useAppDispatch } from '../../types/storeFunc';
import './MainContact.scss';
import { toggleVisSuncModal } from '../../store/ModalsSlice'
import { fetchMessage } from '../../store/MessageSlice'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MainContact: FC = (props) => {


    const { register, handleSubmit, reset } = useForm<inputsFormContant>({
        mode: 'onChange'
    })

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<inputsFormContant> = (data) => {

        const body = {
            ...data
        }

        dispatch(fetchMessage(body))
        reset()
        dispatch(toggleVisSuncModal())
    }

    return (
        <div className='page-contant__main main-contact'>
            <Container fluid='lg'>
                <div className="main-contact__header">
                    <div className="main-contact__title">Контакты</div>
                    <div className="main-contact__location"><Link to='/' className='main-contact__link link'>Главная</Link> -- <Link className='main-contact__link link' to='/contact'>Контакти</Link></div>
                </div>
                <div className="main-contact__body body-items">
                    <Row className='body-items__item'>
                        <Col>Телефон</Col>
                        <Col>E-mail</Col>
                        <Col>Адрес</Col>
                    </Row>
                    <Row className='body-items__item'>
                        <Col>+7 (495) 823-54-12</Col>
                        <Col>info@sitename.com</Col>
                        <Col>г. Москва, 3-я улица Строителей, 25</Col>
                    </Row>

                    <form onSubmit={handleSubmit(onSubmit)} className="body-items__form form-contact">
                        <div className='form-contact__title'>Напишите нам</div>
                        <div className='form-contact__input'>
                            <input {...register('name')} type="text" placeholder='Имя' />
                        </div>
                        <div className='form-contact__input'>
                            <input {...register('email')} type="email" placeholder='E-mail'/>
                        </div>
                        <div className='form-contact__input'>
                            <input {...register('tel')} type="tel" placeholder='Телефон'/>
                        </div>
                        <div>
                            <textarea {...register('text')} name="text" id="" cols={30} rows={10}>

                            </textarea>
                        </div>
                        <button>Отправить</button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default MainContact;