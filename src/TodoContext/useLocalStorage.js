import React from "react";

function useLocalStorage(itemName, initValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initValue);
  
    React.useEffect(() => {
      setTimeout(()=> {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initValue));
            parsedItem = initValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          console.log('use effect error', error);
          setError(error);
        }
      }, 3000);
    });
  
    const saveItem = (newITem) => {
        try{
          const stringFielItem = JSON.stringify(newITem);
          localStorage.setItem(itemName, stringFielItem);
          setItem(newITem);
        } catch (error) {
          console.log(error);
          setError(error);
        }
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    }
  }

  export {useLocalStorage};