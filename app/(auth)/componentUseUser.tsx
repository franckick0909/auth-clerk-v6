"use client"

import { useUser } from "@clerk/nextjs";
// import Image from "next/image";
export default function ComponentUseUser() {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn || !user) {
        return null;
    }

    return (
        <div className="flex items-center">
            <p>Bonjour <span className="text-sky-500">{user.username}</span></p>
{/*            <div className="flex items-center justify-center">
                <Image src={user.imageUrl as string} alt={user.username as string} width={50} height={50} className="rounded-full" />
            </div> */}
        </div>
    )

}