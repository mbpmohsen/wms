"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./index";

interface ThemeRegistryProps {
    children: React.ReactNode;
}

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
