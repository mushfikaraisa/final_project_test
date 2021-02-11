const assert = require('assert');
const TaskManager = require('../resources/js/taskManager2.js');

const manager = new TaskManager();
manager.addTask('Complete Task 10', 'Perform tests using Mocha', 'Group #4 (PST)', '2/10/21', 'In Progress');
manager.addTask('Perform Another Test', 'Write second test for the addTask() method', 'Group #4 (PST)', '2/10/21', 'In Progress');
manager.getTaskById(2, 'Done');
manager.addTask('Perform Another Test', 'Write second test for the addTask() method', 'Group #4 (PST)', '2/10/21', 'In Progress');



const oneLessTask = new TaskManager();
oneLessTask.addTask('Complete Task 10', 'Perform tests using Mocha', 'Group #4 (PST)', '2/10/21', 'In Progress');
oneLessTask.addTask('Perform Another Test', 'Write second test for the addTask() method', 'Group #4 (PST)', '2/10/21', 'In Progress');
oneLessTask.deleteTask(1);
oneLessTask.addTask('Perform Another Test', 'Write a test for the deleteTask() method', 'Group #4 (PST)', '2/10/21', 'In Progress');


describe('TaskManager', () => {
    it('initializes object instances of the TaskMananger class', () => {
        const expectedResult = 'object';
        const result = typeof manager;
        assert.strictEqual(result, expectedResult);
    });

    describe('.addTask', () => {
        it('pushes an object to the this.tasks array', () => {
            const expectedResult = 'object';
            const task = manager.tasks[0];
            const result = typeof task
            assert.strictEqual(result, expectedResult);
        });
        it('assigns unique id to each card', () => {
            const expectedResult = true;
            const taskId1 = manager.tasks[0].id;
            const taskId2 = manager.tasks[1].id;
            const result = taskId1 !== taskId2;
            assert.strictEqual(result, expectedResult);
        });
    });
    describe('.deleteTask', () => {
        it('creates an array called newTasks with one less task and sets it equal to this.tasks', () => {
            const expectedResult = 1;
            const oldLength = manager.tasks.length;
            const newLength = oneLessTask.tasks.length;
            const result = oldLength - newLength;
            assert.strictEqual(result, expectedResult);
        });
    });
    describe('.getTaskById', () => {
        it('changes status of the task that matches the specfied id', () => {
            const expectedResult = true;
            const selectedTaskStatus = manager.tasks[1].status;
            const taskCopyStatus = manager.tasks[2].status;
            const result = selectedTaskStatus !== taskCopyStatus;
            assert.strictEqual(result, expectedResult);
        });
    });
});