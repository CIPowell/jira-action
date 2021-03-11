import client from "../src/jira";

describe("Jira Client", () => {
  it("should build a valid JSON document", () => {
    const github = {
      run_id: 100,
    };

    const output = client.getDeployBody(["CIP-2"], github);

    try {
      JSON.parse(output);
    } catch (err) {
      fail(`Invalid JSON :
                ${err}
                ${output}`);
    }
  });

  it("should set the tickets correctly", () => {
    const github = {
      run_id: 100,
    };

    const output = JSON.parse(client.getDeployBody(["CIP-2"], github));

    expect(output.deployments).toHaveLength(1);

    const [deployment] = output.deployments;

    expect(deployment.associations).toHaveLength(1);
    expect(deployment.associations[0].associationType).toBe("issueIdOrKeys");
    expect(deployment.associations[0].values).toEqual(["CIP-2"]);
    expect(deployment.deploymentSequenceNumber).toStrictEqual(100);
    expect(deployment.updateSequenceNumber).toBeGreaterThan(0);
  });
});
