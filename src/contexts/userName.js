import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect, createContext } from 'react'

const UserName = createContext(null)

export const UserNameProvider = ({ children }) => {
    const [userName, updateUserName] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const data = await AsyncStorage.getItem('userName')
            updateUserName(data)
        }
        fetchData()
    }, [])

    const setUserName = async (value) => {
        await AsyncStorage.setItem('userName', value)
        updateUserName(value)
    }

    return <UserName.Provider value={{ userName, setUserName }}>{children}</UserName.Provider>
}

export default UserName
