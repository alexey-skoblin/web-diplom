"use client";
import {useDispatch, useSelector} from "react-redux";
import {useFetch} from "@custom-react-hooks/all";
import React from "react";
import {setNumber} from "@/slices/PageNumberSlice";
import styles from "./Client.module.scss";
import searchStyles from "../Search.module.scss";
import buttonStyles from "../Button.module.scss";

import {viewSorting} from "@/components/pages/Pages";
import {
    clientRoles,
    selectClientRequest,
    selectSearchEmail,
    selectSearchLastName,
    selectSearchLogin,
    selectSearchName,
    selectSearchRole,
    selectSortingField,
    selectSortingOrder,
    setSearchEmail,
    setSearchLastName,
    setSearchLogin,
    setSearchName,
    setSearchRole,
    setSort,
    sortingFields,
    sortingOrders
} from "@/slices/client/ClientPageSlice";

export default function Client() {
    const dispatch = useDispatch();
    const clientRequest = useSelector(selectClientRequest);
    let {
        data,
        fetchData
    } = useFetch(`http://localhost:8000/clients?${clientRequest}`);

    /*
        const [selectedItems, setSelectedItems] = useState({data});
        const selectedItemsArray = Object.keys(selectedItems).filter(id => selectedItems[id]);
        const toggleSelectAll = () => {
            const allSelected = Object.values(selectedItems).every(selected => selected);
            const newSelectedItems = {};
            data.forEach(element => {
                newSelectedItems[element.id] = !allSelected;
            });
            setSelectedItems(newSelectedItems);
        }
        const handleToggleItem = (id) => {
            setSelectedItems(prevState => ({
                ...prevState,
                [id]: !prevState[id]
            }));
        };
    */

    function update(userRole) {
        fetch(`http://localhost:8000/clients/update-role?role=${userRole}`, {
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

    function getViewSortingFiled(sortingField) {
        return <>{viewSorting(sortingField, useSelector(selectSortingField), useSelector(selectSortingOrder), sortingOrders.asc)}</>;
    }

    return (
        <div>
            <div className={searchStyles.container}>
                <input
                    type="text"
                    value={useSelector(selectSearchName)}
                    placeholder="Search by name"
                    onChange={e => {
                        dispatch(setSearchName(e.target.value));
                        dispatch(setNumber(0))
                    }} //simCardData.searchIccid = e.target.value}
                />
                <input
                    type="text"
                    value={useSelector(selectSearchLastName)}
                    placeholder="Search by lastName"
                    onChange={e => {
                        dispatch(setSearchLastName(e.target.value));
                        dispatch(setNumber(0))
                    }}/>
                <input
                    type="text"
                    value={useSelector(selectSearchLogin)}
                    placeholder="Search by login"
                    onChange={e => {
                        dispatch(setSearchLogin(e.target.value));
                        dispatch(setNumber(0))
                    }}
                />
                <input
                    type="text"
                    value={useSelector(selectSearchEmail)}
                    placeholder="Search by email"
                    onChange={e => {
                        dispatch(setSearchEmail(e.target.value));
                        dispatch(setNumber(0))
                    }}
                />
                <input
                    type="text"
                    value={useSelector(selectSearchRole)}
                    placeholder="Search by role"
                    onChange={e => {
                        dispatch(setSearchRole(e.target.value));
                        dispatch(setNumber(0))
                    }}
                />
            </div>
            <div className={buttonStyles.container}>
                <button onClick={() => update(clientRoles.guest)}>Change role to Guest</button>
                <button onClick={() => update(clientRoles.user)}>Change role to User</button>
                <button onClick={() => update(clientRoles.operator)}>Change role to Operator</button>
                <button onClick={() => update(clientRoles.senior_operator)}>Change role to Senior Operator</button>
                <button onClick={() => update(clientRoles.admin)}>Change role to Admin</button>
            </div>
            {/*            <div className={buttonStyles.container}>
                <button onClick={toggleSelectAll}>Select/Deselect All</button>
                <button>addClient</button>
                <button>deleteClient</button>
            </div>*/}
            <table className={styles.table}>
                <thead>
                <tr>
                    {/*<th></th>*/}
                    <th onClick={() => dispatch(setSort(sortingFields.id))}>Id{getViewSortingFiled(sortingFields.id)}</th>
                    <th onClick={() => dispatch(setSort(sortingFields.name))}>Name{getViewSortingFiled(sortingFields.name)}</th>
                    <th onClick={() => dispatch(setSort(sortingFields.lastName))}>Last
                        Name{getViewSortingFiled(sortingFields.lastName)}</th>
                    <th onClick={() => dispatch(setSort(sortingFields.login))}>Login{getViewSortingFiled(sortingFields.login)}</th>
                    <th onClick={() => dispatch(setSort(sortingFields.email))}>Email{getViewSortingFiled(sortingFields.email)}</th>
                    <th onClick={() => dispatch(setSort(sortingFields.role))}>Role{getViewSortingFiled(sortingFields.role)}</th>
                    <th>IP-Address</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map((element) => (
                    <tr key={element.id}>
                        {/*                        <td>
                            <input
                                type="checkbox"
                                checked={selectedItems[element.id] || false}
                                onChange={() => handleToggleItem(element.id)}
                            />
                        </td>*/}
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.lastName}</td>
                        <td>{element.login}</td>
                        <td>{element.email}</td>
                        <td>{element.role}</td>
                        <td>{element.ip}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}