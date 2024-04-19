import React from 'react';
import { useRoutes } from "react-router-dom";

import MainPage from '../pages/MainPage';
import SubPage from '../pages/SubPage';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element : <MainPage />
        },
        {
            path: 'sub',
            element : <SubPage />
        }
    ])
};

export default Router;