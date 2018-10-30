const initState = {}

const portofolioReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PORTOFOLIO_SUCCESS':
            console.log('create portofolio success');
            return state;
        case 'CREATE_PORTOFOLIO_ERROR':
            console.log('create portofolio error');
            return state;
        default:
            return state;
    }
};

export default portofolioReducer;