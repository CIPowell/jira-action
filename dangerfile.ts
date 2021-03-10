import { message, danger } from "danger";

const modifiedMD = danger.git.modified_files.join("\n -");
message("changed files in this PR: \n -" + modifiedMD);
