import React, { FC, useEffect } from 'react';
import { Row, Container, Col, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchAllDevices, fetchSortDevices } from '../../../store/DeviseStore';
import { useAppDispatch, useAppSelector } from '../../../types/storeFunc';
import './main.scss'
import { fetchTypes } from '../../../store/TypeSlice';
import MySpinner from '../../../UI/MySpinner/MySpinner';
import { Link } from 'react-router-dom';

const Main: FC = () => {

    useEffect(() => {
        dispatch(fetchAllDevices('64da66c7d535e80254df495f'))
        dispatch(fetchTypes())
    }, [])

    const dispatch = useAppDispatch()
    const { devices, loading } = useAppSelector(state => state.deviceSlice)
    const { types, selectedType } = useAppSelector(state => state.TypeReducer);

    const totalCount = devices.length;

    const navigate = useNavigate();


    const clickHandler = (id: string | any) => {
      dispatch(fetchSortDevices({typeId: id}))
    }

    return (
        <main className='main-block'>
            <Container fluid='lg'>
                <h1 className="main-block__title">Магазин</h1>
                <div className="main-block__location"><Link to='/' className='main-block__link link'>Главная</Link> -- <Link className='main-block__link link' to='/shop'>Магазин</Link></div>
                <Row className="main-block__types types-main-block">
                    {
                        types.map(item => {
                            return  <Col key={item._id} onClick={() => clickHandler(item._id)} className='types-main-block__item'>{item.name}</Col>
                        })
                    }
                </Row>
                <div className="main-block__count-item">Показано {totalCount} из {totalCount}</div>
                {
                    loading ?
                    <MySpinner/>
                    :
                    <Row className="main-block__items">
                        {
                            devices.map(item => {
                                return <Col onClick={() => navigate(`/devicePage/${item._id}`)} key={item._id} className='main-block__item item-main-block'>
                                        <div className="item-main-block__img"><img src={`/img/shop/${item.img}.jpg`} alt=""  /></div>
                                        <div className="item-main-block__title">{item.name}</div>
                                        <div className="item-main-block__price">{item.price + '$'}</div>
                                        </Col>
                            })
                        }
                    </Row>
                }
                
            </Container>
        </main>
    );
};

export default Main;