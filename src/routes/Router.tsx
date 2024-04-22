import React from 'react';
import { useRoutes } from "react-router-dom";

import MainPage from '../pages/MainPage';
import SubPage from '../pages/SubPage';
import Layout from '../pages/layouts/Layout';

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: (
                <Layout>
                    <MainPage />
                </Layout>
            )
        },
        {
            path: 'sub',
            element: (
                <Layout>
                    <SubPage />
                </Layout>
            )
        }
    ])
};

export default Router;