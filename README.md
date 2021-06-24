<br />

<h1 align="center">
<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><mask id="mask__bauhaus" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><rect width="80" height="80" rx="160" fill="white"></rect></mask><g mask="url(#mask__bauhaus)"><rect width="80" height="80" fill="#edb92e"></rect><rect x="10" y="30" width="80" height="10" fill="#f85931" transform="translate(-18 18) rotate(182 40 40)"></rect><circle cx="40" cy="40" fill="#ce1836" r="16" transform="translate(0 0)"></circle><line x1="0" y1="40" x2="80" y2="40" stroke-width="2" stroke="#166a60" transform="translate(-4 -4) rotate(4 40 40)"></line></g></svg>
<br />
  Create Pull Request
  <br />
</h1>
<h3 align="center">
  A tool to create Pull Requests from current changes.
</h3>
<br />

### Features

- Creates the branch `PREFIX/JIRA_TICKET_NUMBER/your-commit-message`
- Commits all changes
- Creates a Pull Request
- Adds the jira ticket number and PR description to the PR body (using the repository's PR template if it exists)
- Opens the PR in the browser

### Setup

- Make sure [Deno](https://deno.land/manual/getting_started/installation) and [GitHub CLI](https://github.com/cli/cli) are installed.
- Adjust [constants.ts](src/constants.ts)
- Run `make compile` to create a self-contained executable.
- Copy executable with `cp cpr /usr/local/bin/cpr`

### Usage

```
Usage:
  $ cpr <PR TITLE> [options]

Options:
  -t, --ticket <ticket>            Provide a ticket number or url 
  -d, --description <description>  Provide a PR description 
  -h, --help                       Display this message 
```

### Examples

```
cpr feature: my new cool feature -t CX-1234 -d "My PR Descryption"
cpr feature: my new cool feature -t https://artsyproduct.atlassian.net/browse/CX-1234
```

which will create the following Pull Request:

```
PR Title: feature: my new cool feature
PR Description: My PR Description
Branch Name: ${YOUR_PREFIX}/CX-1234/my-new-cool-feature
Included Files:
my-file.txt
```

### Development

- `make run`:      executes `index.ts`
- `make test`:     runs tests
- `make format`:   formats all files
- `make debug`:    runs the debugger starting in `index.ts`
- `make bundle`:   bundles into a single file `build/index`
- `make compile`:  compiles to executable
