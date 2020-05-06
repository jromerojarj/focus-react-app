import axios from "axios";

const CREDENTIALS =
  "Basic NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY=";

const baseURL = "http://localhost:5500";
const timeout = 60000;
const headers = {
  Authorization: CREDENTIALS,
};

export const request = axios.create({
  baseURL,
  timeout,
  headers,
});
