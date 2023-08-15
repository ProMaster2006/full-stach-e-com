import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './teamblock.scss'

const TeamBlock: FC = () => {
    return (
        <div className='team-block'>
            <Container fluid='lg'>
                <h2 className="team-block__title">Команда мечты Womazing</h2>
                <Row className='team-block__content content-team-block flex justify-between items-center'>
                    <Col className='content-team-block__slider slider-team-block' xl='9'>
                        <div className="slider-team-block__item">
                            <img src="/img/teamblock-slider/02.jpg" alt="" />
                        </div>
                    </Col>
                    <Col className='content-team-block__info' xl='3'>
                        <div className="content-team-block__title">Для каждой</div>
                        <div className="content-team-block__text">
                            <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                            <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                        </div>
                        <a href="#" className="content-team-block__link">Подробнее о бренде</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamBlock;