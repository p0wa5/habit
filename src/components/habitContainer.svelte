<script lang="ts">
    import type { Habit } from "@prisma/client";
    import { deleteHabit } from "../main"
    export let habitsArr: Habit[]
</script>


<div class="flex flex-col">
    {#each habitsArr as habit, i}
        <div class="border">
            <p>{habitsArr[i].name}</p>
            <p>streak: {habitsArr[i].streak}</p>
            <button on:click={deleteHabit(1)}>x</button>
        </div>
    {/each}
</div>