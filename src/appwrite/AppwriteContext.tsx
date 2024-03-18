import { StyleSheet, Text, View } from 'react-native'
import React, { FC, PropsWithChildren, createContext, useState } from 'react'
import AppwriteService from './service'

type AppContextType = {
    appwrite: AppwriteService;
    isLoggedIn: boolean;
    setIsLoggedin: (isLoggedIn: boolean) => void
}

export const AppwriteContext = createContext<AppContextType>({
    appwrite: new AppwriteService(),
    isLoggedIn: false,
    setIsLoggedin: () => {}
});

export const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {

    const [isLoggedIn, setIsLoggedin] = useState();
    const defaultValue = {
        appwrite: new AppwriteService(),
        isLoggedIn: false,
        setIsLoggedin: () => {}
    };

  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  )
}

export default AppwriteContext