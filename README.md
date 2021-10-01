# FE21-CR03-Philip
Requirements:
Create a restaurant website where the menu is clearly visible on the landing page.
In your console, you will be showing the results of some Javascript functions, as mentioned in the requirements below.  
- Correct usage of the HTML structure (proper order of HTML elements).
- Correct code structure (aka code indentation) for the HTML and Javascript code.
- Clear separation of CSS, JavaScript and images in distinct folders: css, js, img (access through relative paths).
- Correct CSS layout according to the provided design. There should be a header, a restaurant image (hero image), 4 subsections (starters, main dishes, desserts and beverages) and a footer. Feel free to improve and expand the design. Each dish must display a name, description and price, beverages only need to display their name and price. 
- The page must be responsive, i.e. the proportions should be similar on all screens. Use responsive measurements (no pixels).
- The subsections should be 4 in a row on larger screens, 2 in a row on medium screens and 1 in a row on small/extra small screens. You are free to use either Bootstrap or implement Media Queries/FlexGrid/FlexBox to achieve this. 

- Create the function calculateInvoice() in Javascript that returns the invoice for one customer (how much they spent). The parameters of the function should be starterPrice, maindishPrice, dessertPrice and beveragePrice. The function will return the sum of these four parameters.
- Use the prices on your menu to create four variables that you will pass to the function calculateInvoice() as arguments. Print the result on the console. Note: You should do it manually since we didn't learn how to take values from html elements yet.
- Calculate at least 3 invoices using combinations of different dishes on your menu and print them on the console (using one dish of each category).

Bonus Points:
- Create a function studentInvoice() that will apply a 10% discount to the final invoice. This function should have the same parameters as the function calculateInvoice(). This discount applies to the dishes but NOT the beverages. Print 3 examples of studentInvoice() on the console.
- Create a review page where the user can view customer reviews of the restaurant. The design should compliment the index page. This page must be accessible from the index page (e.g through the navbar or footer).

