import type { Habit } from "@prisma/client";
import { habitsStore } from "./main";
import { increaseStreak } from "./main";
import { resetStreak } from "./main";
let habitsArr: Habit[]= [];

habitsStore.subscribe((value) => {
    habitsArr = value;
});

// calculates how many hours lay between two dates
function countHoursBetweenDates(date1: Date, date2: Date) {
    const date1Ms = date1.getTime();
    const date2Ms = date2.getTime();
    const differenceMs = Math.abs(date1Ms - date2Ms);
    const hoursDifference = differenceMs / (1000 * 60 * 60);
    return Math.round(hoursDifference);
}

//set the hours between last increase 
function setHoursBetweenChange(habit: Habit): number {
    let hoursBetweenChanges: number = 0;
    let currentDate: Date = new Date();
    if (habit.updatedAt) {
        hoursBetweenChanges = countHoursBetweenDates(
        habit.updatedAt,
        currentDate
        );
    } else if (!habit.updatedAt) {
        habit.updatedAt = currentDate;
    }
    return hoursBetweenChanges
}

// checks if streak of habit is still in range of habit interval based on hours between last increase
function checkStreakInInterval(habit: Habit): boolean {
    const hoursBetweenChange = setHoursBetweenChange(habit);
    if (hoursBetweenChange <= (habit.interval || 0)) {
        return true;
    } else {
        return false;
    }
}

function streaksActive(habitarray: Habit[]) {
    console.log("runnnnn")
    habitarray.forEach((habit: Habit) => {
        if (checkStreakInInterval(habit)) {
            console.log(`check habits with the id ${habit.id} -> streak is still active`);
        } else {
            console.log(`check habits with the id ${habit.id} -> streak is exceeding interval. reset!`);
            resetStreak(habit.id, habit.streak);
            habit.updatedAt = new Date();
        }
    });
}

// increases streak if streak of habit is active
export function addToStreak(habit: Habit): void {
// increase the streak of given habitk
    //fill in the habits from the store
    let currentDate = new Date();
    //get the index of the habit
    let habitLogIndex = habitsArr.findIndex(habitToIncrease => habitToIncrease.name == habit.name)
    let hoursBetweenChanges = 0;
    // if habit.updatedAt != null
   hoursBetweenChanges = setHoursBetweenChange(habit)
    if(checkStreakInInterval(habit) === true){
        console.log(`increase streak of ${habit.name}`)
        increaseStreak(habit.id, habit.streak);
        habit.updatedAt = currentDate;
    } else if (checkStreakInInterval(habit) === false){
        console.log(`reset streak of ${habit.name}`);
        resetStreak(habit.id, habit.streak);
        habit.updatedAt = currentDate;
    }
}

streaksActive(habitsArr)