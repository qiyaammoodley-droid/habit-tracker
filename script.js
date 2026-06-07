/*
=========================================
Habit tracker 
JavaScript Concepts Demonstrated
Variables
Arrays
Objects
Functions
Conditions
Loops
DOM Manipulation
Event Listeners
Form Validation
=========================================
*/


/*
=========================================
Habits Array
Arrays
Stores all habit objects.
This is the single source of truth
for the entire application.
=========================================
*/

let habits = [];


/*
=========================================
DOM selection
DOM Manipulation
Connects JavaScript to HTML.
=========================================
*/

const habitForm = document.getElementById("habitForm");

const habitName = document.getElementById("habitName");

const habitTarget = document.getElementById("habitTarget");

const habitCategory = document.getElementById("habitCategory");

const errorMessage = document.getElementById("errorMessage");

const habitList = document.getElementById("habitList");

const totalHabits = document.getElementById("totalHabits");

const doneToday = document.getElementById("doneToday");

const completion = document.getElementById("completion");


/*
=========================================
Form validation
Functions
Conditions
Checks all user input before
a habit can be added.
=========================================
*/

function validateForm() {

    const name = habitName.value.trim();

    const target = Number(habitTarget.value);

    const category = habitCategory.value;

    if (name.length < 3) {

        errorMessage.textContent =
            "Habit name must be at least 3 characters.";

        return false;
    }

    if (target < 1 || target > 7) {

        errorMessage.textContent =
            "Target must be between 1 and 7.";

        return false;
    }

    if (category === "") {

        errorMessage.textContent =
            "Please select a category.";

        return false;
    }

    errorMessage.textContent = "";

    return true;
}


/*
=========================================
Add habit
Objects
Arrays
Functions
Creates a new habit object
and stores it inside the array.
=========================================
*/

function addHabit() {

    const habit = {

        id: Date.now(),

        name: habitName.value.trim(),

        category: habitCategory.value,

        target: Number(habitTarget.value),

        streak: 0,

        doneToday: false
    };

    habits.push(habit);
}


/*
=========================================
Render habits
Arrays
Loops
DOM Manipulation
Displays all habits from the array.
=========================================
*/

function renderHabits() {

    habitList.innerHTML = "";

    habits.forEach(function(habit) {

        const habitCard =
            document.createElement("div");

        habitCard.classList.add("habit-card");

        if (habit.doneToday) {

            habitCard.classList.add("completed");

        }

        habitCard.innerHTML = `
            <h3>${habit.name}</h3>

            <p>Category: ${habit.category}</p>

            <p>Target: ${habit.target} days</p>

            <p>Streak: ${habit.streak}</p>

            <input
                type="checkbox"
                class="habit-checkbox"
                data-id="${habit.id}"
                ${habit.doneToday ? "checked" : ""}
            >

            <button
                class="delete-btn"
                data-id="${habit.id}"
            >
                Delete
            </button>
        `;

        habitList.appendChild(habitCard);

        const checkbox =
            habitCard.querySelector(".habit-checkbox");

        checkbox.addEventListener(
            "change",
            function() {

                toggleHabit(habit.id);

            }
        );

        const deleteButton =
            habitCard.querySelector(".delete-btn");

        deleteButton.addEventListener(
            "click",
            function() {

                deleteHabit(habit.id);

            }
        );

    });

}


/*
=========================================
Update summary
Functions
Arrays
Conditions
Updates dashboard statistics.
=========================================
*/

function updateSummary() {

    const total = habits.length;

    const completedHabits =
        habits.filter(function(habit) {

            return habit.doneToday;

        }).length;

    let percentage = 0;

    if (total > 0) {

        percentage =
            Math.round(
                (completedHabits / total) * 100
            );

    }

    totalHabits.textContent = total;

    doneToday.textContent = completedHabits;

    completion.textContent = percentage + "%";

}


/*
=========================================
Toggle habit
Objects
Conditions
Marks a habit complete
or incomplete.
=========================================
*/

function toggleHabit(id) {

    habits.forEach(function(habit) {

        if (habit.id === id) {

            if (habit.doneToday) {

                habit.doneToday = false;

                if (habit.streak > 0) {

                    habit.streak--;

                }

            } else {

                habit.doneToday = true;

                habit.streak++;

            }

        }

    });

    renderHabits();

    updateSummary();

}


/*
=========================================
Delete havit
Arrays
Filter Method
Removes a habit.
=========================================
*/

function deleteHabit(id) {

    habits =
        habits.filter(function(habit) {

            return habit.id !== id;

        });

    renderHabits();

    updateSummary();

}


/*
=========================================
Form submit event
Event Listeners
Runs validation and adds habits.
=========================================
*/

habitForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        if (!validateForm()) {

            return;

        }

        addHabit();

        renderHabits();

        updateSummary();

        habitForm.reset();

    }
);