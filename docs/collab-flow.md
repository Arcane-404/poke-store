# Collab Flow

## PART 1

1. go to terminal (in project)
2. `git checkout -b [branch-name]`
3. `git add .` > `git commit -m ""` > `git push origin [branch-name]`
   - for commit messages, use action notes. quick & readable
   - e.g. "[ past action ] topic" === "created file and folder structure"
4. `git checkout master/main` > `git branch -D [branch-name]`

## PART 2

1. go to github > create `pull-request`
   - dev role has been completed
   - test role will review & merge
2. you `send message to team member`
   - go to sidebar > click `Reviewers ⚙` > select reviewer
   - copy URL link
   - send `@name + message + URL` in messages
   - DONE
3. [check workflow (During)](#daily-workflow)

## PART 3

1. they `respond to message`
   - [ EDIT ]
   - they will response back `@name + message` in messages
   - DONE
2. update code from master/main
   - go to terminal > `npm run update`
3. create new branch
   - [repeat PART 1](#part-1)

## Daily Workflow

- **nights**: save code
  - `git add .` > `git commit -m ""` for any work that got done
  - `git push origin [branch-name]` when you are finished on a task
- **mornings**: `npm run update`
  - `git pull` for any new updates from the project's codebase
  - `npm install` for any new packages to install
- **during**: additional workflow
  - open `Trello`
    - add member (you) to card from `Task List`
    - then move card to `In-Progress`
    - if task is done, move card to `Done`

## Misc

- GitHub Pull Request Color Key
  - **green**: able to merge
  - **purple**: updated merge
  - **gray**: merge conflict
- Handling Git Conflicts
  - message reviewer to meet up & resolve problem together
  - [ EDIT ]
- the only manual thing to do...
   - you send a message for a tester to review
   - they will then check, approve, & merge your code
     - then reply back to you that updates are merged