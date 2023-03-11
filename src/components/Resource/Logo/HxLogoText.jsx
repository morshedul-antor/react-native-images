import { View, Image } from 'react-native'
import tw from '../../../library/tailwind'

export default function HxLogoText({ position }) {
    return (
        <View style={tw`flex-row justify-${position}`}>
            <Image
                style={tw`${styles.img}`}
                source={require('../../../assets/images/logo/hx-blue-fit.png')}
                resizeMode="cover"
            />
        </View>
    )
}

const styles = {
    img: 'w-[120px] h-[30px] my-[20px]',
}
