import { Platform } from 'react-native'

export const Android = Platform.OS === 'android'
export const Ios = Platform.OS === 'ios'
export const Web = Platform.OS === 'web'
export const Windows = Platform.OS === 'windows'
