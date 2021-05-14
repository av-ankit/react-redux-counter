const INITIAL_STATE = { value: 0 };

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + action.payload
            }

        case 'DECREMENT':
            return {
                ...state,
                value: state.value - action.payload
            }

        default:
            return state
    }
}