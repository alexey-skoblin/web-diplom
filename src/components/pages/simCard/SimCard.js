"use client";
import { useDispatch, useSelector } from 'react-redux';
import {fetchSimCardData, selectSimCard} from '@/slices/SimCardSlice';
import {useEffect} from "react";


export default function SimCard() {
    const dispatch = useDispatch();
    const simCard = useSelector(selectSimCard);

    useEffect(() => {
        dispatch(fetchSimCardData())
    }, [dispatch]);
    return (<div>
            <pre>{JSON.stringify(simCard, null, 2)}</pre>
        </div>
    )
}