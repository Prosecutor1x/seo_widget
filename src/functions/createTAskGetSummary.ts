import { ApiResponse, IResult, ITask } from "@/interface/api.response";
import axios, { AxiosResponse } from "axios";
import { configDotenv } from "dotenv";


// I wrote a single function which systematically handles the creation of a task and the retrieval of the summary of the task 
// You can find the types described in the interface file
// I wrote individual functions to but then tried to do something more convenient and this is the result


const createTaskAndGetSummary = async (targetUrl: string): Promise<ITask[]> => {
  const authHeader =process.env.NEXT_PUBLIC_DATAFORSEO_AUTH_HEADER ;
  const username =process.env.NEXT_PUBLIC_DATAFORSEO_USERNAME;
  const password  =process.env.NEXT_PUBLIC_DATAFORSEO_PASSWORD;
  const url =  process.env.NEXT_PUBLIC_DATAFORSEO_API_URL
  console.log(authHeader,username,password,url);
    
  const maxWaitTimeInSeconds = 20; // Maximum wait time in seconds (adjust as needed)

  try {
    // Create task
    const createTaskResponse: AxiosResponse<ApiResponse> = await axios.post(
      url +'task_post',
      [
        {
          target: targetUrl,
          max_crawl_pages: 5,
          load_resources: true,
          enable_javascript: true,
          tag: "task1",
          enable_browser_rendering: true,
        },
      ],
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        auth: {
          username : username as string,
          password : password  as string,
        },
      }
    );

    const taskId = createTaskResponse.data.tasks[0].id;
    console.log("Task ID:", taskId);
    
    
    // Get task status


    const startTime = Date.now();
    let taskStatus: IResult;


      //timeout added in case the page crawling takes too long


    while (true) {
      if (Date.now() - startTime > maxWaitTimeInSeconds * 1000) {
        console.log("Timeout reached. Task not finished.");
        break;
      }

      await new Promise((resolve) => setTimeout(resolve, 5000));

      const getTaskResponse: AxiosResponse<ApiResponse> = await axios.get(
        url +`summary/${taskId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader,
          },
          auth: {
            username : username as string,
            password : password  as string,
          },
        }
      );

      taskStatus = getTaskResponse.data.tasks[0].result[0];
      // console.log("Task Status:", taskStatus);

      if (taskStatus.crawl_progress === "finished") {
        // Task finished, exit the loop
        break;
      }
    }


    // Get task summary

    const getSummaryResponse: AxiosResponse<ApiResponse> = await axios.get(
      url +`summary/${taskId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        auth: {
          username : username as string,
          password : password  as string,
        },
      }
    );

    const taskSummary = getSummaryResponse.data.tasks;
    //console.log(taskSummary);
    return taskSummary;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

export default createTaskAndGetSummary;
