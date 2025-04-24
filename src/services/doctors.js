import { apiClient } from "./config";

export const apiGetAllDoctors = async () =>
  apiClient("/doctor", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
// export const apiDocAppointment = async () =>
//   apiClient("/appointment", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });

export const apiDocAppointment = async (data) =>
  apiClient.post("/appointment", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const apiGetDocAppointment = async () =>
  apiClient.get("/appointment", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const apiGetUserAppointment = async () =>
  apiClient.get("/appointment", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const apiDeleteUserAppointmentbyId = async (id) =>
  apiClient.delete(`/appointment/${id}`);

export const apiGetAppointmentById = async (id) =>
  apiClient.get(`/appointment/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const apiUpdateUserAppointmentById = async (id, data) =>
  apiClient.patch(`/appointment/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
