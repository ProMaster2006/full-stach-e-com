import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, stateRoot } from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<stateRoot> = useSelector;