const axios = require('axios');

// Function to create a task and return a Promise
const createTask2 = async ( targetUrl : any) => {
  const post_array = [
    {
      
      "url":  targetUrl,
      "enable_javascript": true,
      "custom_js": "meta = {}; meta.url = document.URL; meta;"
      
    }
  ];

  const authHeader = 'Basic bmFuZGFramlzaHJhbnVqb25AZ21haWwuY29tOjI5NWU2ZTE0OWZkMmJjMWM=';

  try {
    const response = await axios.post('https://api.dataforseo.com/v3/on_page/instant_pages', post_array, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      auth: {
        username: "nandakrishnarjun@gmail.com",
        password: "295e6e109fd2bc1c",
      },
    });
    const res = response.data.tasks;
    console.log("Res:", res);
    
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

export default createTask2;