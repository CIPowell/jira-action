export const getTickets = (core: any, { context }: { context: any }) => {
  const payload = context.payload;

  const tickets = payload.commits
    .map(({ message }: { message: string }) => [
      ...message.matchAll(/[A-Z0-9]+-[0-9]+/gi),
    ])
    .reduce((acc: string[], val: string[]) => acc.concat(val), [])
    .join(",");

  core.setOutput("tickets", tickets);
};
