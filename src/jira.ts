import mustache from "mustache";

import template from "./deploy-request-body.mustache";

export const getDeployBody = (ticketNumbers: string[], github: any): string => {
  return mustache.render(template, {
    issueKeys: JSON.stringify(ticketNumbers),
    deploymentSequenceNumber: github.run_id,
    updateSequenceNumber: new Date().getTime(),
  });
};

export default {
  getDeployBody,
};
