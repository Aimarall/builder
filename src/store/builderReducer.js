const initialState = {
    ingredients: {
        diamond: 5,
        amber: 5,
        rauchtopaz: 10,
        ruby: 2,
        silver: 12,
        gold: 2,
    },
    price: 100,
};
const prices = {
    diamond: 3,
    amber: 2,
    rauchtopaz: 3,
    ruby: 2,
    silver: 2,
    gold: 2,
};

const builderReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "ADD_INGREDIENT":
            newState.ingredients[action.ingredient]++;
            newState.price += prices[action.ingredient];
            break;
        case "REMOVE_INGREDIENT":
            newState.ingredients[action.ingredient]--;
            newState.price -= prices[action.ingredient];

            break;

        default:
            break;
    }

    return newState;
}

export default builderReducer;