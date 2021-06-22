import { PR_TYPES } from "./constants.ts"

export const createPRBody = async (
  prTitle: string,
  ticketNumber: string,
  prDescription: string,
) => {
  let prBody = "Addresses []"

  try {
    prBody = await Deno.readTextFile("./docs/pull_request_template.md")
    console.log("Detected pull request template.")
  } catch {
    console.log("No pull request template detected.")
  }

  prBody = prBody.replace("[]", `[${ticketNumber}]`)
  const type = prTitle.split(":")[0]

  if (type && !type.includes(" ")) {
    prBody = prBody.replace("**TYPE**", PR_TYPES[type] || type)
  }

  if (prDescription) {
    if (prBody.includes("<!-- Implementation description -->")) {
      prBody = prBody.replace("<!-- Implementation description -->", prDescription)
    } else {
      prBody += "\n\n" + prDescription
    }
  }

  return prBody
}
