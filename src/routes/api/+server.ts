import type { RequestEvent } from "./$types";


export async function GET({ request } : RequestEvent) 

{
    return new Response("Hello ");
}