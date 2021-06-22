import { createBranchName } from "./createBranchName.ts"
import { createPRBody } from "./createPRBody.ts"
import { executeCommands } from "./executeCommands.ts"
import { printOverview } from "./printOverview.ts"
import { readArgs } from "./readArgs.ts"
import { BRANCH_PREFIX } from "./constants.ts"

const main = async () => {
  const { ticketNumber, prTitle, prDescription } = await readArgs()

  const branchName = createBranchName(BRANCH_PREFIX, ticketNumber, prTitle)

  const prBody = await createPRBody(prTitle, ticketNumber, prDescription)

  await printOverview(prTitle, branchName, prDescription)

  await executeCommands(prTitle, branchName, prBody)
}

export default main
