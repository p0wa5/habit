import type { RequestEvent } from "./$types";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET({request}: RequestEvent) {
    return {
        name: "hello" 
    };
}