<script lang="ts">
    import HabitContainer from "../components/habitContainer.svelte";
    import type { Habit } from "../main"
    export let data;
    
    let habits = data; 
    let habitsArr = [];

    for(let i = 0; i < habits.Habits.length; i++){
        console.log(habits.Habits[i])
        habitsArr.push(habits.Habits[i])
    }
</script>

<div class="main flex justify-center">
    <HabitContainer {habitsArr} />
</div>