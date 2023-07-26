<script lang="ts">
  import type { Habit } from "@prisma/client";
  export let habitsArr: Habit[];
  import { deleteHabittemp } from "../main"
  import { increaseStreak } from "../main"
  import { habitsStore } from "../main"

  habitsStore.subscribe(value => {
    habitsArr = value;
  });


</script>

<div class="flex flex-col">
  {#each habitsArr as habit, i}
    <div class="border">
      <p>{habitsArr[i].name}</p>
      <p>streak: {habitsArr[i].streak}</p>
      <button on:click={() => deleteHabittemp(habitsArr[i].id)}>x</button>
      <button on:click={() => increaseStreak(habitsArr[i].id, habitsArr[i].streak)}>+</button>
    </div>
  {/each}
</div>
