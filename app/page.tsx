//  /

import Users from "@/components/Users";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'HomePage'
}

export default function HomePage(){
    // server component
    return (
        <>
            <h1>HomePage</h1>

            {/* client component */}
            <Users />
        </>
    )
}