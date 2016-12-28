
#framer info
Framer.Info =
	title: "Pizza hut facebook messenger bot"
	description: "api.ai module, ios kit module, fb messenger bot module"
	author: "Sergey Voronov"
	twitter: "mamezito"

#modules
chatBot = require "chatBot"
api_ai = require 'apiai'
#change token to your token here
token = "e0da974e397747a58fbd7683013cbf8f"
session=Utils.randomNumber(0, 100000)

#initial settings
botName="Pizza Hut"
botImage="https://qph.ec.quoracdn.net/main-qimg-71867419a7825d58bdbb7b2a1b4605cd-c?convert_to_webp=true"
likes="282k people like this"
botCategory="Food delivery"
user="Sergiy"

chatBot.createMessenger(botName,botImage,likes,botCategory,user)


 #callback function that uses response from api.ai
sendfunc=(data)->	
	msg=new chatBot.Message
			type:"botMsg"
			#data is whole JSON response from apiai, but we are just using the text string which sits in result.speech
			#more on the json response in api.ai here- https://docs.api.ai/docs/query#response

			text:data.result.speech
			print data


#bot logic
#function checking for user input
window["userInput"]=(input)->
	#we are sending users input as string to api.ai
	#using sendfunc as callback when response with data is ready
	api_ai.send input,sendfunc, token, session