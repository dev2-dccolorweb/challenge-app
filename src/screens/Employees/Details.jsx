import React from 'react'
import {
    Image,
    View
} from 'react-native'

const Details = ({route, navigation}) => {
    const { employee } = route.params
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', padding: 10}}>
            <Image source={{uri: employee.image}} style={{width: 100, height: 100, borderRadius: 50}}/>
        </View>
    )
}

export default Details