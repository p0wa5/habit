// src/routes/+page.server.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
    return {
        post: await prisma.habit.findUnique({
            where: {
                id: 1
            }
        }) 
    };
}
