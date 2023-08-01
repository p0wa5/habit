import type { Habit } from "@prisma/client";
let dummyHabit: Habit = {
    id: 5,
    name: "dummy habit",
    description: "habit for testing",
    interval: 24,
    streak: 0,
    createdAt: new Date(),
    updatedAt: new Date()
}


function resetStreak(habti: Habit): void {
// reset the streak of given habti
}

function saveStreakChange(habit: Habit): void {
//save date of last change of given habit streak
}

function CalcTimePassed(Date1: Date, Date2: Date): void {
// calc. days between last changes. 
}

function increaseStreak(habit: Habit): void {
// increase the streak of given habitk
}