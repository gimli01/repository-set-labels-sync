const core = require("@actions/core");
const wait = require("./wait");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const labelsPath = core.getInput("labelsPath");
    const octokitToken = core.getInput("token");

    core.debug(new Date().toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    await wait(parseInt(ms));
    core.info(new Date().toTimeString());

    core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
