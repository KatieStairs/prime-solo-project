const finishedRecipesList = (state=[], action) => {
    switch (action.type) {
        case 'SET_FINISHED_LIST':
            return action.payload;
        default:
            return state;
    }
};

export default finishedRecipesList;