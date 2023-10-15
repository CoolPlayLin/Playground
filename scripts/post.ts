import { context } from "@actions/github";
import { Octokit } from "@octokit/rest";
import { env } from "node:process";

const api = new Octokit({
  auth: env.POST_TOKEN,
});
const Administrator = [
  "coolplaylin",
  "coolplaylinbot",
  "jsrcode",
  "liulyxandy-codemao",
  "fufu3939",
];
const Member = [
  "quiet-star-gazing",
  "pangguanzhejers",
  "QiKeZhiCao",
  "svipwing",
  "DIAG5",
  "CHEN-EXE",
];
export const labels_regex = {
  add: {
    //  "Administrator-Approved": '\[[Pp]olicy\]\s+[Aa]dministrator[\s-][Aa]pproved]',
    Announcement: /\[[Pp]olicy\]\s+[Aa]nnouncement/,
    "Blocking-issue": /\[[Pp]olicy\]\s+[bB]locking[\s-][Ii]ssue/,
    "Breaking-Change": /\[[Pp]olicy\]\s+[Bb]reaking[\s-][Cc]hange/,
    bug: /\[[Pp]olicy\]\s+[Bb]ug/,
    "Command-Execute": /\[[Pp]olicy\]\s+[Cc]ommand[\s-][Ee]xecute/,
    Commissions: /\[[Pp]olicy\]\s+[Cc]ommissions/,
    "Commissions-Member": /\[[Pp]olicy\]\s+[Cc]ommissions[\s-][Mm]ember/,
    "Commissions-Policy": /\[[Pp]olicy\]\s+[Cc]ommissions[\s-][Pp]olicy/,
    dependency: /\[[Pp]olicy\]\s+[Dd]ependenc(y|ies)/,
    "Do-Not-Merge": /\[[Pp]olicy\]\s+[Dd]o[\s-][Nn]ot[\s-][Mm]erge/,
    documentation: /\[[Pp]olicy\]\s+[Dd]ocumentation/,
    duplicate: /\[[Pp]olicy\]\s+[Dd]uplicate/,
    enhancement: /\[[Pp]olicy\]\s+[Ee]nhancement/,
    "good first issue": /\[[Pp]olicy\]\s+[Gg]ood[\s-][Ff]irst[\s-][Ii]ssue/,
    "help wanted": /\[[Pp]olicy\]\s+[Hh]elp[\s-][Ww]anted/,
    invalid: /\[[Pp]olicy\]\s+[Ii]nvalid/,
    "Member-Adding": /\[[Pp]olicy\]\s+[Mm]ember[\s-][Aa]dding/,
    //  "Member-Approved": /\[[Pp]olicy\]\s+/,
    "Merge-Needed": /\[[Pp]olicy\]\s+[Mm]erge[\s-][Nn]eeded/,
    "Needs-All-Approval": /\[[Pp]olicy\]\s+[Nn]eeds[\s-][Aa]ll[\s-][Aa]pproval/,
    "Needs-Author-Feedback":
      /\[[Pp]olicy\]\s+[Nn]eeds[\s-][Aa]uthor[\s-][Ff]eedback/,
    "Needs-Modify": /\[[Pp]olicy\]\s+[Nn]eeds[\s-][Mm]odify/,
    "Needs-Triage": /\[[Pp]olicy\]\s+[Nn]eeds[\s-][Tt]riage/,
    "Policy-Accepted": /\[[Pp]olicy\]\s+[Pp]olicy[\s-][Aa]ccepted/,
    "Policy-Modify": /\[[Pp]olicy\]\s+[Pp]olicy[\s-][Mm]odify/,
    "Policy-Rejected": /\[[Pp]olicy\]\s+[Pp]olicy[\s-][Rr]ejected/,
    "Policy-Remove": /\[[Pp]olicy\]\s+[Pp]olicy[\s-][Rr]emove/,
    "Policy-Request": /\[[Pp]olicy\]\s+[Pp]olicy[\s-][Rr]equest/,
    "Project-File": /\[[Pp]olicy\]\s+[Pp]roject[\s-][Ff]ile/,
  },
  remove: {
    //  "Administrator-Approved": '\[[Pp]olicy\]\s+[Aa]dministrator[\s-][Aa]pproved]',
    Announcement: /\[[Rr]emove\]\s+[Aa]nnouncement/,
    "Blocking-issue": /\[[Rr]emove\]\s+[bB]locking[\s-][Ii]ssue/,
    "Breaking-Change": /\[[Rr]emove\]\s+[Bb]reaking[\s-][Cc]hange/,
    bug: /\[[Rr]emove\]\s+[Bb]ug/,
    "Command-Execute": /\[[Rr]emove\]\s+[Cc]ommand[\s-][Ee]xecute/,
    Commissions: /\[[Rr]emove\]\s+[Cc]ommissions/,
    "Commissions-Member": /\[[Rr]emove\]\s+[Cc]ommissions[\s-][Mm]ember/,
    "Commissions-Policy": /\[[Rr]emove\]\s+[Cc]ommissions[\s-][Pp]olicy/,
    dependency: /\[[Rr]emove\]\s+[Dd]ependenc(y|ies)/,
    "Do-Not-Merge": /\[[Rr]emove\]\s+[Dd]o[\s-][Nn]ot[\s-][Mm]erge/,
    documentation: /\[[Rr]emove\]\s+[Dd]ocumentation/,
    duplicate: /\[[Rr]emove\]\s+[Dd]uplicate/,
    enhancement: /\[[Rr]emove\]\s+[Ee]nhancement/,
    "good first issue": /\[[Rr]emove\]\s+[Gg]ood[\s-][Ff]irst[\s-][Ii]ssue/,
    "help wanted": /\[[Rr]emove\]\s+[Hh]elp[\s-][Ww]anted/,
    invalid: /\[[Rr]emove\]\s+[Ii]nvalid/,
    "Member-Adding": /\[[Rr]emove\]\s+[Mm]ember[\s-][Aa]dding/,
    //  "Member-Approved": /\[[Rr]emove\]\s+/,
    "Merge-Needed": /\[[Rr]emove\]\s+[Mm]erge[\s-][Nn]eeded/,
    "Needs-All-Approval": /\[[Rr]emove\]\s+[Nn]eeds[\s-][Aa]ll[\s-][Aa]pproval/,
    "Needs-Author-Feedback":
      /\[[Rr]emove\]\s+[Nn]eeds[\s-][Aa]uthor[\s-][Ff]eedback/,
    "Needs-Modify": /\[[Rr]emove\]\s+[Nn]eeds[\s-][Mm]odify/,
    "Needs-Triage": /\[[Rr]emove\]\s+[Nn]eeds[\s-][Tt]riage/,
    "Policy-Accepted": /\[[Rr]emove\]\s+[Pp]olicy[\s-][Aa]ccepted/,
    "Policy-Modify": /\[[Rr]emove\]\s+[Pp]olicy[\s-][Mm]odify/,
    "Policy-Rejected": /\[[Rr]emove\]\s+[Pp]olicy[\s-][Rr]ejected/,
    "Policy-Remove": /\[[Rr]emove\]\s+[Pp]olicy[\s-][Rr]emove/,
    "Policy-Request": /\[[Rr]emove\]\s+[Pp]olicy[\s-][Rr]equest/,
    "Project-File": /\[[Rr]emove\]\s+[Pp]roject[\s-][Ff]ile/,
  },
};

