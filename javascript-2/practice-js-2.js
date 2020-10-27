/*
    For this section of the skills check you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = 'Git is a version control system used to track the progress of our projects. It allows us to commit changes at various points in the development process.';

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = 'GitHub is the website where our git repositories are stored.';

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (What you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {
    description: `'git init' initializes git in your current repository. This means that git will start watching all of the files and directories in that location.`,
    code: 'git init',
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = {
    description: `'git clone' easily makes copies of existing repositories on GitHub.`,
    code: `git clone "url for github repo"`,
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = {
    description: `'git status' is the command you can run to check what stage of the process you are on to push your code to github.`,
    code: 'git status',
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {
    description: `'git add' tells git to track any changes that have been made. This is the command you can run to start the process of pushing your code to github.`,
    code: 'git add .',
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {
    description: `'git commit' will move our files from the staging area to the git repository.`,
    code: `git commit -m "message"`,
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

let addRemote = {
    description: `'git remote add' creates a new connection to a remote repo. After adding a remote,
    you can use <name> as a shortcut for <url> in other commands.`,
    code: 'git remote add origin',
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {
    description: `'git push' command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.`,
    code: 'git push origin master',
}
