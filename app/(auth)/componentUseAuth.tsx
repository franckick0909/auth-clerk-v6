"use client"

import { useAuth } from "@clerk/nextjs";

export default function ComponentUseAuth() {

    const { isLoaded, userId, sessionId } = useAuth();  // getToken

    if (!isLoaded || !userId) {
        return null;
    }

  return (
    <div className="flex flex-col mt-4">
        <p>User ID : {userId}</p>
        <p>Session ID : {sessionId}</p>
    </div>
  )
}
