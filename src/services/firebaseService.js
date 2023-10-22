import { collection, doc, getDoc, getDocs, getFirestore, query } from "firebase/firestore"

export const getDocuments = (colName) => {
  const db = getFirestore();
  const colRef = collection(db, colName)
  return colRef
};


export const getOneDocument = (colName, id) => {
  const db = getFirestore();
  const itemRef = doc(db, colName, id)
  let data = null
  return getDoc(itemRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        data = {
          id: snapshot.id,
          ...snapshot.data()
        }
      }
      return data
    })
    .catch((err) => console.log(err))

};


export const getData = (q) => {
  return getDocs(q).then(snapshot => {
    const allData = snapshot.docs.map(document => ({ id: document.id, ...document.data() }))
    return allData
  })
};