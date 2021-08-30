# CI/CD Setup

These were the steps taken to set up the Continuous Integration/Continuous Deployment (CI/CD) for this project.

## Heroku

Currently the CI/CD of this project is managed via [Heroku](https://www.heroku.com/).

Steps taken via the Heroku CLI:

- Install the Heroku CLI.
- (Following this guide to use [Heroku + Docker + Review Apps](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml).)
- Create a heroku.yml file
- Set heroku as the remote with `heroku git:remote -a <your heroku app name>` (Check app name with `heroku apps`).
- Push your file to `git push heroku main` 

