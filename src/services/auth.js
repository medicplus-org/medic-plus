import { apiClient } from "./config";

export const apiDocSignup = async (payload) => {
  return apiClient.post(
    "/doctor/register",
    payload
    //     {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
  );
};

export const apiUserSignup = async (payload) => {
  return apiClient.post("/user/register", payload, 
//     {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }
);
};

export const apiDocLogin = async (payload) =>
  apiClient.post("/doctor/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const apiUserLogin = async (payload) =>
  apiClient.post("/user/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
