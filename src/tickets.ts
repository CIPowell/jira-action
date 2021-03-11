export const getTickets = ({ context }: { context: any }): string[] => {
  return context.payload.commits
    .map(({ message }: { message: string }) => [
      ...message.matchAll(/[A-Z0-9]+-[0-9]+/gi),
    ])
    .reduce((acc: string[], val: string[]) => acc.concat(val[0]), []);
};
