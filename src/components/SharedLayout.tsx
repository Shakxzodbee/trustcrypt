import { Suspense } from "react";
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import { useAppDispatch } from "../hooks/redux-hooks";
import { useAuth } from "../hooks/use-auth";
import { addFavorite } from "../redux/favorites/favoritesSlice";
import { fetchFavoritesFromFirebase } from "../redux/favorites/favoritesOperations";
import Header from "./header/Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const SharedLayout = () => {
    const dispatch = useAppDispatch();
    const { id: userId } = useAuth();

    useEffect(() => {
        if (userId) {
            fetchFavoritesFromFirebase(userId).then(favorites => {
                favorites.forEach((favorite) => dispatch(addFavorite(favorite)))
            });
        }
        
    }, [ userId, dispatch]);
    
    return (
        <div className="layoutContainer">
            <Header />
            <Suspense fallback={<Spin size="large"/>}>
                <Outlet/>
            </Suspense>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default SharedLayout;