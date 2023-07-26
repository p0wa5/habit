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
        return new Response("deleted");
    } catch (error) {
        console.log(error);
    }
}