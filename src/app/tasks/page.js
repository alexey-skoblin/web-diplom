"use client";
import PageNumber from "@/components/pages/pageNumber/PageNumber";
import Task from "@/components/pages/task/Task";
import React from "react";

export default function Home() {

    return (
        <main>
            <Task/>
            <PageNumber/>
        </main>
    );
}
