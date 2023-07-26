import { PrismaClient } from '@prisma/client'
import {writable} from "svelte/store"

export interface Habit {
    id: number
    name: string
    description: string
    interval: number
    streak: number
    createdAt: Date
    updatedAt: Date
}

export let habitsStore = writable<Habit[]>([]);

export function moveFetchedHabits(data:any) {
    let habits = data; 
    let habitsArr = habits.Habits;
    habitsStore.set(habitsArr)
    
}

export const deleteHabittemp = (id: number) => {
    deleteHabitAsync(id)
      .then(() => {
        // handle delete in view
       // habitsArr = habitsArr.filter((habit) => habit.id !== id)
       habitsStore.update((habits) => habits.filter((habit) => habit.id !== id))
      })
      .catch((error) => {
        console.error("Error deleting habit:", error);
      });
  };

export const deleteHabitAsync = async (id: number) => {
    console.log(`fetching the habit with the id ${id}`);
    await fetch("../api/deleteHabit/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  };

  export const increaseStreak = (id: number, streak: number) => {
    streak++;
    increaseStreakAsync(id, streak)
      .then(() => {
        // The habitsStore.update call should be inside this then block
        habitsStore.update((habits) => habits.map((habit) => {
          if (habit.id === id) {
            return {
              ...habit,
              streak: streak
            };
          }
          return habit;
        }));
      })
      .catch((error) => {
        console.error("Error updating habit streak:", error);
      });
  };
  
export const increaseStreakAsync = async (id: number, streak: number) => {
    console.log(`increasing the habit with the id ${id}`);
    await fetch("../api/increaseStreak/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, streak }),
    });
  };