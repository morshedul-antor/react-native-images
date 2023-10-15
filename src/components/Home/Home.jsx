import { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from '../../library/tailwind'
import * as ImagePicker from 'expo-image-picker'

export default function Home() {
    const [imageUri, setImageUri] = useState(null)
    const [name, setName] = useState(null)

    const handleImageUpload = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        })

        const fileUri = result.assets[0].uri
        const path = fileUri.split('/').slice(-1)
        const [name] = path
        setName(name)
        setImageUri(fileUri)
    }

    const uploadImage = async () => {
        const formData = new FormData()
        formData.append('file', {
            uri: imageUri,
            name: name,
            type: 'image/jpeg',
        })

        try {
            const response = await fetch(`https://devec.healthxbd.com/api/v1/admin/s3/profile-pic/1`, {
                headers: {
                    Accept: 'application/json',
                },
                method: 'POST',
                body: formData,
            })

            const text = await response.text()
            console.log('Response text:', text)
        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            {selectedImageUri && <Image source={{ uri: selectedImageUri }} style={{ width: 200, height: 200 }} />}

            <TouchableOpacity>
                <Text style={tw`log_btn`} onPress={handleImageUpload}>
                    Select
                </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={tw`log_btn`} onPress={uploadImage}>
                    Upload
                </Text>
            </TouchableOpacity>
        </View>
    )
}
