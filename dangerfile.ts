import { danger, markdown } from "danger";
import jest from "danger-plugin-jest";
import { codeCoverage } from "danger-plugin-code-coverage";
import jiraIssue from "danger-plugin-jira-issue";

const modifiedMD = danger.git.modified_files.join("\n + ");
markdown("changed files in this PR: \n + " + modifiedMD);

jest();
codeCoverage([
  {
    title: "# Coverage",
    ignoreCoveragePattern: [
      "dist",
      "test",
      "ignore",
      ".spec.",
      ".json",
      "config",
      "yml",
      "yaml",
      "dangerfile",
      "eslintrc",
    ],
    coverageFilesPath: "coverage/coverage-final.json",
  },
]);
jiraIssue({
  key: "CIP",
  url: "https://chrisipowell.atlassian.net/browse",
});
