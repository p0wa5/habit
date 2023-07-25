import { PrismaClient } from '@prisma/client';
import type { RequestEvent } from "./$types";

const prisma = new PrismaClient();

export async function DELETE({ request }: RequestEvent) {
    const jsonid = await request.json();
    try {
        await prisma.habit.delete({
            where: {
                id: jsonid.id  
            }
        });
        return new Response("deleted");
    } catch (error) {
        console.log(error);
    }
}

