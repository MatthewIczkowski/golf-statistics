import React, { useEffect } from 'react'
import { useState, UseEffect } from 'react'
import { db } from '../../src/firebase';
import { query, onSnapshot, collection } from 'firebase/firestore';

const useFirestore = (col) => {
  const [docs, setDocs ] = useState([]);

  useEffect(() => {

    const q = query(collection(db, col));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const roundlist = [];
        querySnapshot.forEach((doc) => {
            roundlist.push({id: doc.id, ...doc.data()});
        });
        setDocs(roundlist);
    });
    return () => unsubscribe();
  }, [col])

  return { docs };
}

export default useFirestore