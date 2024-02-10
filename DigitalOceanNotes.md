## Digital Ocean Configuration Adjustments - App Container
---
_My notes on converting our hugo project to be automatically detected by Digital Ocean (DO), so we can develop the hugo app either on DO or Netlify, as we choose_

### Steps Taken
1. Match DO example app:
   1. remove netlify.toml
   2. add folder for hugo layouts
   3. remove excess site implementations _(DO keeps seeing as Nodejs Webservice app)_
   4. add `.do` folder with basic build commands