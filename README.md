# PR Tool

Creates a Pull Request from your current changes with just one command:

- Creates a new branch (PREFIX/TICKET_NUMBER/your-commit-message)
- Commits all changes
- Creates a Pull Request
- Adds the ticket number and PR description to the PR body (using the repository's PR template if it exists)
- Opens the PR in the browser

## Setup

- Make sure [Deno](https://deno.land/manual/getting_started/installation), [bit](https://github.com/teambit/bit) and [GitHub CLI](https://github.com/cli/cli) are installed.
- Adjust [constants.ts](src/constants.ts)
- Run `make compile` to create a self-contained executable.
- Copy executable with `cp pr-tool /usr/local/bin/create-pr`

## Usage

You can either pass the PR title and the jira ticket as arguments

```
create-pr feature: my new cool feature CX-1234
create-pr https://artsyproduct.atlassian.net/browse/CX-1234 feature: my new cool feature 
```

which will create the following PR

```
PR Title: feature: my new cool feature
PR Description: My Description
Branch Name: ${YOUR_PREFIX}/CX-1234/my-new-cool-feature
Included Files:
my-file.txt
```

or just enter

```
create-pr
```

## Development

- `make run`:      executes `index.ts`
- `make test`:     runs tests
- `make format`:   formats all files
- `make debug`:    runs the debugger starting in `index.ts`
- `make bundle`:   bundles into a single file `build/index`
- `make compile`:  compiles to executable
