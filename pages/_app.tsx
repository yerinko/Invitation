// import App, { Container } from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/global-style';
import { ThemeProvider } from '../styles/styled-components';
import theme, {styled} from '../styles/theme';
import App from "next/app";
import Head from "next/head";
import {keyframes} from "styled-components";

class ReactApp extends App<any> {
    public render() {
        const { Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>호야네 파티</title>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                          crossOrigin="anonymous"/>
                </Head>
                <GlobalStyles/>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps}/>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

export default ReactApp;
