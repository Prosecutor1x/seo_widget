import { ITask } from '@/interface/task';
import axios, { AxiosResponse } from 'axios';

// Define the types for the API response and task objects
//interface Task {
  //id: string;
  //crawl_progress: string; 
  // Assuming "crawl_progress" is a property indicating the task progress
  // Add more properties as needed
//}

interface ApiResponse {
  tasks: ITask[];
  // Add more properties from the API response if needed
}

// Function to create a task and get its summary
const createTaskAndGetSummary = async (targetUrl: string): Promise<ITask[]> => {
  const authHeader = 'Basic bmFuZGFramlzaHJhbnVqb25AZ21haWwuY29tOjI5NWU2ZTE0OWZkMmJjMWM=';
  const maxWaitTimeInSeconds = 20; // Maximum wait time in seconds (adjust as needed)

  try {
    // Step 1: Create a task
    const createTaskResponse: AxiosResponse<ApiResponse> = await axios.post('https://api.dataforseo.com/v3/on_page/task_post', [
      {
        "target": targetUrl,
        "max_crawl_pages": 5,
        "load_resources": true,
        "enable_javascript": true,
        "tag": "task1",
        "enable_browser_rendering": true,
      }
    ], {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      auth: {
        username: "nandakrishnarjun@gmail.com",
        password: "295e6e109fd2bc1c",
      },
    });

    const taskId = createTaskResponse.data.tasks[0].id;
    console.log("Task ID:", taskId);

    const startTime = Date.now();
    let taskStatus: ITask;

    // Step 2: Poll for task completion with a timeout
    while (true) {
      if (Date.now() - startTime > maxWaitTimeInSeconds * 1000) {
        // Timeout reached, exit the loop
        console.log("Timeout reached. Task not finished.");
        break;
      }

      // Delay execution for a few seconds before checking the status again (adjust as needed)
      await new Promise((resolve) => setTimeout(resolve, 5000)); // 5 seconds

      // Get the task status
      const getTaskResponse: AxiosResponse<ApiResponse> = await axios.get(`https://api.dataforseo.com/v3/on_page/summary/${taskId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader
        },
        auth: {
          username: "nandakrishnarjun@gmail.com",
          password: "295e6e109fd2bc1c",
        },
      });

      taskStatus = getTaskResponse.data.tasks[0];
     // console.log("Task Status:", taskStatus);

      if (taskStatus.crawl_progress === "finished") {
        // Task finished, exit the loop
        break;
      }
    }

    // Step 3: Get the task summary after completion
    
      const getSummaryResponse: AxiosResponse<ApiResponse> = await axios.get(`https://api.dataforseo.com/v3/on_page/summary/${taskId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader
        },
        auth: {
          username: "nandakrishnarjun@gmail.com",
          password: "295e6e109fd2bc1c",
        },
      });

      const taskSummary = getSummaryResponse.data.tasks;
      // Task summary data
      //console.log(taskSummary);
      return taskSummary;
  
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

export default createTaskAndGetSummary;
