"use client"

import { useEffect } from "react"

export default function Users(){


    useEffect(() => {
        alert('My Users Page')
    },[])



    return (
        <ul>
            <li>Users</li>
                <ul>
                    <li>User 1</li>
                </ul>
        </ul>
    )
}