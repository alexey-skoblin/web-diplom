"use client";
import styles from './Sidebar.module.scss';
import {selectIsOpenSidebar} from "@/slices/HeaderSlice";
import {useSelector} from "react-redux";

export default function Sidebar() {
    const isOpenSidebar = useSelector(selectIsOpenSidebar);

    return (
        <nav id={styles.sidebar} className={`${styles.sidebar} ${isOpenSidebar ? styles.displayedSidebar : ''}`}>
            <ul>
                <li>
                    <a href="#">
                        <i className="las la-home"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="las la-image"></i>
                        <span>Images</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="las la-file"></i>
                        <span>Files</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="las la-gamepad"></i>
                        <span>Games</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="las la-book"></i>
                        <span>Books</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="las la-bell"></i>
                        <span>Notifications</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="las la-cog"></i>
                        <span>Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="las la-user"></i>
                        <span>Profile</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
