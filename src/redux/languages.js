import http from 'axios';

export const REQUEST = 'fluent/languages/REQUEST';
export const REQUEST_PATCH = 'fluent/languages/REQUEST_PATCH';
export const SUCCEEDED = 'fluent/languages/SUCCEEDED';
export const FAILED = 'fluent/languages/FAILED';
export const CHECK_USED = 'fluent/languages/CHECK_USED';
export const SET_SELECTED = 'fluent/languages/SET_SELECTED';
export const ADD = 'fluent/languages/ADD';

export default function (state = {
    isFetching: true,
    data: [],
}, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                data: [...state.data, action.language]
            };
        case REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case SUCCEEDED:
            return {
                ...state,
                data: action.languages,
                isFetching: false,
            };
        case FAILED:
            return {
                ...state,
                isFetching: false,
            };
        case SET_SELECTED:
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === action.payload.id) return {
                        ...item,
                        selected: action.payload.selected,
                    };
                    else return item;
                })
            };
        default:
            return state;
    }
};

export const requestLanguages = () => ({
    type: REQUEST,
});

export const succeededLanguages = languages => ({
    type: SUCCEEDED,
    languages,
});

export const setSelected = (item, selected) => ({
    type: SET_SELECTED,
    payload: {
        ...item,
        selected,
    },
});

export const addLanguage = language => ({
    type: ADD,
    language,
});
