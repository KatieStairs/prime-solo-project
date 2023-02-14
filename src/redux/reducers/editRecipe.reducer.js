const recipeToEdit = (state={}, action) => {
    if (action.type === 'SET_RECIPE_TO_EDIT') {
        return action.payload;
    } else if (action.type === 'SET_RECIPE_NAME'){
        const newRecipeNameValue = action.payload;
        return{...state, recipe_name: newRecipeNameValue}
    } else if (action.type === 'SET_RECIPE_INGREDIENTS'){
        const newRecipeIngredientsValue = action.payload;
        return{...state, recipe_ingredients: newRecipeIngredientsValue}
    }
    return state;
};


export default recipeToEdit;