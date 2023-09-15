/* eslint-disable react/no-children-prop */
"use client";

import createTaskAndGetSummary from "@/functions/createTAskGetSummary";
import createTask2 from "@/functions/getInstantPages";
import createTask from "@/functions/getTaskId";
import getTaskSummary from "@/functions/getTaskSummary";
import { ITask } from "@/interface/task";
import React, { useState } from "react";

type Props = {};

const Widget = (props: Props) => {
  const [url, setUrl] = useState<string>("");
  const [task, setTask] = useState<ITask>();
  // const axios = require("axios");
  // const post_array = [
  //   {
  //     target: url,
  //     max_crawl_pages: 10,
  //     load_resources: true,
  //     enable_javascript: true,
  //     custom_js: "meta = {}; meta.url = document.URL; meta;",
  //     tag: "task1"

  //   },
  // ];

  // const apiEndpoint = "https://api.dataforseo.com/v3/on_page/task_post";
  // const authHeader =
  //   "Basic bmFuZGFramlzaHJhbnVqb25AZ21haWwuY29tOjI5NWU2ZTEwOWZkMmJjMWM=";

  const handleUrlRequest = async () => {
    try {
      const taskSummary: ITask[] = await createTaskAndGetSummary(url);
      setTask(taskSummary as unknown as ITask);
      console.log(taskSummary);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(task);

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div>
        <input
          type="text"
          name="url"
          value={url}
          className="input-primary"
          placeholder="Enter your URL here"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
      </div>
      <button className="btn-primary" onClick={handleUrlRequest}>
        Submit
      </button>
    </div>
  );
};

export default Widget;
