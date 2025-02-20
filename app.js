
//adding Firebase to my main javascript file 
import { initializeApp } from "firebase/app";
import { getDoc, getDocs, addDoc, getFirestore, collection } from
"firebase/firestore";
import { getAnalytics } from "firebase/analytics";


//Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOEH-lZXEK_lp9WFc1XNrR4Jr5rBbPzvI",
    authDomain: "checklist-todo-app-a391c.firebaseapp.com",
    projectId: "checklist-todo-app-a391c",
    storageBucket: "checklist-todo-app-a391c.firebasestorage.app",
    messagingSenderId: "966273922595",
    appId: "1:966273922595:web:2e57caac6005fb3ff52396",
    measurementId: "G-LPN5SSNXGR"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Firestore
const db = getFirestore(app);

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');



// Add Task
addTaskBtn.addEventListener('click', async () => {
    const task =  taskInput.value.trim(); 
    if (task) {
    const taskInput = document.getElementById("taskInput");
    const taskText = sanitizeInput(taskInput.value.trim()); // Sanitize input
   
    if (taskText) {
    await addTaskToFirestore(taskText); // Ensure task is added to Firestore before rendering
    renderTasks();  // Refresh the task list
    taskInput.value = ""; // Clear input field
    }
    renderTasks();
    } else {
        alert("Please enter a task!");
    }
   });

   //Add task to firestore 
   async function addTaskToFirestore(taskText) {
    await addDoc(collection(db, "todos"), {
    text: taskText,
    completed: false
 });


 // Add Task when Enter Key is Pressed in Input Field
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTaskBtn.click();
    }
}); 
 }


 // Complete Task on Keypress
 taskList.addEventListener("keypress", async function(e) {
    if (e.target.tagName === 'LI' && e.key === "Enter") {
      await updateDoc(doc(db, "todos", e.target.id), {
        completed: true
      });  
    }
    renderTasks();
  });

 //Retrieving the Todo-List
 async function renderTasks() {
    var tasks = await getTasksFromFirestore();
    taskList.innerHTML = "";
   
    tasks.forEach((task, index) => {
    if(!task.data().completed){
    const taskItem = document.createElement("li");
    taskItem.id = task.id;
    taskItem.textContent = task.data().text;
    taskItem.tabIndex = 0; // Makes the task item focusable with the keyboard
    taskList.appendChild(taskItem);
    }
    });
    }

    
   async function getTasksFromFirestore() {
    var data = await getDocs(collection(db, "todos"));
    let userData = [];
    data.forEach((doc) => {
    userData.push(doc);
    });
    return userData;
   }

   //Adding Security and Validation
   function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
   }

   // Use this function when saving tasks 
   const taskText = sanitizeInput(taskInput.value.trim());

// Remove Task on Click
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});






// Add Logging to my code 
import log from "loglevel";
// Set the log level (trace, debug, info, warn, error)
log.setLevel("info");
// Example logs
log.info("Application started");
log.debug("Debugging information");
log.error("An error occurred");

function addTask(task) {
    try {
    // Log user action
    log.info(`Task added: ${task}`);
    // Add task to the list
    tasks.push(task);
    renderTasks();
    } catch (error) {
    // Log error
    log.error("Error adding task", error);
    }
   }

   //Making an API Call to Chatbot Service 
   import { GoogleGenerativeAI } from '@google/generative-ai';

//Call in the event listener for page load
async function getApiKey() {
  let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
  apiKey =  snapshot.data().key;
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

async function askChatBot(request) {
  return await model.generateContent(request);
}