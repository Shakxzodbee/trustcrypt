import { useEffect } from 'react';
import { setUser } from "../redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "./redux-hooks";
import { fetchUserFromFirebase } from '../redux/user/userOperations';
 
export const useAuth = () => {
    const localStorageUserId = localStorage.getItem('userId');
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (localStorageUserId) {
            fetchUserFromFirebase(localStorageUserId).then(user => dispatch(setUser(user)));
        }

    }, [localStorageUserId, dispatch]);

    const { email, id, token } = useAppSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}