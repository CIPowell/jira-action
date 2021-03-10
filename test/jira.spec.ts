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

  it("should set the tickets correctly", () => {
    const output = JSON.parse(client.getDeployBody(["CIP-2"]));

    expect(output.deployments).toHaveLength(1);
    expect(output.deployments[0].associations).toHaveLength(1);
    expect(output.deployments[0].associations[0].associationType).toBe(
      "issueIdOrKeys"
    );
    expect(output.deployments[0].associations[0].values).toEqual(["CIP-2"]);
  });
});
