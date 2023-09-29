"use client";

import { createTheme } from "@mui/material/styles";
// import CP from "./ColorPalette";
import React from "react";

declare module "@mui/material/styles/createPalette" {}

declare module "@mui/material/styles" {
    interface TypographyVariants {
        title1: React.CSSProperties;
        title2: React.CSSProperties;
        title3: React.CSSProperties;
        title4: React.CSSProperties;
        body3: React.CSSProperties;
        body4: React.CSSProperties;
        body5: React.CSSProperties;
        description1: React.CSSProperties;
        description2: React.CSSProperties;
        buttons1: React.CSSProperties;
        buttons2: React.CSSProperties;
        buttons3: React.CSSProperties;
        buttons4: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        title1: React.CSSProperties;
        title2: React.CSSProperties;
        title3: React.CSSProperties;
        title4: React.CSSProperties;
        body3: React.CSSProperties;
        body4: React.CSSProperties;
        body5: React.CSSProperties;
        description1: React.CSSProperties;
        description2: React.CSSProperties;
        buttons1: React.CSSProperties;
        buttons2: React.CSSProperties;
        buttons3: React.CSSProperties;
        buttons4: React.CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        title1: true;
        title2: true;
        title3: true;
        title4: true;
        body3: true;
        body4: true;
        body5: true;
        description1: true;
        description2: true;
        buttons1: true;
        buttons2: true;
        buttons3: true;
        buttons4: true;
    }
}

const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "IRANSansMobile",
        buttons1: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "24px",
        },
        buttons2: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "20px",
        },
        buttons3: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "12px",
            fontWeight: 700,
            lineHeight: "16px",
        },
        buttons4: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "10px",
            fontWeight: 700,
            lineHeight: "16px",
        },
        title1: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
        },
        title2: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
        },
        title3: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "16px",
        },
        title4: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "10px",
            fontWeight: 500,
            lineHeight: "16px",
        },
        body1: {
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 400,
        },
        body2: {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 400,
        },
        body3: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "16px",
        },
        body4: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "10px",
            fontWeight: 400,
            lineHeight: "16px",
        },
        body5: {
            fontFamily: "IRANSansMobile",
            display: "block",
            fontSize: "8px",
            fontWeight: 400,
            lineHeight: "12px",
        },
        description1: {
            fontFamily: "IRANSansMobile",
            fontSize: "16px",
            fontStyle: "nor mal",
            fontWeight: 300,
            lineHeight: "24px",
        },
        description2: {
            fontFamily: "IRANSansMobile",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 200,
            lineHeight: "20px",
        },
        h1: {
            fontWeight: "bold",
            fontSize: "56px",
        },
        h2: {
            fontWeight: "bold",
            fontSize: "48px",
        },
        h3: {
            fontWeight: "bold",
            fontSize: "40px",
        },
        h4: {
            fontWeight: "bold",
            fontSize: "32px",
        },
        h5: {
            fontWeight: "bold",
            fontSize: "24px",
        },
        h6: {
            fontWeight: "bold",
            fontSize: "20px",
        },
    },
    // palette: {
    //     primary: {
    //         main: CP.main.pink,
    //     },
    // },
    // components: {
    //     MuiTypography: {},
    //     MuiIconButton: {
    //         defaultProps: {
    //             disableRipple: true,
    //         },
    //         styleOverrides: {
    //             root: {
    //                 padding: "0px",
    //             },
    //         },
    //     },
    //     MuiButton: {
    //         defaultProps: {
    //             disableElevation: true,
    //             disableRipple: true,
    //         },
    //         styleOverrides: {
    //             root: {
    //                 fontWeight: "bold",
    //                 textTransform: "none",
    //                 borderRadius: "4px",
    //                 width: "100%",
    //             },
    //             contained: {
    //                 backgroundColor: CP.main.pink,
    //                 color: CP.grayScale.white,
    //                 ":hover": {
    //                     backgroundColor: CP.main.darkPink,
    //                 },
    //                 ":disabled": {
    //                     color: CP.disable.light,
    //                     backgroundColor: CP.disable.dark,
    //                 },
    //             },
    //             outlined: {
    //                 backgroundColor: "white",
    //                 color: CP.main.pink,
    //                 borderColor: CP.main.pink,
    //                 ":hover": {
    //                     color: CP.main.darkPink,
    //                     borderColor: CP.main.darkPink,
    //                     backgroundColor: CP.grayScale.white,
    //                 },
    //                 ":active": {
    //                     backgroundColor: CP.lowOpacity.pink,
    //                 },
    //                 ":disabled": {
    //                     borderColor: CP.disable.dark,
    //                     color: CP.disable.light,
    //                 },
    //             },
    //             sizeLarge: {
    //                 fontSize: "16px",
    //                 height: "48px",
    //             },
    //             sizeMedium: {
    //                 fontSize: "14px",
    //                 height: "40px",
    //             },
    //             sizeSmall: {
    //                 fontSize: "14px",
    //                 fontWeight: "700",
    //                 lineHeight: "20px",
    //                 height: "32px",
    //             },
    //         },
    //     },
    // },
});

export default theme;
