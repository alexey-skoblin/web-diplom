"use client";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useFetch} from "@custom-react-hooks/all";
import {
    selectSearchTaskStatus,
    selectSortingField,
    selectSortingOrder,
    selectTaskRequest,
    setSearchTaskStatus,
    setSort,
    sortingOrders
} from "@/slices/task/TaskPageSlice";
import {setNumber} from "@/slices/PageNumberSlice";
import styles from "./Task.module.scss";
import searchStyles from "../Search.module.scss";
import {viewSorting} from "@/components/pages/Pages";

export default function Task() {
    const dispatch = useDispatch();
    const taskRequest = useSelector(selectTaskRequest);

    let {
        data,
        fetchData
    } = useFetch(`http://localhost:8000/tasks?${taskRequest}`);

    function update(id, taskStatus) {
        fetch(`http://localhost:8000/sim-cards/update-status?id=${id}&taskStatus=${taskStatus}`, {
            method: 'POST'
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
                    value={useSelector(selectSearchTaskStatus)}
                    placeholder="Search by status"
                    onChange={e => {
                        dispatch(setSearchTaskStatus(e.target.value));
                        dispatch(setNumber(0))
                    }}
                />
            </div>
            <div>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th onClick={() => dispatch(setSort())}>status{getViewSortingFiled('status')}</th>
                        <th>taskDate</th>
                        <th>simCardIccid</th>
                        <th>simCardStatus</th>
                        <th>simCardDefNumber</th>
                        <th>simCardMobileOperator</th>
                        <th>clientName</th>
                        <th>clientLastName</th>
                        <th>clientEmail</th>
                        <th>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data && data.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.status}</td>
                            <td>{task.taskDate}</td>
                            <td>{task.simCardIccid}</td>
                            <td>{task.simCardStatus}</td>
                            <td>{task.simCardDefNumber}</td>
                            <td>{task.simCardMobileOperator}</td>
                            <td>{task.clientName}</td>
                            <td>{task.clientLastName}</td>
                            <td>{task.clientEmail}</td>
                            <td>
                                <button
                                    onClick={() => update(task.id, 'UPDATE')}>
                                    UPDATE
                                </button>
                                <button
                                    onClick={() => update(task.id, 'CANCEL')}>
                                    CANCEL
                                </button>
                            </td>
                        </tr>
                    ))}</tbody>
                </table>
            </div>
        </div>
    )
}