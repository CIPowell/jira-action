const { getTickets } = require('../src/tickets');

describe("Use Octokit to get Jira tickets from ", () => {
    it("Should get the right tickets from the commit", () => {
        const core = {
            setOutput: jest.fn()
        }

        const github = {
            context : {
                payload: {
                    commits: [{
                        message: "CIP-2 Test"
                    }]
                }
            }
        }

        getTickets(core, github);

        expect(core.setOutput).toHaveBeenCalled();
        expect(core.setOutput).toHaveBeenCalledWith('tickets', 'CIP-2');
    });

    it("Should get the right tickets from the commit", () => {
        const core = {
            setOutput: jest.fn()
        }

        const github = {
            context : {
                payload: {
                    commits: [{
                        message: "CIP-2 Test"
                    },{
                        message: "CIP-4 Test"
                    }]
                }
            }
        }

        getTickets(core, github);

        expect(core.setOutput).toHaveBeenCalled();
        expect(core.setOutput).toHaveBeenCalledWith('tickets', 'CIP-2,CIP-4');
    });
});