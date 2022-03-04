import React from 'react'
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native'
const IMAGE_SIZE = 100
const Details = ({route, navigation}) => {
    const { employee } = route.params

    const Field = ({title, value}) => {
        return (
            <View>
                <Text style={styles.fieldTitle}>{title}</Text>
                <Text style={styles.fieldValue}>{value}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column',  padding: 10}}>
            <View style={{flexDirection: 'column', alignItems: 'center', paddingVertical: 15}}>
                <Image source={{uri: employee.image}} style={{width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: IMAGE_SIZE / 2}}/>
                <View style={styles.employeeTitle}>
                    <Text style={styles.title}>{employee.firstname} {employee.lastname}</Text>
                    <Text>{employee.email}</Text>
                </View>
            </View>
            <Field title={'Phone:'} value={employee.phone} />
            <Field title={'Gender:'} value={employee.gender} />
            <Field title={'Birthday:'} value={employee.birthday} />
            <Field title={'Address:'} value={`${employee.address.street}, ${employee.address.streetName}, ${employee.address.city}`} />
        </View>
    )
}

const styles = StyleSheet.create({
    employeeTitle: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    fieldTitle: {
        fontSize: 14
    },
    fieldValue: {
        padding: 10,
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        borderColor: '#E0E0E0',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        marginTop: 5,
        marginBottom: 15
    }
})

export default Details