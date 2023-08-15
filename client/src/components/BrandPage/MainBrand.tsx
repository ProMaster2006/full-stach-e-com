import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import MyButton from '../../UI/MyButton/MyButton';
import './mainBrand.scss';
import { Link } from 'react-router-dom';

const MainBrand: FC = () => {
    return (
        <div className='brand-page__main main-brand-page'>
           <Container fluid='lg'>
              <div className="main-brand-page__header">
                <div className="main-brand-page__title">О бренде</div>
                <div className="main-brand-page__location"><Link to='/' className='main-brand-page__link link'>Главная</Link> -- <Link className='main-brand-page__link link' to='/brand'>О бренде</Link></div>
              </div>
              <div className="main-brand-page__content content-main-brand">
                <Row>
                        <Col lg='4'>
                            <div className="items-content-main-brand__item item-main-brand">
                                <img className="item-main-brand__img px-0" src="/img/brand/01.jpg" alt="" />
                            </div>
                        </Col>
                        <Col lg='8'>
                            <div className="items-content-main-brand__item item-main-brand">
                                <div className="item-main-brand__title">Идея и женщина</div>
                                <div className="item-main-brand__text"> 
                                    <p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p> 
                                    <p>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p> 
                                </div>
                            </div>  
                        </Col>
                </Row>
                <Row>
                        <Col className='pr-[123px] pl-0 py-[77px]'> 
                            <div className="item-content-main-brand__title">Магия в деталях</div>
                            <div className="item-content-main-brand__text">
                                <p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
                                <p>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </p>
                            </div>
                        </Col>
                        <Col className='px-0' lg='4'>
                            <img src="/img/brand/02.jpg" alt="" />
                        </Col>
                </Row>
                <MyButton>Перейти в магазин</MyButton>
              </div>
            </Container>     
        </div>
    );
};

export default MainBrand;