<script lang="ts">
    import type { Habit } from "../main"
    
    let showHabits: boolean = false;
    let habitStreak: number = 0;
    let habits: Array<Habit>;
    let currentHabit: Habit;  
    
    habits = [
        {name: "reading", streak: 0},
        {name: "math", streak: 2},
        {name: "workout", streak: 5},
        {name: "run", streak: 0},
    ]
    
    function showHabiList(): void{
       showHabits = !showHabits
    }
    
    function setHabit(event: any): void{
        let habitID: number;
        habitID = event.target.id
        currentHabit = habits[habitID]
        let habitIndex = habits.findIndex(habits => habits.name === currentHabit.name);
        showHabits = !showHabits;
        habitStreak = habits[habitIndex].streak; 
    }
    
    function updateStreak(habitindex: number){
       habitStreak = habits[habitindex].streak; 
    }
    
    function addToStreak(event: any): void {
        console.log(currentHabit.streak)
        // get current index of habit
        let habitIndex = habits.findIndex(habits => habits.name === currentHabit.name);
        setTimeout(() => {
            habits[habitIndex].streak++
            updateStreak(habitIndex)
        },500)
    }
    
    </script>
    
    <div class="w-1/4">
        <div class="border border-black ">
            <div class="flex flex-col justify-center items-center">
                <button on:click={showHabiList}>
                    {#if currentHabit != undefined}
                        <span>
                            {currentHabit.name}
                        </span>
                    {:else}
                        <span>
                            select habit
                        </span>
                    {/if}
                </button>
                {#if showHabits}
                    {#each habits as habit, i}
                        <span id={i.toString()} on:click={setHabit} class="text-2xl">{habit.name}</span>
                    {/each}
                {/if}
            </div>
    
            <div class="rounded-full border border-black w-32 h-32 flex justify-center items-center mx-auto" on:mousedown={addToStreak} id="habitBtn">
                <span class="text-5xl select-none">{habitStreak}</span>
            </div>
    
            <div class="flex w-1/3 mx-auto justify-between mt-2">
                <div id="streakCirc" class="border h-4 w-4 rounded-full"></div>
                <div id="streakCirc" class="border h-4 w-4 rounded-full"></div>
                <div id="streakCirc" class="border h-4 w-4 rounded-full"></div>
                <div id="streakCirc" class="border h-4 w-4 rounded-full"></div>
                <div id="streakCirc" class="border h-4 w-4 rounded-full"></div>
                <div id="streakCirc" class="border h-4 w-4 rounded-full"></div>
                <div id="streakCirc" class="border h-4 w-4 rounded-full"></div>
            </div>
    </div>
    </div>