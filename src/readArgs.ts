import { promptString } from "./utils.ts"

export const readArgs = async () => {
  const args = [...Deno.args]

  let ticketUrl

  if (args.findIndex(e => e.includes("-")) !== -1) {
    ticketUrl = args.splice(
      args.findIndex(e => e.includes("-")),
      1,
    )[0]
  }

  if (!ticketUrl) ticketUrl = (await promptString("Ticket: ")) || ""

  const ticketNumber = (ticketUrl.split("/").pop() as string).toUpperCase()

  let prTitle = args.join(" ")

  if (!prTitle) prTitle = (await promptString("PR title: ")) || ""

  const prDescription = (await promptString("PR description: ")) || ""

  return { ticketNumber, prTitle, prDescription }
}
