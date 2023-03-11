import { View, Text } from 'react-native'
import tw from '../../../library/tailwind'

export default function OuterHeader({ title, subTitle, mb }) {
    return (
        <View style={tw`mb-[${mb}px]`}>
            <Text style={tw`${styles.title}`}>{title}</Text>
            <Text style={tw`${styles.subTitle}`}>{subTitle}</Text>
        </View>
    )
}

const styles = {
    title: 'text-dark font-900 text-[24px]',
    subTitle: 'text-[16px] text-grey',
}
