import axios from 'axios';

// Function to create a task and return a Promise
const createTask = async (targetUrl: string): Promise<string> => {
  const post_array = [
    {
      "target": targetUrl,
      "max_crawl_pages": 10,
      "load_resources": true,
      "enable_javascript": true,
      "custom_js": "meta = {}; meta.url = document.URL; meta;",
      "tag": "task1",
     
      "enable_browser_rendering": true,
    }
  ];

  const authHeader = 'Basic bmFuZGFramlzaHJhbnVqb25AZ21haWwuY29tOjI5NWU2ZTE0OWZkMmJjMWM=';

  try {
    const response = await axios.post('https://api.dataforseo.com/v3/on_page/task_post', post_array, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      auth: {
        username: "nandakrishnarjun@gmail.com",
        password: "295e6e109fd2bc1c",
      },
    });
    const taskId: string = response.data.tasks[0].id;
    console.log("Task ID:", taskId);
    return taskId;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

export default createTask;
