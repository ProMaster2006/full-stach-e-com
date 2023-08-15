import React, { FC, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './mainBasketPage.scss'
import { useAppDispatch } from '../../../types/storeFunc';
import { getBasketsItems } from '../../../store/BasketDeviceItemSLice';
import { useAppSelector } from '../../../types/storeFunc';
import { toggleVisSuncModal } from '../../../store/ModalsSlice';
import { fetchClearBasketItems } from '../../../store/BasketDeviceItemSLice';

const Main: FC = () => {

    const dispatch = useAppDispatch();

    const { user, isAuth } = useAppSelector(state => state.UserReducer)
    const basketItems = useAppSelector(state => state.basketDeviceReducer.basketItems)

    useEffect(() => {
        dispatch(getBasketsItems())
    }, [isAuth])

    if(!isAuth) {
        return <h2>Спочатку війдіть в акаунт</h2>
    }

    const clickHandler = () => {
        dispatch(toggleVisSuncModal())
        dispatch(fetchClearBasketItems(user.bskId))
    }

    return (
        <div className='main-block-basket-page'>
            <Container fluid='lg'>
                <div className="main-block-basket-page__title">Корзина</div>
                <div className="main-block-basket-page__location">Главная --- Корзина</div>
                <div className="main-block-basket-page__body">
                    <Row className='main-block-basket-page__items'>
                        <Col className='main-block-basket-page__item' lg='6'>Товар</Col>
                        <Col className='main-block-basket-page__item' lg='2'>Цена</Col>
                        <Col className='main-block-basket-page__item' lg='2'>Количество</Col>
                        <Col className='main-block-basket-page__item' lg='2'>Всего</Col>
                    </Row>



                    <Row className='main-block-basket-page__goods'>
                        {
                            basketItems.map(item => {
                                return <>
                                        <Col className='main-block-basket-page__item' lg='6'><img width={50} height={50} src={`/img/shop/${item.img}.jpg`} alt="" /></Col>
                                        <Col className='main-block-basket-page__item' lg='2'>{item.price}</Col>
                                        <Col className='main-block-basket-page__item' lg='2'>{item.count}</Col>
                                        <Col className='main-block-basket-page__item' lg='2'>{+item.price * +item.count}$</Col>
                                       </>
                            })
                        }
                    </Row>
                </div>
                <div className='my-button'><a href='#' className='main-block-basket-page__button' onClick={() => clickHandler()}>Сделать заказ</a></div>
            </Container>
        </div>
    );
};

export default Main;