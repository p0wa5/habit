<script lang="ts">
  import type { Habit } from "@prisma/client";
  export let habitsArr: Habit[];
  import { deleteHabittemp } from "../main";
  import { increaseStreak } from "../main";
  import { habitsStore } from "../main";
  import Streakpreview from "../components/streakpreview.svelte";

  habitsStore.subscribe((value) => {
    habitsArr = value;
  });

</script>

<!-- A11y: visible, non-interactive elements with an on:click event must be accompanied by an on:keydown, on:keyup, or on:keypress event. -->
<div class="mx-7 flex flex-col w-1/3 h-100vh justify-left p-4 rounded-xl bg-emerald-800 overflow-y-auto">
  {#each habitsArr as habit, i}
    <div class="w-1/2 m-1 bg-emerald-600 rounded h-20 px-4 text-white" on:click={() => increaseStreak(habitsArr[i].id, habitsArr[i].streak)}>
      <div class="flex justify-between items-center">
        <p class="text-xl">{habitsArr[i].name}</p>
        <p class="text-2xl">{habitsArr[i].streak}</p>
      </div>
      <!-- <button on:click={() => deleteHabittemp(habitsArr[i].id)}>x</button> -->
    </div>
   <Streakpreview /> 
  {/each}
</div>