import React, {
    useEffect,
    useState
} from 'react'
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native'
import {
    getEmployees
} from './../../api'
import EmployeeItem from './../../components/EmployeeItem'

const Employees = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [employees, setEmployees] = useState([])

    const getEmployeesData = async () => {
        const response = await getEmployees()
        const { data } = response || {}
        if(!data) {
            setIsLoading(false)
            // TODO: show an indicator
            return
        }
        setEmployees(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getEmployeesData()
    }, [])

    const content = () => {
        if(isLoading) {
            return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#00CDBE"/>
            </View>
        }
        return <FlatList
            style={{flex: 1}}
            contentContainerStyle={{padding: 5}}
            data={employees}
            renderItem={({item}) => <EmployeeItem item={item} onPress={() => {
                navigation.navigate('Details', {employee: item})
            }}/>}
            keyExtractor={item => item.id}
          />
    }

    return (
        <View style={{ flex: 1}}>
            {content()}
        </View>
    )
}

export default Employees