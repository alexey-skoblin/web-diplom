"use client";
import Link from "next/link";
import PageNumber from "@/components/pages/pageNumber/PageNumber";

export default function Home() {

    return (
        <main>
            test
            <Link href={"/"}>Link</Link>
            <PageNumber/>
        </main>
    );
}
