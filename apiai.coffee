# module connecting framerJS and api.ai
# written by Sergiy Voronov twitter.com/mamezito

exports.send =(text,callback, token, session)->
	xhr = new XMLHttpRequest
	xhr.open 'POST', "https://api.api.ai/v1/query", true
	xhr.setRequestHeader 'Content-type', 'application/json'
	xhr.setRequestHeader 'Authorization', 'Bearer ' + token
	xhr.onreadystatechange = ->

		if xhr.readyState == 4 and xhr.status == 200
			callback JSON.parse(xhr.responseText)
		return

	data = JSON.stringify(
		query: text
		lang: 'en'
		sessionId: session)
	xhr.send data
	return
