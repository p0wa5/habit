import type { Habit } from "@prisma/client";
import { habitsStore } from "./main";
import { increaseStreak } from "./main";
import { resetStreak } from "./main";
let habitsArr: Habit[];

habitsStore.subscribe((value) => {
    habitsArr = value;
});

function countHoursBetweenDates(date1: Date, date2: Date) {
    const date1Ms = date1.getTime();
    const date2Ms = date2.getTime();
    const differenceMs = Math.abs(date1Ms - date2Ms);
    const hoursDifference = differenceMs / (1000 * 60 * 60);
    return Math.round(hoursDifference);
}

export function watchStreak(habit: Habit): void {
// increase the streak of given habitk
    //fill in the habits from the store
    let currentDate = new Date();
    let habitLogIndex = habitsArr.findIndex(habitToIncrease => habitToIncrease.name == habit.name)
    let hoursBetweenChanges = 0;
    if(habitsArr[habitLogIndex].updatedAt){
        hoursBetweenChanges = countHoursBetweenDates(habitsArr[habitLogIndex].updatedAt, currentDate)
    } else habitsArr[habitLogIndex].updatedAt = currentDate;
    if(hoursBetweenChanges <= habit.interval){
        console.log("habit should be increased")
        console.log(`interval: ${habit.interval}`)
        console.log(`hours between last  change: ${hoursBetweenChanges}`)
        increaseStreak(habit.id, habit.streak);
    } else {
        console.log("habits is over intervall")
        console.log(`interval: ${habit.interval}`)
        console.log(`hours between last  change: ${hoursBetweenChanges}`)
        resetStreak(habit.id, habit.streak)
    }
}