export async function approved(pr_number: number, owner: string, repo: string) {
  const labelToAdd: string[] = [];
  const review = (
    await api.rest.pulls.listReviews({
      owner: owner,
      repo: repo,
      pull_number: pr_number,
    })
  ).data;
  review.forEach((obj) => {
    switch (obj.state) {
      case "approved":
        if (Administrator.includes(obj.user.login)) {
          labelToAdd.push("Administrator-Approved");
        } else if (Member.includes(obj.user.login)) {
          labelToAdd.push("Member-Approved");
        }
        break;
    }
  });
  // Apply Changes
  if (labelToAdd.length > 0) {
    await api.rest.issues.addLabels({
      owner: owner,
      repo: repo,
      issue_number: pr_number,
      labels: labelToAdd,
    });
  }
}

export async function pull_request_review_comment(
  action: string,
  repo: string,
  owner: string,
  pr_number: number,
  comment_id: number,
) {
  const labelToRemove: string[] = [];
  const labelToAdd: string[] = [];
  let labels = (
    await api.rest.issues.listLabelsOnIssue({
      repo: repo,
      owner: owner,
      issue_number: pr_number,
    })
  ).data.map((label) => label.name);
  let body = (
    await api.rest.issues.getComment({
      repo: repo,
      owner: owner,
      comment_id: comment_id,
    })
  ).data.body;
  switch (action) {
    case "created":
      // Check regex to add label
      Object.keys(labels_regex.add).forEach((keys) => {
        if (body.match(labels_regex.add[keys])) {
          labelToAdd.push(keys);
        }
      });
      Object.keys(labels_regex.remove).forEach((keys) => {
        if (body.match(labels_regex.remove[keys])) {
          labelToRemove.push(keys);
        }
      });
  }

  // Apply Changes
  if (labelToAdd.length > 0) {
    await api.rest.issues.addLabels({
      owner: owner,
      repo: repo,
      issue_number: pr_number,
      labels: labelToAdd,
    });
  }
  for (let label of labelToRemove) {
    if (labels.includes(label)) {
      await api.rest.issues.removeLabel({
        owner: owner,
        repo: repo,
        issue_number: pr_number,
        name: label,
      });
    }
  }
  return {
    labelToAdd: labelToAdd,
    labelToRemove: labelToRemove,
  };
}

