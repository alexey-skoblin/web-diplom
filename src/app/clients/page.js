"use client";
import PageNumber from "@/components/pages/pageNumber/PageNumber";
import Client from "@/components/pages/client/Client";
import React from "react";

export default function Home() {

    return (
        <main>
            <Client/>
            <PageNumber/>
        </main>
    )
}