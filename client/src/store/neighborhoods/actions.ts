import { createAction } from '@reduxjs/toolkit';

export const userNeighborhoodsRequest = createAction('GET_USER_NEIGHBORHOODS');

export const searchNeighborhoodsRequest = createAction('SEARCH_NEIGHBORHOODS', (title) => ({ payload: { title } }));