export async function pull_request_target(
  action: string,
  repo: string,
  owner: string,
  pr_number: number,
) {
  const labelToRemove: string[] = [];
  const labelToAdd: string[] = [];
  let labels = (
    await api.rest.issues.listLabelsOnIssue({
      repo: repo,
      owner: owner,
      issue_number: pr_number,
    })
  ).data.map((label) => label.name);
  switch (action) {
    case "synchronize":
      labelToRemove.push("Administrator-Approved");
      labelToRemove.push("Member-Approved");
      labelToAdd.push("Review-Needed");
      break;
    case "opened":
      labelToAdd.push("Review-Needed");
      labelToAdd.push("Needs-Triage");
      break;
    case "closed":
      labelToRemove.push("Needs-Author-Feedback");
      labelToRemove.push("Review-Needed");
      labelToRemove.push("Needs-Triage");
      break;
    case "reopened":
      labelToRemove.push("Needs-Author-Feedback");
      labelToAdd.push("Review-Needed");
      break;
    case "review_requested":
      labelToRemove.push("Review-Needed");
      labelToAdd.push("Needs-Author-Feedback");
      break;
    case "review_request_removed":
      labelToRemove.push("Needs-Author-Feedback");
      break;
    case "edited":
      labelToRemove.push("Needs-Author-Feedback");
      labelToAdd.push("Review-Needed");
      break;
    case "converted_to_draft":
      labelToRemove.push("Needs-Author-Feedback");
      labelToRemove.push("Review-Needed");
      labelToAdd.push("WIP");
      break;
    case "ready_for_review":
      labelToAdd.push("Review-Needed");
      labelToRemove.push("Needs-Author-Feedback");
      labelToRemove.push("WIP");
      break;
    case "auto_merge_enabled":
      labelToRemove.push("Merge-Needed");
      break;
    default:
      break;
  }

  // Apply Changes
  if (labelToAdd.length > 0) {
    await api.rest.issues.addLabels({
      owner: owner,
      repo: repo,
      issue_number: pr_number,
      labels: labelToAdd,
    });
  }
  for (let label of labelToRemove) {
    if (labels.includes(label)) {
      await api.rest.issues.removeLabel({
        owner: owner,
        repo: repo,
        issue_number: pr_number,
        name: label,
      });
    }
  }

  return {
    labelToAdd: labelToAdd,
    labelToRemove: labelToRemove,
  };
}

(async () => {
  const { eventName } = context;
  switch (eventName) {
    case "pull_request_target":
      await pull_request_target(
        context.payload.action,
        context.repo.repo,
        context.repo.owner,
        context.payload.pull_request.number,
      );
      await approved(context.payload.pull_request.number, context.repo.owner, context.repo.repo)
      break;
    case "":
      await pull_request_review_comment(
        context.payload.action,
        context.repo.repo,
        context.repo.owner,
        context.payload.pull_request.number,
        context.payload.comment.id,
      );
  }
})();
