import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect, createContext } from 'react'

const Token = createContext(null)

export const TokenProvider = ({ children }) => {
    const [token, updateToken] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const data = await AsyncStorage.getItem('token')
            updateToken(data)
        }
        fetchData()
    }, [])

    const setToken = async (value) => {
        await AsyncStorage.setItem('token', value)
        updateToken(value)
    }

    return <Token.Provider value={{ token, setToken }}>{children}</Token.Provider>
}

export default Token
