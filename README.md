Our company is focused on building websites based on renowned brands. Currently, we are in search of a MERN Stack developer to develop our upcoming brand-new website.

🚩 Update in requirements

Check requirements 5,6,11
You can load brand names in home page from database / you can create fakedata & load from json.
🧮 Website Theme:
Here, we have provided you a list of 7 different types of categories to build your brand-based website. You are required to select a single category from the following list to build your website. Your website cannot have more than one category type. For instance, if you choose Technology and Electronics, your website will have products related to Technology and Electronics only; ❌ you cannot add other products❌ related to Fashion and Apparel, Food and Beverage, etc.

Category 1: Technology and Electronics

Example: Apple, Samsung, Sony, Google, Intel, etc.
Category 2: Automotive

Example: Toyota, Ford, BMW, Mercedes-Benz, Tesla, Honda, etc.
Category 3: Fashion and Apparel

Example: Nike, Adidas, Gucci, Zara, H&M, Levi's, etc.
Category 4: Food and Beverage

Example: Coca-Cola, McDonald's, Starbucks, PepsiCo, Nestlé, Kellogg's, etc.
Category 5: Retail and E-commerce

Example: Amazon, Walmart, Alibaba, eBay, Target, Best Buy etc.
Category 6: Entertainment and Media

Example: Disney, Netflix, Warner Bros., Sony Pictures, Spotify, Time Warner, etc.
Category 7: Cosmetics and Beauty

Example: L'Oréal, Estée Lauder, Chanel, Dior, Urban Decay, Procter & Gamble, Revlon, Avon, Coty, etc.
✍️ Main Requirements
Make sure your design and website idea is unique. First, finalize your idea (what type of website you want to build). Then google the site design or visit themeforest to get your website idea. You can visit this blog to collect free resources for your website. However, your website ❌ can not be related to your previous assignments or any demo project displayed in the course or in our conceptual sessions ❌.

Home page will have a navbar, banner, footer and at least 6 types of brand names having the following information: brand imageand brand name.

The navbar will have website name with logo, Home, Add Product, My Cart, and Login.

Add two extra sections in the home page in addition to the 4 sections mentioned above.

Create an Add Product page where there will be a form for the user to add a product. The form will have:

Image
Name
Brand Name
Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
Price
Short description
Rating
Add button
This will be a private/protected route.

On clicking a brand will redirect the user to the page having products based on that brand. On that page, there will be a slider having at least 3 advertisement images and at least 4 products. Each product will have:

Image
Name
Band Name
Type (If you choose Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
Price
Rating
Details button
Update button
Note: Among these six brand types, one of them will not have any available products. You will have to show a relevant message on brand page to inform the users.

Clicking on the Details button will take the user to the product detail route. Each route should display detailed information of the product. What you will include in the detailed information is entirely upto you but make sure it is relevant. Make sure to implement the Add to Cart button.

The product detail route will be a private/protected route. Please make sure that if the user is not logged in, the private route redirects to the login page.

Clicking the Add to Cart button will store your product information in to the database. Inform the user with a success message using a toast/alert. Do not use the browser alert.

Create a My Cart page where a user will see all his/her added products. If the user wants, he/she can delete a product. The design is up to you. This will be a private/protected route.

Clicking on the Update button will redirect the user to a form page where the form will have:

Image
Name
Brand Name
Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
Price
Rating
Submit button
This will be a private/protected route.

You Must implement Email and password based Authentication. This means, you will have to implement the Registration and the login page. Users should be able to toggle between Login and Registration view .

⚠️ Note: Do not enforce forget or reset password feature and the email verification method, as it will inconvenience the examiner. If you want, you can add email verification/forget the password after receiving the assignment result.

On the Registration page, display errors when:

 The password

 - is less than 6 characters
 - don't have a capital letter
 - don't have a special character
On the Login page, display errors when:

- password doesn't match
- email doesn't match
You can take the error message from firebase. You can show the error below the input fields or via alert/toast. If you use alert/toast, do not implement the browser alert.
Also, implement at least one extra login which could be (facebook, github, google, etc).

Once logged in, the user name, profile picture and the logout button should appear on the navbar. If the user clicks on the logout button, make sure to log him/her out.

Add a 404 page (not found page)

🎁 Bonus Requirements:
Commits & readme:

Minimum 10 meaningful git commits on the client-side repository.
Minimum 5 meaningful commits on the server-side repository.
Create a readme for client-side and write about your project (at least 5 bullet points). ** Remember to add your client-side live link to your website here.**
After reloading the page of a private route, the user should not be redirected to the login page.

Make the website responsive. Make sure the site looks different on desktop and mobile responsive. Tablet responsive is optional

Implementing a dark/light theme toggle for the home page. It's optional to implement the theme toggle for the entire website.

📜 Additional information:
You cannot load the data from a .json file. The data must be stored in the database and you must all the data from the database.
You can use a local or host image anywhere or use pictures from the internet. And it's ok if you have the image url, but the image link doesn't work.
You can use vanilla CSS or any CSS library.
Try to host your site on Firebase (Netlify hosting will need some extra configurations)
Host your server-side application on Vercel. If needed, you can host somewhere else as well.
Make Sure you deploy server-side and client-side on the first day. If you have any issues with hosting or GitHub push, please join the "Github and deploy" related support session.
