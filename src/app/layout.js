import styles from "./layout.scss";
import ReduxProvider from "@/app/ReduxProvider";

import {Open_Sans} from 'next/font/google'
import Sidebar from "@/components/globals/sidebar/Sidebar";
import Header from "@/components/globals/header/Header";
import Wrapper from "@/components/globals/general-wrapper/Wrapper";

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {

    return (
        <html lang="en"
              className={`${openSans.className} ${styles}`}
        >
        <ReduxProvider>
            <body>
            <Header/>
            <Sidebar/>
            <Wrapper>
                {children}
            </Wrapper>
            </body>
        </ReduxProvider>
        </html>
    );
}

