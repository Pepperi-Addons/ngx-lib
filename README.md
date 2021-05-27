**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).

## Versioning
This repo follows sematic versioning. See https://semver.org/.

Given a version number **MAJOR**.**MINOR**.**PATCH**, increment the:

**MAJOR** version when you make incompatible API changes

**MINOR** version when you add functionality in a backwards compatible manner

**PATCH** version when you make backwards compatible bug fixes.

## Contributing
Contributions to this package are encouraged strongly.

To contribute commit your changes to a seperate branch, and then create a PR at https://github.com/pepperi-addons/ngx-lib.

Before submitting your PR make sure:
- That your branch compiles `npm run compile`
- That your branch follows this repo's linting guides `npm run lint`
  You can fix most linting issues by running `npm run lint-fix`. Make sure that these scripts do not return an error or warning.
- That you increment the version number for your changes to be published, according to the specfications above.

To increment the package version:

Run `npm version patch` to increment a patch.

Run `npm version minor` to increment a minor.

Run `npm version major` to increment a major. You probably shouldn't do this if you are not sure.

Every PR must be approved by at least one other person before it can be merged in to the master.
When you create or update a PR, there are GitHub Actions that will verify that your PR complies to the above.
Once the PR is merged into master, a GitHub Action will publish the new version to the npm registry.
If you do not increment the version number. This script will fail.