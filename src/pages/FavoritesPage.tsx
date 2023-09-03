import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useAppSelector } from "../hooks/redux-hooks";
import Container from "../components/Container"
import ProductsGrid from "../components/ProductsGrid";

const FavoritesPage = () => {
    
    const { isAuth } = useAuth();

    const favorites = useAppSelector(state => state.products.favorites);

    const authContent = favorites.length > 0 ?
        <ProductsGrid gridItems={favorites} /> :
        <p className="favoritesTxt">Вы ещё не добавили ни одного продукта</p>;
    
    const notAuthContent = <>
        <p className="favoritesTxt">Для того, чтобы получитьдоступ к избранным продуктам необходимо авторизоваться</p>
        <NavLink to={"/login"}>
            <button className="favoritesButton">Вход</button>
        </NavLink>
    </>;

    const content = isAuth ? authContent : notAuthContent;

    return (
        <div className='favorites'>
            <Container>
                <h3 className='favoritesTitle'>Понравившиеся продукты:</h3>
                {content}
            </Container>
        </div>
    )
}

export default FavoritesPage;