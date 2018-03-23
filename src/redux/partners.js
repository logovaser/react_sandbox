import http from 'axios';

export const FIND = 'fluent/partners/FIND';
export const FOUND = 'fluent/partners/FOUND';
export const ADD = 'fluent/partners/ADD';
export const ADDED = 'fluent/partners/ADDED';

export default function (state = {
    shouldRedirect: true,
    redirectUrl: '/',
    data: [],
}, action) {
    switch (action.type) {
        case FOUND:
            return {
                ...state,
                data: [...state.data, action.language]
            };
        default:
            return state;
    }
};

export const findPartner = () => ({
    type: FIND,
});
