const recipeToView = (state={}, action) => {
    if (action.type === 'SET_RECIPE_TO_VIEW') {
        return action.payload;
    }
    return state;
};

export default recipeToView;