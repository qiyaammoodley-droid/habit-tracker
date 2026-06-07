# Habit Tracker

## Overview

Habit Tracker is a beginner-friendly web application built using HTML, CSS, and JavaScript.

The goal of the project is to help users create daily habits, track their progress, build streaks, and monitor their overall completion rate. All data is managed directly in the browser using JavaScript, with no database or external frameworks required.

This project was built as part of my JavaScript learning journey and demonstrates core front-end development concepts such as form validation, arrays, objects, functions, event listeners, loops, conditions, and DOM manipulation.

---

## Features

* Add new habits
* Choose a category for each habit
* Set a target number of days per week
* Form validation with user-friendly error messages
* Mark habits as completed
* Track streak counts
* Delete habits
* View a live summary dashboard showing:

  * Total habits
  * Habits completed today
  * Overall completion percentage
* Responsive layout for different screen sizes

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JavaScript)

No frameworks or libraries were used.

---

## Project Structure

habit-tracker/
index.html
style.css
script.js
README.md

---

## Installation

1. Clone the repository:

git clone https://github.com/qiyaammoodley-droid/habit-tracker.git


2. Open the project folder:

cd habit-tracker


3. Open the project in Visual Studio Code or your preferred code editor.

---

## Running the Project Locally

Since this project uses only HTML, CSS, and JavaScript, there is no build process required.

Option 1:

 Open "index.html" directly in your browser.

Option 2 (Recommended):

 Open the project in VS Code.
 Install the Live Server extension.
 Right-click "index.html".
 Select "Open with Live Server".

---

How to Test the Application

 Add a Habit

1. Enter a habit name.
2. Enter a target between 1 and 7.
3. Select a category.
4. Click "Add Habit".

Expected result:

* The habit should appear in the habit list.
* The total habit count should increase.

Validation

Try entering:

 A name shorter than 3 characters
 A target outside the range of 1–7
 No category

Expected result:

 An inline error message should appear.

 Complete a Habit

1. Tick the habit checkbox.

Expected result:

 The streak count increases.
 The dashboard updates.
 The habit is visually marked as completed.

 Delete a Habit

1. Click the Delete button.

Expected result:

 The habit is removed.
 The summary updates automatically.

---

 Known Limitations

 Habit data is not permanently stored.
 Refreshing the page will reset all habits.
 Streaks only track activity during the current browser session.
 There is currently no filtering or sorting functionality.

These improvements could be added in future versions.

---

 Future Improvements

Potential enhancements include:

 Local Storage support
 Habit filtering by category
 Habit sorting by streak
 Weekly progress tracking
 Dark/Light mode toggle
 Improved habit analytics

---

 Contact

If you have any questions, suggestions, or feedback regarding this project, feel free to reach out through my GitHub profile:

https://github.com/qiyaammoodley-droid

---

Thank you for taking the time to view this project.
