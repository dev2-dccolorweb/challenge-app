const API_URL = 'https://fakerapi.it/api/v1/persons'

const getEmployees = async () => {
    try {
        const jsonResponse = await fetch(`${API_URL}?_quantity=25`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })

        const response = await jsonResponse.json()
        return response
    } catch (error) {
        console.log(error)
    }
}