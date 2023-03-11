import AsyncStorage from '@react-native-async-storage/async-storage'

// storing data
export const setStorage = (key, value) => {
    AsyncStorage.setItem(key, value)

    const getStorage = async () => {
        const info = await AsyncStorage.getItem(key)

        if (info !== null) {
            return info
        } else {
            return null
        }
    }
    getStorage()
}

// getting data
export const getStorage = async (setOption, key) => {
    const info = await AsyncStorage.getItem(key)

    if (info !== null) {
        setOption(info)
    } else {
        setOption(null)
    }
}
