"use client";
import {useSelector} from "react-redux";
import {selectIsDisplayed} from "@/slices/SidebarSlice";
import {selectData} from "@/slices/simCard/SimCardBarSlice";

export default function Wrapper({children}) {
    const sidebarIsDisplayed = useSelector(selectIsDisplayed);
    const simCardBarIsDisplayed = useSelector(selectData) != null;

    return (
        <div
            // id={styles.main}
            // className={`${styles.main} ${sidebarIsDisplayed ? styles.withDisplayedSidebar : ''} ${infoBarIsDisplayed ? styles.withDisplayedInfoBar : ''}`}
        >
            {children}
        </div>
    )
}