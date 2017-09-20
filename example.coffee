#change token to your token here
token = "9973f0c5fc2d4f6f90243d51d73c3294"

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
