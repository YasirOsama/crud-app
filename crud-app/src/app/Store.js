import { configureStore } from '@reduxjs/toolkit';
import  userDetail  from '../features/userSalice';

export const store = configureStore({
  reducer: {
    app: userDetail
  },
});
