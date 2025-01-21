// import { API_URL } from "./utils";

// export const CreateTask = async (taskObj) => {
//   const url = API_URL;
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(taskObj),
//   };
//   try {
//     const result = await fetch(url, options);
//     console.log("Response Status:", result.status);
//     console.log("Response Headers:", result.headers);
//     const data = await result.json();
//     console.log("Response Data:", data);
//   } catch (err) {
//     console.log("Error in CreateTask:", err);

//   }
// };
const API_URL = "http://localhost:8080/tasks"; // Backend URL

export const CreateTask = async (taskObj) => {
  const url = API_URL;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(taskObj),
  };
  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log("Response Data:", data);
    return data;
  } catch (err) {
    console.log("Error in CreateTask:", err);
    return null;
  }
};
