import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from "src/store/users/users";
import { RouterProvider } from "react-router-dom";
import router from './router'
import './style/style.scss';
import './firebase';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);