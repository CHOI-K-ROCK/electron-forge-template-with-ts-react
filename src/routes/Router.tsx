import React from 'react';
import { useRoutes } from "react-router-dom";

import MainPage from '../pages/MainPage';
import SubPage from '../pages/SubPage';
import MainLayout from '../pages/layouts/Layout';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: (
                <MainLayout>
                    <MainPage />
                </MainLayout>
            )
        },
        {
            path: 'sub',
            element: (
                <MainLayout>
                    <SubPage />
                </MainLayout>
            )
        }
    ])
};

export default Router;