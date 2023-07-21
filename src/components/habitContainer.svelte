<script lang="ts">
    import type { Habit } from "@prisma/client";
    export let habitsArr: Habit[]
</script>


<div class="flex flex-col">
    {#each habitsArr as habit, i}
        <p>{habitsArr[i].name}</p>
    {/each}
</div>