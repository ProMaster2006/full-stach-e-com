import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './impotantBlock.scss'


const ImpotantBlock = () => {
    return (
        <div className='impotant-block'>
            <Container fluid='lg'>
             <div className="impotant-block__title">Что для нас важно</div>
             <Row className='impotant-block__items'>
                <Col xl='4' lg='4' md='6' sm='12' className='impotant-block__item item-impot-block'>
                    <div className="item-impot-block__img"><img src="/img/impotant/01.svg" alt="" /></div>
                    <div className="item-impot-block__title">Качество</div>
                    <div className="item-impot-block__text">Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</div>
                </Col>
                <Col xl='4' lg='4' md='6' sm='12' className='impotant-block__item item-impot-block'>
                    <div className="item-impot-block__img"> <img width='61px' height='61px' src="/img/impotant/02.svg" alt="" /> </div>
                    <div className="item-impot-block__title">Скорость</div>
                    <div className="item-impot-block__text">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</div>
                </Col>
                <Col xl='4' lg='4' md='12' sm='12' className='impotant-block__item item-impot-block'>
                    <div className="item-impot-block__img"><img width='61px' height='61px' src="/img/impotant/03.svg" alt="" /></div>
                    <div className="item-impot-block__title">Ответственность</div>
                    <div className="item-impot-block__text">Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</div>
                </Col>
             </Row>
            </Container>
        </div>
    );
};

export default ImpotantBlock;