const initialState = {
    data: {},
    isLoading: false
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PHOTO_REQUEST":
            return {
                ...state,
                isLoading: true
            };

        case "GET_PHOTO_SUCCESS":
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case "GET_PHOTO_ERROR":
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        default:
            return state;
    }
}
export default postsReducer;