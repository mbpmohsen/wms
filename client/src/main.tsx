import React from 'react'
import ReactDOM from 'react-dom/client';
import './asset/styles/index.sass';
import {
    RouterProvider,
} from "react-router-dom";
import ThemeRegistry from "./theme/ThemeProvider";
import router from "./router";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeRegistry>
            <RouterProvider router={router} />
        </ThemeRegistry>
    </React.StrictMode>
)
