import React, {InputHTMLAttributes, ReactElement, useState} from "react";
import PriceList from "src/components/Header/priceList";
import PhoneNumber from "../Header/priceList/phoneNumber";
// import {Simulate} from "react-dom/test-utils";
// import input = Simulate.input;



export interface LayoutProps {
    children: ReactElement,
    NavBarComponent: ReactElement
    HeaderComponent: ReactElement,
    FooterComponent: ReactElement
}

const Layout = (props: LayoutProps) => {


    const {children, NavBarComponent, HeaderComponent, FooterComponent} = props;

    return (
        <main>
            <div id={'header'}>
                {HeaderComponent}
            </div>
            <div id={'nav-bar'}>
                {NavBarComponent}
            </div>
            <div id={'page-container'}>
                {children}
            </div>
            <div id={'footer'}>
                {FooterComponent}
            </div>
        </main>
    )
}

export default Layout;