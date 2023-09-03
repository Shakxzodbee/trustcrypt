import { useState } from 'react';
import Container from '../components/Container';
import FilterBtns from '../components/FilterBtns';
import ProductsGrid from '../components/ProductsGrid';
import { IProduct } from '../types';

const products: IProduct[] = require('../utils/products.json');

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const uniqueCategories = products
        .map(product => product.category)
        .filter((category, index, arr) => arr.indexOf(category) === index);

    const productsFilteredByActiveCategory = products.filter(product => product.category === activeCategory);
    const gridItems = activeCategory === "all" ? products : productsFilteredByActiveCategory;

    return (
        <div className="products">
            <Container>
                <h1 className='productsTitle'>Наши продукты</h1>
                <p className='productsText'>Мы придерживаемся в своей работе простого принципа: детектировать <br/> и блокировать любую вредоносную атаку.</p>
                <FilterBtns
                    categories={uniqueCategories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                <ProductsGrid gridItems={gridItems}/>
            </Container>
        </div>
    )
}

export default ProductsPage;