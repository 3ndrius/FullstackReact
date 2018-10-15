export const createProject = (project) => {
    return (dispatch, getState) => {
        // mnake async call
        dispatch({ type: 'CREATE_PROJECT', project});
    }
};