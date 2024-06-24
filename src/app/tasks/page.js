"use client";
import PageNumber from "@/components/pages/pageNumber/PageNumber";
import Task from "@/components/pages/task/Task";

export default function Home() {

    return (
        <main>
            <Task></Task>
            <PageNumber/>
        </main>
    );
}
