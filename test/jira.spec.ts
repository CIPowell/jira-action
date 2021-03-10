import client from "../src/jira";

describe("Jira Client", () => {
  it("should build a valid JSON document", () => {
    const output = client.getDeployBody(["CIP-2"]);

    try {
      JSON.parse(output);
    } catch (err) {
      fail(`Invalid JSON :
                ${err}
                ${output}`);
    }
  });

  it("should send a valid request", () => {});
});
