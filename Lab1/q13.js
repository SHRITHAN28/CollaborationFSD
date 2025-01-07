/*Program: Create a TaskManager class that manages tasks with properties like 
taskName, priority, and dueDate. Add methods to add, delete, and update 
tasks. Include sorting by priority and due date.
Task: Implement date comparison to check if a task is overdue. Create 
functionality for filtering tasks based on their status (in-progress, completed). Display overdue tasks in red and upcoming tasks in green. */
class Task {
    constructor(taskName, priority, dueDate, status = "in-progress") {
        this.taskName = taskName;
        this.priority = priority;
        this.dueDate = new Date(dueDate);
        this.status = status;
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(taskName, priority, dueDate, status = "in-progress") {
        this.tasks.push(new Task(taskName, priority, dueDate, status));
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter(task => task.taskName !== taskName);
    }
    updateTask(taskName, updates) {
        const task = this.tasks.find(task => task.taskName === taskName);
        if (task) Object.assign(task, updates);
    }
    getOverdueTasks() {
        return this.tasks.filter(task => new Date(task.dueDate) < new Date() && task.status !== "completed");
    }
    getUpcomingTasks() {
        return this.tasks.filter(task => new Date(task.dueDate) >= new Date());
    }
    sortTasks(by = "priority") {
        this.tasks.sort((a, b) => by === "priority" 
            ? a.priority - b.priority 
            : new Date(a.dueDate) - new Date(b.dueDate));
    }
}
const manager = new TaskManager();
manager.addTask("Task 1", 1, "2025-01-05");
manager.addTask("Task 2", 2, "2025-01-10", "completed");
manager.addTask("Task 3", 3, "2025-01-03");
console.log("Overdue Tasks:", manager.getOverdueTasks());
console.log("Upcoming Tasks:", manager.getUpcomingTasks());
manager.sortTasks("dueDate");
console.log("Sorted Tasks:", manager.tasks);
