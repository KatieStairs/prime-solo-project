const unfinishedRecipesList = (state=[], action) => {
    switch (action.type) {
        case 'SET_UNFINISHED_LIST':
            return action.payload;
        default:
            return state;
    }
};

export default unfinishedRecipesList;