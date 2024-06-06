"use client";
import {useDispatch, useSelector} from "react-redux";
import {useFetch} from "@custom-react-hooks/all";
import React, {useState} from "react";
import {
    clientRoles,
    selectClientRequest,
    setSearchEmail,
    setSearchLastName,
    setSearchLogin,
    setSearchName,
    setSearchRole,
    setSort,
    sortingFields
} from "@/slices/client/ClientPageSlice";
import {setNumber} from "@/slices/PageNumberSlice";

export default function Client() {
    const dispatch = useDispatch();
    const clientRequest = useSelector(selectClientRequest);

    let {
        data,
        fetchData
    } = useFetch(`http://localhost:8000/clients?${clientRequest}`);

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
    const handleToggleItem = (id) => {
        setSelectedItems(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

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

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search by name"
                    onChange={e => {
                        dispatch(setSearchName(e.target.value));
                        dispatch(setNumber(0))
                    }} //simCardData.searchIccid = e.target.value}
                />
                <input
                    type="text"
                    placeholder="Search by lastName"
                    onChange={e => {
                        dispatch(setSearchLastName(e.target.value));
                        dispatch(setNumber(0))
                    }}/>
                <input
                    type="text"
                    placeholder="Search by login"
                    onChange={e => {
                        dispatch(setSearchLogin(e.target.value));
                        dispatch(setNumber(0))
                    }}
                />
                <input
                    type="text"
                    placeholder="Search by email"
                    onChange={e => {
                        dispatch(setSearchEmail(e.target.value));
                        dispatch(setNumber(0))
                    }}
                />
                <input
                    type="text"
                    placeholder="Search by role"
                    onChange={e => {
                        dispatch(setSearchRole(e.target.value));
                        dispatch(setNumber(0))
                    }}
                />
            </div>
            <div>
                <button>addClient</button>
                <button>deleteClient</button>
            </div>
            <div>
                <button onClick={toggleSelectAll}>Select/Deselect All</button>
                <button onClick={() => update(clientRoles.guest)}>Change role to Guest</button>
                <button onClick={() => update(clientRoles.user)}>Change role to User</button>
                <button onClick={() => update(clientRoles.operator)}>Change role to Operator</button>
                <button onClick={() => update(clientRoles.senior_operator)}>Change role to Senior Operator</button>
                <button onClick={() => update(clientRoles.admin)}>Change role to Admin</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th onClick={() => dispatch(setSort(sortingFields.id))}>Id</th>
                    <th onClick={() => dispatch(setSort(sortingFields.name))}>Name</th>
                    <th onClick={() => dispatch(setSort(sortingFields.lastName))}>Last Name</th>
                    <th onClick={() => dispatch(setSort(sortingFields.login))}>Login</th>
                    <th onClick={() => dispatch(setSort(sortingFields.email))}>Email</th>
                    <th onClick={() => dispatch(setSort(sortingFields.role))}>Role</th>
                    <th>IP-Address</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map((element) => (
                    <tr key={element.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedItems[element.id] || false}
                                onChange={() => handleToggleItem(element.id)}
                            />
                        </td>
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