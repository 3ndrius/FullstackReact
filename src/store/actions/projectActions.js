export const createProject = (project) => {


    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // mnake async call

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.uid;
        firestore.collection('projects').add({
            ...project,
            authorName: profile.firebase.firstName,
            authorLastName: profile.firebase.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
       
    }
};