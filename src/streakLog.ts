import type { Habit } from "@prisma/client";
import { habitsStore } from "./main";
let habitsArr: Habit[];

// create a structure which holds all the logs for each habit:
let streakLogs:any[] = [] ;

habitsStore.subscribe((value) => {
    habitsArr = value;
});


// fill in each habit in the streakLogs:
function fillStreakLogs(arr: any){
    arr.forEach((habit: Habit ) => {
        streakLogs.push({
            name: habit.name,
            lastIncreased: new Date(),
            interval: habit.interval,
        })  
    });

    console.log(streakLogs);
}


function countHoursBetweenDates(date1: Date, date2: Date) {
    const date1Ms = date1.getTime();
    const date2Ms = date2.getTime();
    const differenceMs = Math.abs(date1Ms - date2Ms);
    const hoursDifference = differenceMs / (1000 * 60 * 60);
    return Math.round(hoursDifference);
}

function resetStreak(habti: Habit): void {
// reset the streak of given habti
}

function saveStreakChange(habit: Habit): void {
//save date of last change of given habit streak
}

export function watchStreak(habit: Habit): void {
// increase the streak of given habitk
    //fill in the habits from the store
    fillStreakLogs(habitsArr)
    let currentDate = new Date();
    let habitLogIndex = streakLogs.findIndex(log => log.name == habit.name)
    let hoursBetweenChanges = countHoursBetweenDates(streakLogs[habitLogIndex].lastIncreased, currentDate)
    if(streakLogs[habitLogIndex].lastIncreased == "" || hoursBetweenChanges <= habit.interval){
        console.log("habit should be increased")
    } else {
        console.log("habits is over intervall")
    }
}
