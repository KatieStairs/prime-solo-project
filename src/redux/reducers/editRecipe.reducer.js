const recipeToEdit = (state={}, action) => {
    if (action.type === 'SET_RECIPE_TO_EDIT') {
        return action.payload;
    } else if (action.type === 'SET_RECIPE_NAME'){
        console.log('recipeToEditReducer', action.payload)
        const newRecipeNameValue = action.payload;
        return{...state, recipe_name: newRecipeNameValue}
    } else if (action.type === 'SET_RECIPE_AUTHOR'){
        const newRecipeAuthorValue = action.payload;
        return{...state, recipe_author: newRecipeAuthorValue}
    } else if (action.type === 'SET_RECIPE_INGREDIENTS'){
        const newRecipeIngredientsValue = action.payload;
        return{...state, recipe_ingredients: newRecipeIngredientsValue}
    } else if (action.type === 'SET_RECIPE_DIRECTIONS'){
        const newRecipeDirectionsValue = action.payload;
        return{...state, recipe_directions: newRecipeDirectionsValue}
    } else if (action.type === 'SET_RECIPE_NOTES'){
        const newRecipeNotesValue = action.payload;
        return{...state, recipe_notes: newRecipeNotesValue}
    }
    return state;
};


export default recipeToEdit;