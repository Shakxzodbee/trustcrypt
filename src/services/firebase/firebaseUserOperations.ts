import { db } from "./firebase";
import {  IUser } from "../../types";
import { onValue, ref, child, set } from 'firebase/database';

export const addUserToFirebase = (user: IUser) => {
    const userRef = ref(db, "users/");
    user.id && set(child(userRef, user.id), user); 
}

export const getUserFromFirebase = (userId: string): Promise<IUser> => {
    const userRef = ref(db, `users/${userId}`);

    return new Promise((resolve, reject) => {
        onValue(userRef, (snapshot) => {
            const userFromFirebase = snapshot.val();
            if (userFromFirebase) {
                resolve(userFromFirebase);
            }
        }, (error) => reject(error));
    })
}