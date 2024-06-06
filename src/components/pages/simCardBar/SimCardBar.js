"use client";
import {useDispatch, useSelector} from "react-redux";
import {selectData, setData} from "@/slices/simCard/SimCardBarSlice";
import {useEffect, useRef} from "react";
// import styles from './SimCardBar.module.scss';

export default function SimCardBar() {
    const dispatch = useDispatch();
    const infoBarData = useSelector(selectData);

    const infoBarRef = useRef(null);
    useEffect(() => {
        const handleClickOutsideInfoBar = (e) => {
            if (infoBarData != null
                && infoBarRef.current
                && !infoBarRef.current.contains(e.target)) {
                dispatch(setData(null))
            }
        };
        document.addEventListener('click', handleClickOutsideInfoBar);
        return () => {
            document.removeEventListener('click', handleClickOutsideInfoBar);
        };
    }, [dispatch, infoBarData]);

    return (
        <div ref={infoBarRef}
            // className={`${styles.infoBar} ${infoBarData != null ? styles.displayed : ''}`}
        >
            {infoBarData && (
                <table
                    // className={styles.table}
                >
                    <tbody>
                    <tr>
                        <td>iccid</td>
                        <td>{infoBarData.iccid}</td>
                    </tr>
                    <tr>
                        <td>status</td>
                        <td>{infoBarData.status}</td>
                    </tr>
                    <tr>
                        <td>defNumber</td>
                        <td>{infoBarData.defNumber}</td>
                    </tr>
                    <tr>
                        <td>mobileOperator</td>
                        <td>{infoBarData.mobileOperator}</td>
                    </tr>
                    <tr>
                        <td>tariff</td>
                        <td>{infoBarData.tariff}</td>
                    </tr>
                    <tr>
                        <td>lastActionDate</td>
                        <td>{infoBarData.lastActionDate}</td>
                    </tr>
                    <tr>
                        <td>lastLocation</td>
                        <td>({infoBarData.lastLocation.x}, {infoBarData.lastLocation.y})</td>
                    </tr>
                    <tr>
                        <td>trafficForYesterday</td>
                        <td>{infoBarData.trafficForYesterday}</td>
                    </tr>
                    <tr>
                        <td>clientName</td>
                        <td>{infoBarData.clientName}</td>
                    </tr>
                    <tr>
                        <td>clientLastName</td>
                        <td>{infoBarData.clientLastName}</td>
                    </tr>
                    <tr>
                        <td>clientEmail</td>
                        <td>{infoBarData.clientEmail}</td>
                    </tr>
                    <tr>
                        <td>clientIp</td>
                        <td>{infoBarData.clientIp}</td>
                    </tr>
                    <tr>
                        <td>modemStatus</td>
                        <td>{infoBarData.modemStatus}</td>
                    </tr>
                    <tr>
                        <td>modemImei</td>
                        <td>{infoBarData.modemImei}</td>
                    </tr>
                    <tr>
                        <td>modemEquipmentHostname</td>
                        <td>{infoBarData.modemEquipmentHostname}</td>
                    </tr>
                    <tr>
                        <td>modemEquipmentModel</td>
                        <td>{infoBarData.modemEquipmentModel}</td>
                    </tr>
                    <tr>
                        <td>modemEquipmentSerialNumber</td>
                        <td>{infoBarData.modemEquipmentSerialNumber}</td>
                    </tr>
                    <tr>
                        <td>modemEquipmentFacilityAddress</td>
                        <td>{infoBarData.modemEquipmentFacilityAddress}</td>
                    </tr>
                    <tr>
                        <td>modemEquipmentFacilityLocation</td>
                        <td>({infoBarData.modemEquipmentFacilityLocation.x}, {infoBarData.modemEquipmentFacilityLocation.y})</td>
                    </tr>
                    <tr>
                        <td>modemEquipmentFacilityStatus</td>
                        <td>{infoBarData.modemEquipmentFacilityStatus}</td>
                    </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}

