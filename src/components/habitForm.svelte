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

<div class="">
  <form class="w-full" method="POST" action="?/createHabit">
    <div class="">
      *Assignment Name
      <input
        class="bg-slate-200 p-1 w-full border-2 border-black outline-0"
        type="text"
        name="habit-name"
        placeholder="homework"
      />
    </div>
    <div class="mb-2">
      *description
      <input
        class="bg-slate-200 p-1 w-full border-2 border-black outline-0"
        type="text"
        name="habit-description"
        placeholder="mm/dd/yyyy"
      />
    </div>
    <div class="">
      *intervall
      <input
        class="bg-slate-200 p-1 w-full border-2 border-black outline-0"
        type="number"
        name="habit-intervall"
        placeholder="Link"
      />
    </div>

    <button class="w-full p-1 border-2 border-black">create</button>
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
