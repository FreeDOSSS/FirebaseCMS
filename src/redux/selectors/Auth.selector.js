import { createSelector } from 'reselect';

const auth = (state) => state.auth;

export const getUser = createSelector(auth, (auth) => auth.user);
export const isLoggingUser = createSelector(auth, (auth) => auth.isLogin);
