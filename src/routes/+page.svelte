<script lang="ts">
    import HabitContainer from "../components/habitContainer.svelte";
    import type { Habit } from "../main"
    export let data;
    let habits = data; 
    export let habitsArr = [];


    for(let i = 0; i < habits.post.length; i++){
        console.log(habits.post[i])
        habitsArr.push(habits.post[i])
    }

    
</script>
    {#each habitsArr as habitArrItem}
        <p>{habitArrItem.name}</p>
    {/each}
   <div class="main flex justify-center">
       <HabitContainer />
   </div>