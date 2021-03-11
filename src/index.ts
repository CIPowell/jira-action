import core from "@actions/core";
import github from "@actions/github";
import { getTickets } from "./tickets";
import { getDeployBody } from "./jira";

(async () => {
  console.log("Starting Action...");
  const tickets = getTickets(github);
  const requestBody = getDeployBody(tickets, github);
})();
