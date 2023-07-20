<script lang="ts">
    import HabitContainer from "../components/habitContainer.svelte";
    export let data;
    let habits = data; 
    export let habitsArr = [];


    for(let i = 0; i < habits.post.length; i++){
        console.log(habits.post[i])
        habitsArr.push(habits.post[i])
    }

    
</script>

   <div class="main flex justify-center">
       <HabitContainer />
   </div>