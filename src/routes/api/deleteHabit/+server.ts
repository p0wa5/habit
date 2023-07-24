import { PrismaClient } from '@prisma/client';
import type { RequestEvent } from "./$types";

const prisma = new PrismaClient();

export async function DELETE({ request }: RequestEvent, id: number) {
    try {
        await prisma.habit.delete({
            where: {
                id: id
            }
        });
        return new Response("deleted");
    } catch (error) {
        console.log(error);
    }
}

