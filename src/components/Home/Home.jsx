import { Octicons } from '@expo/vector-icons'
import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import UserName from '../../contexts/userName'
import tw from '../../library/tailwind'
import { Wrapper } from '../Resource'
import * as DocumentPicker from 'expo-document-picker'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

export default function Home() {
    const { userName, setUserName } = useContext(UserName)

    const handleSubmit = () => {
        setUserName('Welcome!')
    }

    const handleImageUpload = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
            })
            console.log(result)

            if (!result.canceled) {
                const fileUri = result.assets[0].uri

                // Read the file using expo-file-system
                const fileContent = await FileSystem.readAsStringAsync(fileUri, {
                    encoding: FileSystem.EncodingType.Base64,
                })

                // Create a FormData object to send the file data
                const formData = new FormData()
                formData.append('image', fileContent)

                // Send the file to the backend server using axios
                const response = await fetch(`api`, {
                    headers: {
                        Accept: 'appllication/json',
                        type: 'image/jpeg',
                    },
                    method: 'POST',
                    body: formData,
                })

                if (response.ok) {
                    console.log('Image uploaded successfully:', response.data)
                }
            }
        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }

    const handleFileUpload = async () => {
        try {
            const file = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
            })
            console.log(file)

            if (file.type === 'success') {
                const fileUri = file.uri

                // Read the file using expo-file-system
                // Fetch the file content as Blob
                const data = await fetch(fileUri)
                const blob = await data.blob()

                const formData = new FormData()
                const reader = new FileReader()

                reader.onloadend = () => {
                    const fileContent = reader.result
                    formData.append('pdf', fileContent)
                }
                reader.readAsDataURL(blob)

                // Send the file to the backend server using axios
                const response = await fetch(`api`, {
                    headers: {
                        Accept: 'appllication/json',
                        type: 'file/pdf',
                    },
                    method: 'POST',
                    body: formData,
                })

                if (response.ok) {
                    console.log('File uploaded successfully:', response.data)
                }
            }
        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }

    return (
        // <Wrapper>
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <Octicons style={tw`mx-auto mt-[-60px] mb-[0px]`} name="device-mobile" size={44} color="black" />
            <Text style={tw`font-700 text-[18px] mb-[10px]`}>React Native Expo Boilerplate</Text>

            <TouchableOpacity>
                <Text style={tw`log_btn`} onPress={handleFileUpload}>
                    Press
                </Text>
            </TouchableOpacity>

            <Text>{userName}</Text>
        </View>
        // </Wrapper>
    )
}
