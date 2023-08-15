import React from 'react';
import './footer.scss'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='footer' >
            <Container fluid='lg'>
                <Row>
                    <Col className='footer_info info-block-footer'>
                        <div className="info-block-footer__item">© Все права защищены</div>
                        <div className="info-block-footer__item">Политика конфиденциальности</div>
                        <div className="info-block-footer__item">Публичная оферта</div>
                    </Col>
                    <Col className='footer_nav nav-footer'>
                        <div className="nav-footer_tel">+7 (495) 823-54-12</div>
                        <div className="nav-footer_email">hello@womazing.com</div>
                        <Row className="nav-footer_group-icons group-icons-nav">
                            <Col className="group-icons-nav">
                                <img src="/img/footer/01.svg" alt="" />
                            </Col>
                            <Col className="group-icons-nav"> <img src="/img/footer/02.svg" alt="" /> </Col>
                            <Col className="group-icons-nav"> <img src="/img/footer/03.svg" alt="" /> </Col>
                        </Row>
                        <div className="nav-footer__card"><img src="/img/footer/visa-mastercard.svg" alt="" /></div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;