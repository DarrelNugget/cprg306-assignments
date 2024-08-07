import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getShoppingList(userId) {
    try {
        
        const itemsRef = collection(db, 'users', userId, 'items');
        
        
        const q = query(itemsRef);
        const querySnapshot = await getDocs(q);

        
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return items;
    } catch (error) {
        console.log('There was an error retrieving the shopping list: ', error);
        throw error;
    }
}
export async function addItem(userId, item) {
    try{
        const itemsRef = collection(db, 'users', userId, 'items');
        const docRef = await addDoc(itemsRef, item);
        return docRef;
    }
    catch(error){
        console.log('There was an error adding the item: ', error);
        throw error;
    }
}

export async function deleteItem(userId, itemId){
    try {
      const docRef = doc(db, 'users', userId, 'items', itemId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('There was an error deleting the item: ', error);
      throw error;
    }
  }