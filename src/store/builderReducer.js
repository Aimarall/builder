const initialState = {
    ingredients: {
        almaz1: 5,
        amber1: 5,
        rauchtopaz1: 10,
        rubin1: 2,
        silver1: 12,
        zoloto2: 2,
    },
    price: 100,
};

const builderReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "ADD_INGREDIENT":
            newState.ingredients[action.ingredient]++;
            break;
        case "REMOVE_INGREDIENT":
            newState.ingredients[action.ingredient]--;
            break;

        default:
            break;
    }

    return newState;
}

export default builderReducer;