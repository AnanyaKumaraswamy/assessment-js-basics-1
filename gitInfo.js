/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a version control system that allows individuals and teams to track changes to code projects.Prevents bugs and loss of progress and allows us to view the long history of a project in snapshots.";
console.log('Git:', gitDefinition);
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.";
console.log('Git Hub:', gitHubDefinition);
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "The git init command creates a new Git repository. It can be used to convert an existing project to a Git repository or initialize a new, empty repository.";
console.log('Git-init:', gitInitDefinition);
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition ="The git clone is primarily used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location."
console.log('Git-clone:', gitCloneDefinition);
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition ="The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git."
console.log('Git-status:', gitStatusDefinition);
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition ="The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit."
console.log('Git-add:', gitAddDefinition);

let gitAddCode = "git add ."
console.log('Code to add all files: ', gitAddCode);
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition ="The git commit command creates a commit, which is like a snapshot of your repository. These commits are snapshots of your entire repository at specific times. "
console.log('Git-commit:', gitCommitDefinition);

let gitCommitCode = "git commit -am 'initial commit' "
console.log('Code to commit: ', gitCommitCode);

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition ="The git push command is used to upload local repository content to a remote repository."
console.log('Git-push:', gitPushDefinition);
