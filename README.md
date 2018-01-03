# Pet-Finder

Created a folder called Friend-Finder. 

File structure for the app: 
	- Created 3 folders data, public and routes
	- Inside data - created a friends.js
	- Inside public folder created the home.html and suvery.html files, and an assets folder for CSS and Javascript files 
	- Inside the routes folder included the api and html js files 

home html file 
_____________________________

	* The home html has a jumbtron header with a link button to survey html 

survey html file 
_____________________________

	* The survey html requires name and photo and 10 questions, on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

server javascript file 
_____________________________
	
	* The server js requires the basic npm packages 'express', 'body-parser' and 'path' and sets up the local host. 



friends javascript file 
_____________________________


	* An array of objects to match against new incoming survey. 

api routes javascrips file
_____________________________


 	* A POST route `/api/friends`. This will be used to handle incoming survey results.
	* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
	* The match logic is calculated by comparing scores for each question in the array (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`) against all possible friends using Math.ab 
	* The result displays as a modal pop-up including name and photo of the the closest match. 

html routes javascript file 
______________________________

* A GET Route to  survey html which displays the survey page.
* A default, catch-all route that leads to `home.html` which displays the home page. 



- - -
