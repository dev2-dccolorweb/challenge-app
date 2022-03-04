import React from 'react'
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import colors from './../theme/colors'
import {
    Ionicons as Icon
} from '@expo/vector-icons'

const EmployeeItem = (props) => {
    const {
        item,
        onPress
    } = props

    return (
        <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={onPress}
            style={styles.item}>
            <View style={styles.innerContainer}>
                <Image source={{uri: item.image}} style={styles.contactImage}/>
                <View style={styles.contactDescription}>
                    <Text style={styles.title}>{item.firstname} {item.lastname}</Text>
                    <Text>{item.email}</Text>
                </View>
                <Icon name='chevron-forward-outline' size={16} color={colors.primary} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 8,
        borderColor: '#E0E0E0',
        borderStyle: 'solid',
        borderWidth: 1,
        elevation: 5
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactImage: {
        borderRadius: 8,
        width: 60,
        height: 60
    },
    contactDescription: {
        flex: 1,
        paddingHorizontal: 10
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 5
    },
    caption: {
        color: '#959595'
    }
})

export default EmployeeItem