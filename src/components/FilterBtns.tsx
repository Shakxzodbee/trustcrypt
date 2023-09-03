interface FilterBtnsProps {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const FilterBtns = ({ categories, activeCategory, setActiveCategory }: FilterBtnsProps) => {
    
    const setActiveStyles = (category: string) => {
        return activeCategory === category ? 'active' : '';
    };
    
    const categoryButtons = categories.map(category => (
        <button
            className={`filterBtn ${setActiveStyles(category)}`}
            key={category}
            onClick={() => setActiveCategory(category)}
        >
            {category}
        </button>
    ));

    return (
        <div className="filter">
            <button
                className={`filterBtn ${setActiveStyles('all')}`}
                onClick={() => setActiveCategory('all')}
            >
                Все
            </button>
            {categoryButtons}
        </div>
    )
}

export default FilterBtns;