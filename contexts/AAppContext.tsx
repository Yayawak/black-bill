import { createContext } from 'react';
import TAppContext from '../types/Contexts';

const AAppContext = createContext<TAppContext>({
    isSuccessLogin : false
})

export default AAppContext
