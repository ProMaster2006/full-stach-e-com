import React, { FC, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../types/storeFunc';
import { fetchDeviceItem } from '../../store/DeviceItemSlice';
import './mainDeviceItem.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { inputsBskDevice } from '../../types/inputs';
import { toggleVisSuncModal } from '../../store/ModalsSlice';
import { fetchBasketDeviceItem } from '../../store/BasketDeviceItemSLice';

const MainDevicePage: FC = () => {

    const { id } = useParams()
    const dispatch = useAppDispatch();

    const user  = useAppSelector(state => state.UserReducer.user);

    
    useEffect(() => {
        dispatch(fetchDeviceItem(id))
    }, [])

    const { _id, img, name, price } = useAppSelector(state => state.deviceItemReducer.deviceItem)

    const { register, handleSubmit, reset } = useForm<inputsBskDevice>();

    const onSubmit: SubmitHandler<inputsBskDevice> = (data) => {

        const body = {
            device_id: _id,
            basket_id: user.bskId,
            ...data,
            img,
            price
        }

        dispatch(fetchBasketDeviceItem(body))
        reset()
        dispatch(toggleVisSuncModal())
    }

    return (
        <div className='main-device-page'>
            <Container>
                <div className="main-device-page__item item-main-device-page">
                    <div className="item-main-device-page__title">{name}</div>
                    <Row className="item-main-device-page__body">
                        <Col className="item-main-device-page__img" lg='4'>
                            <img src={`/img/shop/${img}.jpg`} alt="" />
                        </Col>
                        <Col className="item-main-device-page__info">
                            <div className="item-main-device-page__price">{`$${price}`}</div>
                            <form onSubmit={handleSubmit(onSubmit)} className="item-main-device-page__form">
                                <div className="item-main-device-page__choose-size choose-size-item">
                                    <div className="choose-size-item__title">Выберите размер</div>
                                    <div className='choose-size-item__items'>
                                        <label className='choose-size-item'><input name='size' type='radio' value='S'/><span>S</span></label>
                                        <label><input {...register('size')} name='size' value='M' type='radio'/><span>M</span></label>
                                        <label><input {...register('size')} name='size' value='L' type='radio'/><span>L</span></label>
                                        <label><input {...register('size')} name='size' value='XL' type='radio'/><span>XL</span></label>
                                        <label><input {...register('size')} name='size' value='XLL' type='radio'/><span>XLL</span></label>
                                    </div>
                                </div>
                                <div className="item-main-device-page__choose-color choose-color">
                                    <div className="choose-color-item__title">Выберите цвет</div>
                                    <label className='choose-color_item-select'><input {...register('color')} name='color' value='gray' type='radio'/><div className='gray'></div></label>
                                    <label className='choose-color_item-select'><input {...register('color')} name='color' value='blue' type='radio'/><div className='blue'></div></label>
                                    <label className='choose-color_item-select'><input {...register('color')} name='color' value='pink' type='radio'/><div className='pink'></div></label>
                                    <label className='choose-color_item-select'><input {...register('color')} name='color' value='yellow' type='radio'/><div className='yellow'></div></label>
                                </div>

                                <div>
                                    <input {...register('count')} type="text" />
                                    <button >Добавить в корзину</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default MainDevicePage;