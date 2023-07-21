import { PrismaClient } from '@prisma/client'

export interface Habit {
    id: number
    name: string
    description: string
    interval: number
    streak: number
    createdAt: Date
    updatedAt: Date
}

export function moveFetchedHabits(data:any) {
    let habits = data; 
    let habitsArr: Habit[]=[];
    
    for(let i = 0; i < habits.Habits.length; i++){
        habitsArr.push(habits.Habits[i])
    }
    return habitsArr
}



export async function deleteHabit(id: number){
    const prisma = new PrismaClient();
    const deleteHabit = await prisma.habit.delete({
        where: {
            id: 1
        }
    })
}
