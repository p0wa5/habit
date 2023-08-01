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

let streakLog = [
    {
    }    
]

function countDaysBetweenDates(date1: Date, date2: Date) {
    const date1Ms = date1.getTime();
    const date2Ms = date2.getTime();
    const differenceMs = Math.abs(date1Ms - date2Ms);
    const daysDifference = differenceMs / (1000 * 60 * 60 * 24);
    return Math.round(daysDifference);
}

function resetStreak(habti: Habit): void {
// reset the streak of given habti
}

function saveStreakChange(habit: Habit): void {
//save date of last change of given habit streak
}

function increaseStreak(habit: Habit): void {
// increase the streak of given habitk
}