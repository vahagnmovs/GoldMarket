import React, {ReactElement} from "react";

export interface LayoutProps {
    children: ReactElement,
    NavBarComponent: ReactElement,
}

const Layout = (props: LayoutProps) => {
    const {children, NavBarComponent} = props;

    return (
        <main>
            <div id={'nav-bar'}>
                {NavBarComponent}
            </div>
            <div id={'page-container'}>
                {children}
            </div>
        </main>
    )
}

export default Layout;