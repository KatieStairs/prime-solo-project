const createRecipe = (state=[], action) => {
    if (action.type === 'CREATE_RECIPE') {
        const newRecipeName = action.payload;
        const newRecipeId = state.length + 1;

        const newRecipe = {
            id: newRecipeId,
            name: newRecipeName
        }
        return {...state, newRecipe: newRecipe}
    }
};

export default createRecipe;