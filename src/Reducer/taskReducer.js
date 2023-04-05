
export const initialState = {
    tasks: [],
    loading: 'false',
    error: 'false',
}

export const reducer = (state, action) => {
    // console.log(state.tasks);
    switch (action.type) {
        case 'LOAD_START': {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }
        case 'LOAD_SUCCESS': {
            // console.log(action.payload);
            return {
                ...state,
                loading: false,
                tasks: action.payload,
            }
        }
        case 'LOAD_ERROR': {
            return {
                loading: false,
                tasks: [],
                error: action.payload,
            }
        }
        case 'ADD': {
            if (state.tasks.length) {
                return {
                    ...state,
                    tasks: [action.payload, ...state.tasks],
                }
            }
        }
        case 'EDIT': {
            const { id, res } = action.payload;
            if (state.tasks.length) {
                return {
                    ...state,
                    tasks: [res.data, ...state.tasks.filter((task) => task.timeAsId !== id)],
                }
            }
        }
        case 'DELETE': {
            // console.log(action.payload);
            return {
                ...state,
                tasks: [...state.tasks.filter((task) => task.timeAsId !== action.payload)],
            }
        }
        case 'UNDO': {
            const { id, res } = action.payload;
            return {
                ...state,
                tasks: [...state.tasks.filter((task) => task.timeAsId !== id), res.data],
                loading: false,
            }
        }
        default: {
            return state;
        }

    }
};