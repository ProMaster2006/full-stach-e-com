import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './main.scss';
import { Link } from 'react-router-dom';

const Main: FC = () => {

    return (
        <main className='main'>
            <Container className='main__container' fluid='lg'>
                <Row className='main_body' >
                    <Col sm='12' md='6' lg='6' className='main_item main_item-header item-main'>
                       <div className="item-main_slide">
                            <div className="item-main_title">Новые поступления в этом сезоне</div>
                            <div className="item-main_text text-center">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</div>
                            <div className="item-main_btn">
                                <Link to='/shop'>Открыть магазин</Link>
                            </div>
                            
                       </div>
                       {/* <div className="item-main_slide">
                            <div className="item-main_title">Что-то новенькое. Мы заждались тебя.</div>
                            <div className="item-main_text">Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!</div>
                            <a href='#' className="item-main_btn">Открыть магазин</a>
                       </div> */}
                       {/* <div className="item-main_slide">
                            <div className="item-main_title">Включай новый сезон с WOMAZING</div>
                            <div className="item-main_text">Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров</div>
                            <a href='#' className="item-main_btn">Открыть магазин</a>
                       </div> */}
                    </Col>
                    <Col  md='6' lg='6' className='main_item item-images'>
                            <div className="item-images_img item-images_one">
                                <img src="/img/main/01.jpg" alt="" />
                            </div>
                            <div className="item-images_img item-images_too">
                                <img src="/img/main/02.jpg" alt="" />
                            </div>
                            <div className="item-images_img item-images_sree">
                                <img src="/img/main/03.jpg" alt="" />
                            </div>
                 
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Main;