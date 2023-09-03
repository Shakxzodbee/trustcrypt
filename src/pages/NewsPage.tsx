import { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import { fetchNews } from '../services/newsAPI';
import { IArticle} from '../types';
import Container from '../components/Container';
import Article from '../components/Article';

const NewsPage = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [articlesAreLoading, setArticlesAreLoading] = useState(true);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const articlesData = await fetchNews(); 
                setArticles(articlesData);
            } catch (error) {
                console.log(error);
            } finally {
                setArticlesAreLoading(false);
            }
        }
        getArticles();
    }, [])

    const articlesList = articles?.length > 0 && (
        <ul>
            {articles?.map(article => (
                    <li key={article.title}>
                        <Article article={article} />
                    </li>
                )
            )}
        </ul>
    );
            
    return (
        <div className="news">
            <Container>
                <h1 className='newsTitle'>Последние события в мире киберпространства</h1>
                <p className='newsText'>Ознакомьтесь с информацией, чтобы быть в курсе новейших киберугроз и получить советы экспертов по безопасности. </p>
                <div className='spinWrap'>
                    <Skeleton loading={articlesAreLoading} paragraph={{ rows: 10 }} active />
                </div>
                {articlesList}
            </Container>
        </div>
    )
}

export default NewsPage;

