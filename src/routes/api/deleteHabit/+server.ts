import { PrismaClient } from '@prisma/client'
import type { RequestEvent } from "./$types";
import { error } from 'console';
const prisma = new PrismaClient()

export async function DELETE({request}: RequestEvent)
{
    try {
        await prisma.habit.delete({
            where: {
                id: 3  
            }
        });
        return new Response("deleted sucessfully")
    }catch (error) { 
        console.log(error)
    }
}
