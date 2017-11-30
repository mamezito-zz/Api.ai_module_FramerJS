# Api.ai_module_FramerJS
module that connects framerjs and api.ai via ajax


Api.ai lets you build brand-unique, natural language interactions
for bots, applications, services, and devices. You can use it for chatbots, wearables, apps, automotives, smarthomes. Currently has integrations with facebook, telegram,slack, and actions on google and many more.

FramerJS module allows you to send text string to your aggents in APIAI and run callback function with response data.
So its ideal if you are prototyping something like facebook messenger bot or google home.

More info on api.ai query - https://docs.api.ai/docs/query


here is basic usage of the module - https://framer.cloud/smEcy


[![Install with Framer Modules](https://www.framermodules.com/assets/badge.png)](https://open.framermodules.com/api_ai-framer)

or add it manually

```
api_ai = require 'apiai'
#change token to your token here
token = "######"
# your api.ai token here

string="how are you?"

#session number, must be unique per session, if u plan to use intents in api.ai
session=Utils.randomNumber(0, 100000)



printfunc=(data)->
	#data - is JSON response we get from apiai when we send string of text, you can check structure of response here -https://docs.api.ai/docs/query#response
	#resolvedQuery is our string, speech - is the answer from the bot in api.ai
	print data.result.resolvedQuery, data.result.speech



#we are calling send function from module with following properties
#string of text(query)
#callback function - in our case printfunc, but can be any of your functions with data as property
#token - you client token for your api.ai project
#session - random number generated per session

api_ai.send string,printfunc, token,session
```

example of https://github.com/mamezito/FramerMessengerChatBot used with api.ai pizza delivery sample https://framer.cloud/DlOZG


google home sample with speech recognition on framer end and chat mechanics on apiai side (chrome only) -
https://framer.cloud/H1B-q_dNe (little buggy when google home has long responses:)
This prototypes uses predefined domains from apiai called small talk - https://docs.api.ai/docs/small-talk#reference
