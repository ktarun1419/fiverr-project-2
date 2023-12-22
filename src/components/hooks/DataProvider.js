import React, { useState, useEffect, useContext, createContext } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db, app, msg } from "../../firebase";
import { getMessaging, getToken } from "firebase/messaging";
import { getDatabase, ref, set } from "firebase/database";
import { async } from "@firebase/util";

const TokenProviderContext = createContext();

export function useTokenProvider() {
  return useContext(TokenProviderContext);
}

export default function TokenProvider({ children }) {
  const [stakedToken, setStakedToken] = useState();
  useEffect(() => {
    if (stakedToken) {
      updateHandler();
    }
  }, [stakedToken]);
  const updateHandler = () => {
    const docRef = doc(db, "staked", "4OSp2EP1GfSsHnYvJZ1I");
    setDoc(docRef, { stakedToken })
      .then((res) => {
        console.log("Entire Document has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const value = { setStakedToken };
  return (
    <TokenProviderContext.Provider value={value}>
      {children}
    </TokenProviderContext.Provider>
  );
}
