import { View, Image } from 'react-native'
import tw from '../../../library/tailwind'

export default function HxLogoIcon({ position }) {
    return (
        <View style={tw`flex-row justify-${position}`}>
            <Image style={tw`${styles.img}`} source={require('../../../assets/images/logo/hx-blue.png')} />
        </View>
    )
}

const styles = {
    img: 'w-[36px] h-[36px] my-[20px]',
}
