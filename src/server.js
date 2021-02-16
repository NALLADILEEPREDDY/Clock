import { usersData } from "./mockData";
import { createServer } from "miragejs";

export default function Server() {
  const server = createServer();
  server.get("/api/users", usersData);
  server.get("/api/usernames", (schema) => {
    return getUserNames();
  });
  server.get("/api/user/:id", (schema, request) => {
    let id = request.params.id;
    return findUserById(id);
  });
}
const findUserById = (name) => {
  const members = usersData.data.members;
  const user = members.find((member) => member.real_name === name);
  return user;
};
const getUserNames = () => {
  const members = usersData.data.members;
  let userNames = [];
  members.forEach((member) => {
    userNames.push(member.real_name);
  });
  return userNames;
};
