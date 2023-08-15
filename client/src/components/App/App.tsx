import React, { useEffect, FC } from 'react';
import AppRouter from './AppRouter';
import { useAppDispatch, useAppSelector } from '../../types/storeFunc';
import { check } from '../../store/UserSlice';
import MySpinner from '../../UI/MySpinner/MySpinner';

const App: FC = () => {
 
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(check())
  }, [dispatch])

  const loading = useAppSelector(state => state.UserReducer.loading)

  if(loading) {
    return <MySpinner/>
  }
  
  return (
    <div className="App">
        <AppRouter/>
    </div>  
  );
}

export default App;
