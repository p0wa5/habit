<script lang="ts">
  import type { Habit } from "@prisma/client";
  export let habitsArr: Habit[];
  import { deleteHabittemp } from "../main";
  import { increaseStreak } from "../main";
  import { habitsStore } from "../main";

  habitsStore.subscribe((value) => {
    habitsArr = value;
  });
</script>

<div class="flex flex-col w-1/3 border-2 border-black justify-left p-4">
  {#each habitsArr as habit, i}
    <div class="border-2 w-1/2 m-1">
      <div class="flex justify-between items-center">
        <p class="text-xl">{habitsArr[i].name}</p>
        <p class="text-2xl">{habitsArr[i].streak}</p>
      </div>
      <button on:click={() => deleteHabittemp(habitsArr[i].id)}>x</button>
      <button
        on:click={() => increaseStreak(habitsArr[i].id, habitsArr[i].streak)}
        >+</button
      >
    </div>
  {/each}
</div>
