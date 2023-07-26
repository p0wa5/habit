import { PrismaClient } from '@prisma/client';
import type { RequestEvent } from "./$types";

const prisma = new PrismaClient();

export async function POST({ request }: RequestEvent) {
    const json = await request.json();
    try {
        await prisma.habit.update({
            where: {
                id: json.id  
            },
            data: {
                streak: json.streak 
            }
        });
        return new Response("Updated Habit streak successfully", {status: 200});
    } catch (error) {
        return new Response("An error occured while updating the habit", {status: 500})
        console.log(error);
    }
}