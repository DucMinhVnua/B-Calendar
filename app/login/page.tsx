"use client";

import { ButtonPrimary } from "@/helpers/components/Buttons/";
import useFirebase from "@/helpers/hooks/useFirebase";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const { signIn } = useFirebase();

    return (
        <div className=''>
            <ButtonPrimary
                title='Login'
                className='bg-primary'
                onClick={async () => {
                    await signIn();
                    router.push("/");
                }}></ButtonPrimary>
        </div>
    );
}
