"use client";
import SimCard from "@/components/pages/simCard/SimCard";
import SimCardBar from "@/components/pages/simCardBar/SimCardBar";
import PageNumber from "@/components/pages/pageNumber/PageNumber";

export default function Home() {

    return (
        <main>
            <SimCardBar></SimCardBar>
            <SimCard></SimCard>
            <PageNumber></PageNumber>
        </main>
    )
}
