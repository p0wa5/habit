<script lang="ts">
  import HabitContainer from "../components/habitContainer.svelte";
  import HabitForm from "../components/habitForm.svelte";
  import type { Habit } from "../main";
  import { moveFetchedHabits } from "../main";
  export let data;
  let habitsArr = moveFetchedHabits(data);
</script>

<div class="main">
  <div class="border h-96">
    <HabitContainer {habitsArr} />
  </div>
</div>
