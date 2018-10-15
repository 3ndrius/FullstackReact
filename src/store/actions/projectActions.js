export const createProject = (project) => {


    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // mnake async call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorName: 'dev',
            authorLastName: 'coder',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
       
    }
};