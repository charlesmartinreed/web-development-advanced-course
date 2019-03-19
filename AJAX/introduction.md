Asynchronous Javascript and XML
Not a lot of use with XML these days

AJAX is NOT a library, framework OR technology
AJAX IS an approach for building websites; think of it as a design principle

Around 2005, HTML, JS, The DOM and CSS and XMLHTTPRequests began to be  combined by developers in order to allow us to develop web apps in the browser that didn't require a refresh. This is the sort of revolution that gave us stuff like Google Maps and GMail.

With AJAX, websites can send and request data from a server in the background, without disturbing the current page. This is the foundation for today's single page apps.

Here's an example of the workflow, using a endlessly scrolling site like Pinterest:
"User scrolled to the bottom" -> "Send a request to the server to get more content!" -> Server sends back the new content -> Data is appended to the bottom of the page using HTML/JS, etc.

// How do we make these requests?
1. XMLHTTPRequests (the old school way)
2. Fetch API (new school way, not widely supported yet)
3. 3rd Party Libraries like jQuery, Axios, etc.
