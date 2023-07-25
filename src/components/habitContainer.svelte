<script lang="ts">
  import type { Habit } from "@prisma/client";
  export let habitsArr: Habit[];
  const deleteHabittemp = (id: number) => {
    deleteHabitAsync(id)
      .then(() => {
        // handle delete in view
        habitsArr = habitsArr.filter((habit) => habit.id !== id)
      })
      .catch((error) => {
        console.error("Error deleting habit:", error);
      });
  };
  const deleteHabitAsync = async (id: number) => {
    console.log(`fetching the habit with the id ${id}`);
    await fetch("../api/deleteHabit/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  };
</script>

<div class="flex flex-col">
  {#each habitsArr as habit, i}
    <div class="border">
      <p>{habitsArr[i].name}</p>
      <p>streak: {habitsArr[i].streak}</p>
      <button on:click={() => deleteHabittemp(habitsArr[i].id)}>x</button>
    </div>
  {/each}
</div>
