import React, { useContext, useEffect, useState } from 'react'
import AppwriteContext from '../appwrite/AppwriteContext'
import Loading from '../components/Loading'

import AppStack from './AppStack'
import AuthStack from './AuthStack'

const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {appwrite, isLoggedIn, setIsLoggedin} = useContext(AppwriteContext);

    useEffect(() => {
        appwrite.getCurrentUser().then(response => {
            setIsLoading(false)
            if(response){
                setIsLoggedin(true)
            }
        })
        .catch(_ => {
            setIsLoading(false)
            setIsLoggedin(false)
        })
    }, [appwrite, setIsLoggedin])

    if(isLoading){
        return <Loading />
    }

  return (
    isLoggedIn ? <AppStack /> : <AuthStack />
  )
}

export default Router