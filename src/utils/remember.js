import AsyncStorage from '@react-native-async-storage/async-storage'

export const setSavedLogin = async (remember, identifier, password) => {
    if (remember) {
        try {
            await AsyncStorage.setItem('identifier', identifier)
            await AsyncStorage.setItem('password', password)
        } catch (error) {
            console.log('Error saving login details: ', error)
        }
    }
}

export const getSavedLogin = async (setIdentifier, setPassword, setRemember) => {
    const identifier = await AsyncStorage.getItem('identifier')
    const password = await AsyncStorage.getItem('password')

    if (identifier !== null && password !== null) {
        setIdentifier(identifier)
        setPassword(password)
        setRemember(true)
    }
}
