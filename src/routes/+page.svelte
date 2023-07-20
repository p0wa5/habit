<script lang="ts">
    import HabitContainer from "../components/habitContainer.svelte";
    export let data;
    let habits = data; 


    
</script>

   <div class="main flex justify-center">
       <HabitContainer />
   </div>