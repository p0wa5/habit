// src/routes/+page.server.ts
import type { RequestEvent } from "./$types";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        Habits: await prisma.habit.findMany( ) 
    };
}


/** @type {import('./$types').Actions} */
export const actions = {
    createHabit: async ({request}) => {
        const data = await request.formData();
        const habitName = data.get('habit-name')
        const habitColor= data.get('habit-color')
        const habitDescription = data.get('habit-description')

        const newHabit = await prisma.habit.create({
            data: {
                name: habitName,
                description: "",
                interval: 0,
                streak: 0,
            }
        })
    }

}
