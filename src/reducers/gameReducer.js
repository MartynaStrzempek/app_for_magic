const gameReducer = (state = {
    gameState: {}
}, action) => {
    switch (action.type) {
        case "GET":
            state = {
                ...state,
                gameState: action.payload
            };
            break;
        default:
            return state;
    }
    return state;
};

export default gameReducer;