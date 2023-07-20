<script lang="ts">
    import HabitContainer from "../components/habitContainer.svelte";
    export let data;
    console.log(data);
</script>
   
   
<p>{data.post?.name}</p>
<p>{data.post?.description}</p>
<p>{data.post?.streak}</p>
<p>{data.post?.interval}</p>
   
    
   <div class="main flex justify-center">
       <HabitContainer />
   </div>