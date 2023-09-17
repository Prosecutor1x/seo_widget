import {  ITask } from '@/interface/api.response';
import axios, { AxiosResponse } from 'axios';

// Define the types for the API response and task objects
///interface Task {
  // Define the properties you expect in a task object
  // For example, assuming there's an 'id' property in a task
  //id: string;
  // Add more properties as needed
//}

interface ApiResponse {
  tasks: ITask[];
  // Add more properties from the API response if needed
}

const getTaskSummary = async (taskId: string): Promise<void> => {
  const authHeader = 'Basic bmFuZGFramlzaHJhbnVqb25AZ21haWwuY29tOjI5NWU2ZTE0OWZkMmJjMWM=';
let result: ITask;
  try {
    const taskResponse: AxiosResponse<ApiResponse> = await axios.get(`https://api.dataforseo.com/v3/on_page/summary/${taskId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      auth: {
        username: "nandakrishnarjun@gmail.com",
        password: "295e6e109fd2bc1c",
      },
    });

    const result = taskResponse.data.tasks;
    // Result data
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

export default getTaskSummary;


