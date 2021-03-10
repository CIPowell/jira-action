const getTickets = (core, { context }) => {
  const payload = context.payload;

  const tickets = payload.commits
    .map(({ message }) => [...message.matchAll(/[A-Z0-9]+-[0-9]+/gi)])
    .reduce((acc, val) => acc.concat(val), [])
    .join(",");

  core.setOutput("tickets", tickets);
};

module.exports = {
  getTickets
};