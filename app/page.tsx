"use client";

import useFirebase from "@/helpers/hooks/useFirebase";
import { useEffect } from "react";

export default function Home() {
    const { getUsers } = useFirebase();

    useEffect(() => {
        getUsers()
            .then((res) => {
                console.log("users: ", res);
            })
            .catch((e) => console.log(e));
    }, []);

    return <div className='flex items-center justify-center'>HOME</div>;
}
