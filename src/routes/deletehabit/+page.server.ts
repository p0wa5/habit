import { PrismaClient } from '@prisma/client'
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
const prisma = new PrismaClient()


export const actions = {
    deletehabits: async () => {
        await prisma.habit.delete({
            where: {
                id: 3
            }
        })
    }
} satisfies Actions




