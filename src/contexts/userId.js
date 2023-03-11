import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect, createContext } from 'react'

const UserId = createContext(null)

export const UserIdProvider = ({ children }) => {
    const [userId, updateUserId] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const data = await AsyncStorage.getItem('userId')
            updateUserId(data)
        }
        fetchData()
    }, [])

    const setUserId = async (value) => {
        await AsyncStorage.setItem('userId', value)
        updateUserId(value)
    }

    return <UserId.Provider value={{ userId, setUserId }}>{children}</UserId.Provider>
}

export default UserId
