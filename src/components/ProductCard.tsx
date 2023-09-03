import { useState, useEffect} from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { prodImages } from '../assets/images/pictures';
import { useAuth } from '../hooks/use-auth';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { addFavorite, deleteFavorite } from '../redux/favorites/favoritesSlice';
import { addToFirebaseFavorites, removeFromFirebaseFavorites } from '../services/firebase/firebaseFavoritesOperations';
import { IProduct } from '../types';
import { Popover, Skeleton } from 'antd';

interface ProductCardProps {
    product: IProduct;
}

type TProdImages = typeof prodImages;

const ProductCard = ({ product }: ProductCardProps) => {
    const { isAuth, id: userId } = useAuth();

    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.products.favorites);
    
    const { path, name, description } = product;
    const imgName: keyof TProdImages = path;
    const imgSrc = prodImages[imgName];

    const initialIsFavorite = favorites.some(fav => fav.id === product.id);

    const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

    useEffect(() => {
        setIsFavorite(initialIsFavorite);
    }, [initialIsFavorite])

    const togglePreferenceIcon = () => {
        setIsFavorite(prev => !prev);
    };

    const onPreferenceIconClick = (product: IProduct) => {
        if (!isAuth) {
            alert("Авторизуйтесь, чтобы добавить продукт в избранное");
            return null;
        }

        if (userId) {
            if (isFavorite) {
                dispatch(deleteFavorite(product.id));
                removeFromFirebaseFavorites(userId, product.id);
            } else {
                dispatch(addFavorite(product));
                addToFirebaseFavorites(userId, product);
            }
            togglePreferenceIcon();
        } 
    }

    const preferenceIcon = (isFavorite && isAuth) ? <FcLike size={24} /> : <FcLikePlaceholder size={24} />;

    const image = imgSrc ?
        <img className='productCardImg' src={imgSrc} alt={name} /> :
        <Skeleton.Image active={!imgSrc} />;
    
    return (

        <div className="productCard">
            <div className='productCardImgWrap'>
                {image}
                <Popover content="Добавить в избранное" >
                    <span
                        className='productCardFavorite'
                        onClick={()=>onPreferenceIconClick(product)}
                    >
                        {preferenceIcon} 
                    </span>
                </Popover>
            </div>
            <h3 className='productCardName'>{name}</h3>
            <p className='productCardDescription'>{description}</p>
        </div>
    )
}

export default ProductCard;