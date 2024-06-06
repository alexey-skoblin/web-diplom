"use client";
import PageNumber from "@/components/pages/pageNumber/PageNumber";
import Client from "@/components/pages/client/Client";

export default function Home() {

    return (
        <main>
            <Client></Client>
            <PageNumber></PageNumber>
        </main>
    )
}