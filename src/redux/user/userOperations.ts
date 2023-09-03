import { toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getUserFromFirebase } from "../../services/firebase/firebaseUserOperations";
import { IAccessCredentials, IUser } from "../../types";

export const fetchUserFromFirebase = async (userId: string): Promise<IUser> => {
    try {
        if (userId) {
            const userFromFirebase = await getUserFromFirebase(userId);
            return userFromFirebase;
        }
    } catch (error) {
        console.log(error);
    }
    throw new Error();
};

export const createNewUserViaFirebase = async (values: IAccessCredentials):Promise<IUser | null> => {
    const { email, password } = values;
    const auth = getAuth();

    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const accessToken = await user.getIdToken();

        const userData = {
          email: user.email,
          id: user.uid,
          token: accessToken,
          };

        return userData;
    } catch (error: any) {
        console.log(error);
        toast.error(error.message)
        return null;
    }
};

export const authoriseUserViaFirebase = async (values: IAccessCredentials):Promise<IUser | null>  => {
    const { email, password } = values;
    const auth = getAuth();

    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        const accessToken = await user.getIdToken();

        const userData = {
          email: user.email,
          id: user.uid,
          token: accessToken,
          };

        return userData;
    } catch (error) {
        console.error(error);
        toast.error("Пользоатель не существует");
        return null;
    }
};