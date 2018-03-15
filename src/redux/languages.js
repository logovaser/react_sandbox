import http from 'axios';

export const REQUEST = 'fluent/languages/REQUEST';
export const SUCCEEDED = 'fluent/languages/SUCCEEDED';
export const FAILED = 'fluent/languages/FAILED';
export const ADD = 'fluent/languages/ADD';

export default function(state = {
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

export const addLanguage = language => ({
    type: ADD,
    language,
});
