const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let toDoList = [];

function showMenu() {
  console.log('\n==== To-Do List ====');
  console.log('1. Add a task');
  console.log('2. View tasks');
  console.log('3. Remove a task');
  console.log('4. Exit');
  rl.question('\nEnter your choice: ', handleMenu);
}

function handleMenu(choice) {
  switch (choice) {
    case '1':
      rl.question('Enter task description: ', addTask);
      break;
    case '2':
      viewTasks();
      showMenu();
      break;
    case '3':
      rl.question('Enter task number to remove: ', removeTask);
      break;
    case '4':
      rl.close();
      break;
    default:
      console.log('Invalid choice. Please try again.');
      showMenu();
      break;
  }
}

function addTask(description) {
  toDoList.push(description);
  console.log('Task added successfully!');
  showMenu();
}

function viewTasks() {
  console.log('\nTasks:');
  toDoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

function removeTask(taskNumber) {
  const index = parseInt(taskNumber) - 1;
  if (index >= 0 && index < toDoList.length) {
    const removedTask = toDoList.splice(index, 1);
    console.log(`Task '${removedTask}' removed successfully!`);
  } else {
    console.log('Invalid task number. Please try again.');
  }
  showMenu();
}

showMenu();
