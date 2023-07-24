import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export async function deleteHabit(request: any){
    const { id } = request.params; 
    try {
        await prisma.habit.delete({
            where: {
                id: parseInt(id,10)
            }
        });  
        return {
            status: 200,
            body: {
                message: "User deleted successfully"
            },
            headers: {
                "Content-Type": "application/json"
            }
        };
    } catch (error){
        return {
            status: 500,
            body: {
               error: "Internal Server Error" 
            },
            headers: {
                "Content-Type": "application/json"
            }
        };
    }
}