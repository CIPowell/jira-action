import mustache from "mustache";

import template from "./deploy-request-body.mustache";

const getDeployBody = (ticketNumbers: string[]): string => {
  return mustache.render(template, {
    issueKeys: JSON.stringify(ticketNumbers),
  });
};

export default {
  getDeployBody,
};
