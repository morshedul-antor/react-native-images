import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect, createContext } from 'react'

const UserRole = createContext(null)

export const UserRoleProvider = ({ children }) => {
    const [userRole, updateUserRole] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const data = await AsyncStorage.getItem('userRole')
            updateUserRole(data)
        }
        fetchData()
    }, [])

    const setUserRole = async (value) => {
        await AsyncStorage.setItem('userRole', value)
        updateUserRole(value)
    }

    return <UserRole.Provider value={{ userRole, setUserRole }}>{children}</UserRole.Provider>
}

export default UserRole
