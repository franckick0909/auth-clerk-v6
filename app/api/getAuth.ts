import { auth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { userId } = await auth.protect();

    if (!userId) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    return res.status(200).json({ userId });
}