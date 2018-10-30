export const createPortofolio = (portofolio) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('portofolios').add({
            ...portofolio,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PORTOFOLIO_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'CREATE_PORTOFOLIO_ERROR' }, err);
        });
    }
  };