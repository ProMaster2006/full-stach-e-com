import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import './header.scss';
import { useAppDispatch, useAppSelector } from '../../types/storeFunc';
import { toggleVisRegModal, toggleVisLoginModal } from '../../store/ModalsSlice';
import { Link } from 'react-router-dom';
import { toggleIsAuth } from '../../store/UserSlice';
import { toggleMenuBurger } from '../../store/MenuBurgerSlice';

const Header: FC = () => {

    const burgerMenuClass = ['header__burger-menu', 'burger-menu',]


    const dispatch = useAppDispatch()

    const { isAuth } = useAppSelector(state => state.UserReducer);
    const { activeMenuBurger } = useAppSelector(state => state.MenuBurgerReducer)

    if(activeMenuBurger) {
        burgerMenuClass.push('burger-menu__active')
    }

    const signUpHandler = () => {
        dispatch(toggleVisRegModal())
    }

    const logOut = () => {
        dispatch(toggleIsAuth())
        localStorage.setItem('token', 'exit')
    }

   

    return (
            <header className='header'>
                <Container fluid='lg' className='header__container'>
                    <div className="header__content">
                        <div className='header__logo'>
                        <Link to='/'><img  src='/img/header/logo01.png' alt="" /></Link>
                        </div>
                        <nav className='header__nav nav-header'>
                                <Link to='/' className="nav-header__item">Главная</Link>
                                <Link to='/shop' className="nav-header__item">Магазин</Link>
                                <Link to='/brand' className="nav-header__item">О бренде</Link>
                                <Link to='/contact' className="nav-header__item">Контакты</Link>
                        </nav>
                        <div className='header__tel info-header'> 
                            <img src="/img/header/call.svg" alt="call" />
                            <div className='info-header__tel'> +7 (495) 823-54-12</div>
                        </div>
                        <div className='header__group-buttons'>
                                <a href='#' className='header__btn' onClick={signUpHandler} >Registration</a>
                                { 
                                    isAuth ?
                                    <a  href='#' className='header__btn' onClick={logOut}>Log Out</a>       
                                           :
                                    <a  href='#' className='header__btn' onClick={() => dispatch(toggleVisLoginModal())}>Login</a>
                                    
                                }
                        <Link to='/basket' className='header__basket'><img src="/img/header/basket.svg" alt="basket" /></Link>
                        
                        </div>
                    </div>    
                </Container>
            </header>
    );
};

export default Header;