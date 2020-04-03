import { addNewTask, updateTask } from "./server";

(async function myFunc() {
  await addNewTask({
    name: 'My Test Task',
    id: '12346'
  })

  await updateTask({
    id: '12346',
    name: 'My Test Task - UPDATED!!!',
  })
})()