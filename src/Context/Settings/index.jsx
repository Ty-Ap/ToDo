import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [pageItems, setPageItems] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  const values = {pageItems, showCompleted, sort, setSort, setPageItems, setShowCompleted};

  return (
    <SettingsContext.Provider value={values}>
      <h2>Settings</h2>
      
      {children}
      {/* <button onClick={(e)=>{if(!setShowCompleted){setShowCompleted(true);}}}>Show Complete? : </button> */}
    </SettingsContext.Provider>
  )

}

export default SettingsProvider;