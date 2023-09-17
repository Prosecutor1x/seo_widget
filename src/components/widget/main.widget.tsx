/* eslint-disable react/no-children-prop */
"use client";

import createTaskAndGetSummary from "@/functions/createTAskGetSummary";
import { IResult, ITask } from "@/interface/api.response";
import React, { useState } from "react";
import ResultListComponent from "./result.widget";

type Props = {};

const Widget = (props: Props) => {
  const [url, setUrl] = useState<string>("");
  const [task, setTask] = useState<ITask[] | undefined>();
  const [isloading, setIsloading] = useState<boolean>(false);

  function isValidUrl(url: string) {
    const pattern = new RegExp(
      "^([a-zA-Z]+:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );
    return pattern.test(url);
  }

  const handleUrlRequest = async () => {
    setIsloading(true);
    {
      if (isValidUrl(url))
        try {
          const taskSummary: ITask[] = await createTaskAndGetSummary(url);
          setTask(taskSummary as unknown as ITask[]);
          setIsloading(false);
          
        } catch (error) {
          console.error("Error:", error);
        }
      else alert("Please enter a valid URL");
    }
  };



  return (
    <div className="flex flex-col justify-center items-center space-y-4 px-4 py-6">
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          name="url"
          value={url}
          className="input-primary text-lg lg:text-xl rounded-full"
          placeholder="Enter your URL here"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <button className="btn-primary" onClick={handleUrlRequest}>
          Submit
        </button>
      </div>
      {isloading ? (
        <img src="/scanner.gif" />
      ) : (
        <>
          {task && (
            <div>
              <ResultListComponent
                result={task[0].result as unknown as IResult[]}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Widget;
