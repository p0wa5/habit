import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main(){
    console.log('Start seeding...')
    const habit = await prisma.habit.create({
        data: {
            name: "Dummy Habit",
            description: "This is a Habit created in the seeding process of the DB",
            interval: 24,
            streak: 5
        }
    })
    console.log(`Created Dummy Habit with id ${habit.id}`)
}
console.log("seeding finishded")


main()
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })