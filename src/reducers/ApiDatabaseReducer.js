initialState = {
    
}

const ApiDatabaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            fetch('https://us-central1-api-database-ab8bf.cloudfunctions.net/setDataCloud?'
                + 'collection=' + action.collection +
                '&someKey=' + action.someKey +
                '&value=' + action.value).then(
                    console.log('Data Set')
                ).catch((error) => {
                    console.log('Requisiton is fail for' + error)
                });

            break;
    }
    return state
};

export default ApiDatabaseReducer;