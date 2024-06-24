import React, {useState} from "react";
import {useFetch} from '@custom-react-hooks/all';
import {useDispatch, useSelector} from "react-redux";
import {setData} from "@/slices/simCard/SimCardBarSlice";
import {
    selectSimCardRequest,
    setSearchAddress,
    setSearchDefNumber,
    setSearchIccid,
    setSearchMobileOperator,
    setSearchSerialNumber,
    setSort,
    simCardStatuses,
    sortingFields
} from "@/slices/simCard/SimCardPageSlice";
import {setNumber} from "@/slices/PageNumberSlice";

export default function SimCard() {
    const dispatch = useDispatch();
    const simCardRequest = useSelector(selectSimCardRequest);

    let {
        data,
        fetchData
    } = useFetch(`http://localhost:8000/sim-cards?${simCardRequest}`);

    const [selectedItems, setSelectedItems] = useState({data});
    const selectedItemsArray = Object.keys(selectedItems).filter(iccid => selectedItems[iccid]);
    const toggleSelectAll = () => {
        const allSelected = Object.values(selectedItems).every(selected => selected);
        const newSelectedItems = {};
        data.forEach(element => {
            newSelectedItems[element.iccid] = !allSelected;
        });
        setSelectedItems(newSelectedItems);
    }
    const handleToggleItem = (iccid) => {
        setSelectedItems(prevState => ({
            ...prevState,
            [iccid]: !prevState[iccid]
        }));
    };

    function update(simCardStatus) {
        fetch(`http://localhost:8000/sim-cards/update-status?simCardStatus=${simCardStatus}`, {
            method: 'POST',
            body: JSON.stringify(selectedItemsArray),
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json())
            .then(() => {
            })
            .catch(() => {
            });
        setTimeout(() => {
            fetchData().then(r => data = r);
        }, 100);
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search by iccid"
                    onChange={e => {
                        dispatch(setSearchIccid(e.target.value));
                        dispatch(setNumber(0))
                    }} //simCardData.searchIccid = e.target.value}
                />
                <input
                    type="text"
                    placeholder="Search by defNumber"
                    onChange={e => {
                        dispatch(setSearchDefNumber(e.target.value));
                        dispatch(setNumber(0))
                    }}/>
                <input
                    type="text"
                    placeholder="Search by mobileOperator"
                    onChange={e => {
                        dispatch(setSearchMobileOperator(e.target.value));
                        dispatch(setNumber(0))
                    }}
                />
                <input
                    type="text"
                    placeholder="Search by address"
                    onChange={e => {
                        dispatch(setSearchAddress(e.target.value));
                        dispatch(setNumber(0))
                    }}
                />
                <input
                    type="text"
                    placeholder="Search by numberFacility"
                    onChange={e => {
                        dispatch(setSearchSerialNumber(e.target.value));
                        dispatch(setNumber(0))
                    }}
                />
            </div>
            <div>
                <button onClick={toggleSelectAll}>Select/Deselect All</button>
                <button onClick={() => update(simCardStatuses.active)}>Activate Selected</button>
                <button onClick={() => update(simCardStatuses.inactive)}>Deactivate Selected</button>
                {/*<button className={stylesButtons.element}>Deactivate Selected</button>*/}
            </div>
            <table>
                <thead>
                <tr>
                    <th
                    ></th>
                    <th onClick={() => dispatch(setSort(sortingFields.mobileOperator))}>Mobile Operator</th>
                    <th onClick={() => dispatch(setSort(sortingFields.defNumber))}>Default Number</th>
                    <th onClick={() => dispatch(setSort(sortingFields.iccid))}>ICCID</th>
                    <th onClick={() => dispatch(setSort(sortingFields.status))}>Status</th>
                    <th>ModemStatus</th>
                    <th>Detailed</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map((element) => (
                    <tr key={element.iccid}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedItems[element.iccid] || false}
                                onChange={() => handleToggleItem(element.iccid)}
                            />
                        </td>
                        <td>{element.mobileOperator}</td>
                        <td>{element.defNumber}</td>
                        <td>{element.iccid}</td>
                        <td
                            // className={`${element.status === 'ACTIVE' ? styles.statusActive : styles.statusInactive}`}
                        >{element.status}</td>
                        <td
                            // className={`${element.modemStatus === 'ACTIVE' ? styles.statusActive : styles.statusInactive}`}
                        >{element.modemStatus}</td>
                        <td>
                            <button onClick={() => dispatch(setData(element))}>Detailed</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

}

// import styles from "./SimCard.module.scss";
