import axios from 'axios';
import { IArticle } from '../types';

interface INewsResponce {
  results: IArticle[];
}

const API_KEY = 'pub_26682654cfea1a0deee3410ba05e97dd63239'

export const fetchNews = async (): Promise<IArticle[]> => {
    try {
      const response = await axios.get<INewsResponce>(`https://newsdata.io/api/1/news?apikey=${API_KEY}&q=cyber-security&category=technology`);
      return response.data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
} 
