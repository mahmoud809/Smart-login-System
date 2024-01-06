  <h1>Registration System</h1>

  <p>A simple registration system implemented using HTML, CSS, Bootstrap, Font Awesome, and JavaScript.</p>

  <h2>Description</h2>

  <p>This project provides a user-friendly registration interface with basic validation for the user's name, email, and password. It utilizes Bootstrap for styling, Font Awesome for icons, and JavaScript for form validation. The registration form includes the following fields:</p>

  <ul>
      <li>Name: Should start with an uppercase letter and be at least 3 characters long.</li>
      <li>Email: Should be a valid email address format (e.g., example@gmail.com).</li>
      <li>Password: Should contain at least one letter (uppercase or lowercase), one digit, and be at least 8 characters long.</li>
  </ul>

  <p>Upon successful registration, a success message is displayed, and in case of failure or an existing email, appropriate error messages are shown.</p>

  <h2>Features</h2>

  <ul>
      <li>Responsive design using Bootstrap.</li>
      <li>Input validation for name, email, and password.</li>
      <li>Informative error messages for better user feedback.</li>
      <li>Success and failure pop-ups for registration feedback.</li>
  </ul>

  <h2>Getting Started</h2>

  <ol>
      <li>Clone the repository:</li>
      <li>Open the <code>index.html</code> file in your web browser.</li>
      <li>Explore the registration system and try out the features.</li>
  </ol>

  <h2>Dependencies</h2>

  <ul>
      <li>Bootstrap v5.0.0: <a href="https://getbootstrap.com/">Bootstrap</a></li>
      <li>Font Awesome v6.0.0: <a href="https://fontawesome.com/">Font Awesome</a></li>
      <li>jQuery v3.6.0: Included with Bootstrap bundle</li>
      <li>Popper.js v2.9.0: Included with Bootstrap bundle</li>
  </ul>

  <h2>JavaScript (main.js)</h2>

  <p>This JavaScript file (<code>main.js</code>) is responsible for handling user input validation and registration functionality in the Registration System project. It includes the following features:</p>

  <h3>Input Validation</h3>

  <ul>
      <li><strong>Name Validation:</strong> Ensures the name starts with an uppercase letter and is at least 3 characters long.</li>
      <li><strong>Email Validation:</strong> Checks for a valid email format (e.g., example@gmail.com).</li>
      <li><strong>Password Validation:</strong> Requires at least one letter (uppercase or lowercase), one digit, and a minimum length of 8 characters.</li>
  </ul>

  <h3>Event Listeners</h3>

  <ul>
      <li><strong>Blur Events:</strong> Listens for blur events on the name, email, and password input fields to trigger validation and display appropriate feedback.</li>
  </ul>

  <h3>User Registration</h3>

  <ul>
      <li><strong>Checking Email Existence:</strong> Verifies if the entered email already exists in the system.</li>
      <li><strong>Success and Failure Layers:</strong> Displays success and failure pop-ups based on the registration outcome.</li>
      <li><strong>Redirect to Home:</strong> Redirects the user to the home page upon successful registration.</li>
  </ul>

  <h3>Local Storage Interaction</h3>

  <ul>
      <li><strong>User Data Storage:</strong> Stores user data (name, email, password) in the browser's local storage.</li>
      <li><strong>Checking Existing Users:</strong> Retrieves existing users from local storage and checks if the entered email already exists.</li>
  </ul>

  <h2>How to Contribute</h2>

  <p>Feel free to contribute to the improvement of this project. If you have any suggestions, bug reports, or feature requests, create an issue or submit a pull request.</p>

  <p>Made with ❤ </p>
  <p>Mahmoud Salah</p>
