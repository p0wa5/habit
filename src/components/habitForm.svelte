<script lang="ts">
  /* Form for Assignment Creation */
  import { slide } from "svelte/transition";
  let isExpanded = false;
  let expanAddTopic = false;
  let currentTopic = "choose a topic";
  let currenTopicId = "";

  //generate topicID

  function clickHandler() {
    isExpanded = !isExpanded;
  }

  function newAssignmentHandler() {
    expanAddTopic = !expanAddTopic;
  }
</script>

<div class="bg-emerald-800 text-white p-4 w-48 rounded-lg">
  <form class="w-full" method="POST" action="?/createHabit">
    <div class="">
      Assignment Name
      <input
        class="bg-emerald-600 p-1 w-full outline-0 rounded-sm placeholder:text-slate-200"
        type="text"
        name="habit-name"
        placeholder="coding"
      />
    </div>
    <div class="mb-2">
      description
      <input
        class="bg-emerald-600 p-1 w-full outline-0 roundes-sm placeholder:text-slate-200"
        type="text"
        name="habit-description"
        placeholder="code 10 hours a day"
      />
    </div>
    <div class="">
      intervall
      <input
        class="bg-emerald-600 p-1 w-full outline-0 rounded-sm placeholder:text-slate-200"
        type="number"
        name="habit-interval"
        placeholder="24"
      />
    </div>

    <button
      class="mt-4 w-full p-1 bg-emerald-600 rounded-sm hover:bg-emerald-500 transition duration-500 ease-in-out"
      >create</button
    >
  </form>
</div>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
