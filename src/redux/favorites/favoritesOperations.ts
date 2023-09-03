import { getFavoritesFromFirebase } from "../../services/firebase/firebaseFavoritesOperations";
import { IProduct } from "../../types";

export const fetchFavoritesFromFirebase = async (userId: string): Promise<IProduct[]> => {
    if (userId) {
        try {
            const favoritesArray = await getFavoritesFromFirebase(userId);
            return favoritesArray;                
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    throw new Error("userId is missing.");
};