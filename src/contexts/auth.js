import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect, createContext } from 'react'

const Auth = createContext(null)

export const AuthProvider = ({ children }) => {
    const [auth, updateAuth] = useState('false')

    useEffect(() => {
        async function fetchData() {
            const data = await AsyncStorage.getItem('auth')
            updateAuth(data)
        }
        fetchData()
    }, [])

    const setAuth = async (value) => {
        await AsyncStorage.setItem('auth', value)
        updateAuth(value)
    }

    return <Auth.Provider value={{ auth, setAuth }}>{children}</Auth.Provider>
}

export default Auth
