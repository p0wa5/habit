<script lang="ts">
    import HabitContainer from "../components/habitContainer.svelte";
    import type { Habit } from "../main"
    import { moveFetchedHabits } from "../main"
    export let data;
    let habitsArr = moveFetchedHabits(data); 
</script>

<div class="main flex justify-center">
    <HabitContainer {habitsArr} />
</div>