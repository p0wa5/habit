<script lang="ts">
  import HabitContainer from "../components/habitContainer.svelte";
  import HabitForm from "../components/habitForm.svelte";
  import type { Habit } from "../main";
  import { moveFetchedHabits } from "../main";
  export let data;
  let habitsArr = moveFetchedHabits(data);
</script>

<style>
  .bg {
    height: 100%;
  }
</style>

<body class="bg bg-emerald-900">
  <div class="main h-full flex items-center">
      <HabitContainer {habitsArr} />
  </div>
</body>
