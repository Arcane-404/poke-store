# Collab Flow

## PART 1

1. go to terminal (in project)
2. `git checkout -b [branch-name]`
3. `git add .` > `git commit -m ""` > `git push origin [branch-name]`
   - for commit messages, use action notes. quick & readable
   - e.g. "[ past action ] topic" === "created file and folder structure"
4. `git checkout master/main` > `git branch -D [branch-name]`

## PART 2

1. go to GitHub > click `compare & pull request` 
   - view sidebar > click `Reviewers ⚙` > select reviewer
   - click `create pull request`
2. you `send message` to a team member
   - copy URL link (from address bar)
   - send `@name + message + URL` in messages
   - DONE
3. [check workflow (During)](#daily-workflow)

## PART 3

1. they review code from `pull request` in GitHub
   - open link > click `add your review`
   - select `review changes` > add `comment & approve` > click `submit review`
2. they merge code in GitHub
   - click `merge pull request` > click `confirm merge` > delete `branch`
3. they `respond to message` back to the team member
   - they will response `@name + message` in messages
   - DONE
4. update code from master/main
   - go to terminal > `npm run update`
5. create new branch
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
- Handling Git Conflicts...
  - message reviewer to meet up & resolve problem together
- the only manual work to do...
   - dev role will be completed after sending `pull request`
   - test role will `review & merge` upcoming code