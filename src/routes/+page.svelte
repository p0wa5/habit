<script lang="ts">
  import HabitContainer from "../components/habitContainer.svelte";
  import HabitForm from "../components/habitForm.svelte";
  import type { Habit } from "../main";
  import { moveFetchedHabits } from "../main";
  export let data;
  let habitsArr = moveFetchedHabits(data);
</script>

<div class="main">
  <HabitContainer {habitsArr} />

  <div class="w-1/3">
    <HabitForm />
  </div>
</div>
