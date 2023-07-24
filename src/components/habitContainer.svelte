<script lang="ts">
    import type { Habit } from "@prisma/client";
    export let habitsArr: Habit[]
    const deleteHabittemp = (id: number) => {
    deleteHabitAsync(id).then(() => {
      // Optional: You may want to refresh the list of habits after deletion
    }).catch((error) => {
      console.error("Error deleting habit:", error);
    });
  };

  const deleteHabitAsync = async (id: number) => {
    try {
        console.log(`fetching the habit with the id ${id}`)
        await fetch(`http//localhost:5555/api/deleteHabit/${id}`)
        console.log("success")
  
    } catch {
        console.log("failed")
    }
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