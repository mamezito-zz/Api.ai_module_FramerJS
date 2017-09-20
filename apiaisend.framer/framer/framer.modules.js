require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"apiai":[function(require,module,exports){
exports.send = function(text, callback, token, session) {
  var data, xhr;
  xhr = new XMLHttpRequest;
  xhr.open('POST', "https://api.api.ai/v1/query", true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  data = JSON.stringify({
    query: text,
    lang: 'en',
    sessionId: session
  });
  xhr.send(data);
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL21hbWV6aXRvL2RldmVsb3BtZW50L2dpdGh1Yi9BcGkuYWlfbW9kdWxlX0ZyYW1lckpTL2FwaWFpc2VuZC5mcmFtZXIvbW9kdWxlcy9hcGlhaS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgbW9kdWxlIGNvbm5lY3RpbmcgZnJhbWVySlMgYW5kIGFwaS5haVxuIyB3cml0dGVuIGJ5IFNlcmdpeSBWb3Jvbm92IHR3aXR0ZXIuY29tL21hbWV6aXRvXG5cbmV4cG9ydHMuc2VuZCA9KHRleHQsY2FsbGJhY2ssIHRva2VuLCBzZXNzaW9uKS0+XG5cdHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdFxuXHR4aHIub3BlbiAnUE9TVCcsIFwiaHR0cHM6Ly9hcGkuYXBpLmFpL3YxL3F1ZXJ5XCIsIHRydWVcblx0eGhyLnNldFJlcXVlc3RIZWFkZXIgJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJ1xuXHR4aHIuc2V0UmVxdWVzdEhlYWRlciAnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuXG5cdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAtPlxuXG5cdFx0aWYgeGhyLnJlYWR5U3RhdGUgPT0gNCBhbmQgeGhyLnN0YXR1cyA9PSAyMDBcblx0XHRcdGNhbGxiYWNrIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dClcblx0XHRyZXR1cm5cblxuXHRkYXRhID0gSlNPTi5zdHJpbmdpZnkoXG5cdFx0cXVlcnk6IHRleHRcblx0XHRsYW5nOiAnZW4nXG5cdFx0c2Vzc2lvbklkOiBzZXNzaW9uKVxuXHR4aHIuc2VuZCBkYXRhXG5cdHJldHVyblxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUE7QURHQSxPQUFPLENBQUMsSUFBUixHQUFjLFNBQUMsSUFBRCxFQUFNLFFBQU4sRUFBZ0IsS0FBaEIsRUFBdUIsT0FBdkI7QUFDYixNQUFBO0VBQUEsR0FBQSxHQUFNLElBQUk7RUFDVixHQUFHLENBQUMsSUFBSixDQUFTLE1BQVQsRUFBaUIsNkJBQWpCLEVBQWdELElBQWhEO0VBQ0EsR0FBRyxDQUFDLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLGtCQUFyQztFQUNBLEdBQUcsQ0FBQyxnQkFBSixDQUFxQixlQUFyQixFQUFzQyxTQUFBLEdBQVksS0FBbEQ7RUFDQSxHQUFHLENBQUMsa0JBQUosR0FBeUIsU0FBQTtJQUV4QixJQUFHLEdBQUcsQ0FBQyxVQUFKLEtBQWtCLENBQWxCLElBQXdCLEdBQUcsQ0FBQyxNQUFKLEtBQWMsR0FBekM7TUFDQyxRQUFBLENBQVMsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFHLENBQUMsWUFBZixDQUFULEVBREQ7O0VBRndCO0VBTXpCLElBQUEsR0FBTyxJQUFJLENBQUMsU0FBTCxDQUNOO0lBQUEsS0FBQSxFQUFPLElBQVA7SUFDQSxJQUFBLEVBQU0sSUFETjtJQUVBLFNBQUEsRUFBVyxPQUZYO0dBRE07RUFJUCxHQUFHLENBQUMsSUFBSixDQUFTLElBQVQ7QUFmYSJ9
