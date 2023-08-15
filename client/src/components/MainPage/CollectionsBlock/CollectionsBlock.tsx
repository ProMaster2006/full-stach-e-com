import React, { FC, useEffect } from 'react';
import './collectionsblock.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { fetchAllDevices, fetchSortDevices } from '../../../store/DeviseStore';
import { useAppDispatch, useAppSelector } from '../../../types/storeFunc';
import { fetchTypes } from '../../../store/TypeSlice';
import { isTemplateHead } from 'typescript';
import MySpinner from '../../../UI/MySpinner/MySpinner';


const CollectionsBlock = () => {

    useEffect(() => {
        dispatch(fetchAllDevices('64da66c7d535e80254df495f'))
        dispatch(fetchTypes())
    }, [])

    const dispatch = useAppDispatch()
    const { devices, loading} = useAppSelector(state => state.deviceSlice)

    const navigate = useNavigate();

    return (
        <div className='main-page_collections-block collections-block'>
            <Container fluid='lg'>
                <h2 className="collections-block_title">Новая коллекция</h2>
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
                <div className="collections-block_btn"><Link to="/shop">Открыть магазин</Link></div>
            </Container>
        </div>
    );
};

export default CollectionsBlock;