const { program } = require('commander')
const { default: chalk } = require('chalk')
const log = console.log


async function userActivity(username) {

    try {
        const res = await fetch(`https://api.github.com/users/${username}/events`);
        if (res.status === 404) {
            throw new Error('User Not found')
        }
        if (res.status === 403) {
            throw new Error("API rate limit exceeded. Try again later.");
        }
        if (!res.ok) {
            throw new Error('GITHUB api error')
        }
        const data = await res.json();
        return data
    } catch (error) {
        throw new Error(error.message || 'Network Error')
    }
}

program
    .command('github-activity <username>')
    .description("Gives user's GitHub Activity")
    .action(async (username) => {
        try {
            const activity = await userActivity(username);
            if (typeof activity === "string") {
                console.log("Error:", activity);
                return;
            }
            if (!activity.length) {
                log(chalk.yellow("No recent activity found."));
                return;
            }
            log(chalk.green('--------------------------------------------------- GETING USER ACTIVITY ------------------------------------'))
            activity.forEach(event => {
                log(`-${chalk.green(event.type)} at ${chalk.blue(event.repo?.name || 'UnKnown Repo')}\n-description: ${chalk.grey(event.payload?.description || 'No description')}\n-createdAt :${chalk.cyan(event.created_at)}`);
            })

            log(chalk.green('--------------------------------------------------- ENDING USER ACTIVITY ------------------------------------'))
        } catch (error) {
            log(chalk.red("Error:"), chalk.red(error.message));
        }
    });

program.parse(process.argv);