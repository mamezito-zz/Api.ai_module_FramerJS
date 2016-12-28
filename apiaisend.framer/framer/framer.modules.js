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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvYXBpYWkuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIG1vZHVsZSBjb25uZWN0aW5nIGZyYW1lckpTIGFuZCBhcGkuYWlcbiMgd3JpdHRlbiBieSBTZXJnaXkgVm9yb25vdiB0d2l0dGVyLmNvbS9tYW1leml0b1xuXG5leHBvcnRzLnNlbmQgPSh0ZXh0LGNhbGxiYWNrLCB0b2tlbiwgc2Vzc2lvbiktPlxuXHR4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Rcblx0eGhyLm9wZW4gJ1BPU1QnLCBcImh0dHBzOi8vYXBpLmFwaS5haS92MS9xdWVyeVwiLCB0cnVlXG5cdHhoci5zZXRSZXF1ZXN0SGVhZGVyICdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbidcblx0eGhyLnNldFJlcXVlc3RIZWFkZXIgJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlblxuXHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gLT5cblxuXHRcdGlmIHhoci5yZWFkeVN0YXRlID09IDQgYW5kIHhoci5zdGF0dXMgPT0gMjAwXG5cdFx0XHRjYWxsYmFjayBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpXG5cdFx0cmV0dXJuXG5cblx0ZGF0YSA9IEpTT04uc3RyaW5naWZ5KFxuXHRcdHF1ZXJ5OiB0ZXh0XG5cdFx0bGFuZzogJ2VuJ1xuXHRcdHNlc3Npb25JZDogc2Vzc2lvbilcblx0eGhyLnNlbmQgZGF0YVxuXHRyZXR1cm5cbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBO0FER0E7QUFDQztBQUFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBZmM7OzsifQ==
