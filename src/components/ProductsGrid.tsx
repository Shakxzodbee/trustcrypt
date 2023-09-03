import { IProduct } from '../types';
import ProductCard from './ProductCard';

interface ProductsGridProps {
    gridItems: IProduct[] ;
}

const ProductsGrid = ({ gridItems }: ProductsGridProps) => {
    
    const productItems = gridItems.map(gridItem => (
        <li key={gridItem.id}>
            <ProductCard product={gridItem} />
        </li>
    )
    );         
    
    return (
        <ul className='grid'>
            {productItems}
        </ul>
    )
}

export default ProductsGrid;