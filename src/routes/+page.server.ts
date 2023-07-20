// src/routes/+page.server.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
    return {
        Habits: await prisma.habit.findMany( ) 
    };
}
