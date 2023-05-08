import { createAction } from '@reduxjs/toolkit';

export const userNeighborhoodsRequest = createAction('GET_USER_NEIGHBORHOODS');
export const searchNeighborhoodsRequest = createAction('SEARCH_NEIGHBORHOODS', (title) => ({ payload: { title } }));
export const sendMemberRequest = createAction('SEND_MEMBER_REQUEST', (neighborhoodId) => ({ payload: { neighborhoodId } }));
