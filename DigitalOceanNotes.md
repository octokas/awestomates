## Digital Ocean Configuration Adjustments - App Container
---
_My notes on converting our hugo project to be automatically detected by Digital Ocean (DO), so we can develop the hugo app either on DO or Netlify, as we choose_

### Steps Taken
1. Match DO example app:
   1. remove netlify.toml
   2. add folder for hugo layouts
   3. remove excess site implementations _(DO keeps seeing as Nodejs Webservice app)_
   4. add `.do` folder with basic build commands
   5. adjust config.toml to remove netlify settings AND re-order config settings to match DO template

#### Progress Note
> App Platform looks for any of the following to detect a Hugo application:
>   config.toml
>   config.yaml
>   config.json
> If this is the case, then why isn't it automatically detecting it's a hugo site?

_Because all of the settings should now be complimentary, the only thought I have is that since it's not the "main" branch and it's actually cueing off the "main" branch, I need to try re-forking this branch as a new repository just for DO, and try it that way._