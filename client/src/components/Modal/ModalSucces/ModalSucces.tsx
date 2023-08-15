import React, { FC } from 'react';
import './ModalSucces.scss';
import { useAppDispatch, useAppSelector } from '../../../types/storeFunc';
import { toggleVisSuncModal } from '../../../store/ModalsSlice';

const ModalSucces: FC = () => {

    const isHiddenSuncModal = useAppSelector(state => state.modalsReducer.isHiddenSuncModal)
    const dispatch = useAppDispatch();

    const modalClass = ['modal-succes']

    if(isHiddenSuncModal) {
        modalClass.push('hide')
    }

    return (
        <div className={modalClass.join(' ')}>
            <div className="modal-succes__content">
                <div className="modal-succes__title">Отлично! Мы скоро вам перезвоним.</div>
                <a onClick={() => dispatch(toggleVisSuncModal())} href="#" className="modal-succes__btn">Закрыть</a>
            </div>
        </div>
    );
};

export default ModalSucces;