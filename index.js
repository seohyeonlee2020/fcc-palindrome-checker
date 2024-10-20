/* Basic reset */
body, h1 {
  margin: 0;
  padding: 0;
}

/* Body styling */
body {
  font-family: 'Arial', sans-serif; /* Clean font */
  background-color: #ffffff; /* White background */
  color: #333; /* Dark text for readability */
  display: flex; /* Flexbox layout */
  flex-direction: column; /* Stack elements */
  align-items: center; /* Center elements horizontally */
  justify-content: center; /* Center elements vertically */
  height: 100vh; /* Full viewport height */
}

/* Heading styling */
h1 {
  margin-bottom: 20px; /* Space below heading */
  font-size: 2rem; /* Font size for heading */
}

/* Input field styling */
input {
  padding: 10px; /* Space inside input */
  border: 1px solid #ccc; /* Light border */
  border-radius: 4px; /* Rounded corners */
  font-size: 1rem; /* Standard font size */
  width: 250px; /* Width of input */
  margin-bottom: 10px; /* Space below input */
  transition: border-color 0.3s; /* Smooth transition for border */
}

/* Input focus effect */
input:focus {
  border-color: #4CAF50; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

/* Button styling */
button {
  padding: 10px; /* Space inside button */
  border: none; /* No border */
  border-radius: 4px; /* Rounded corners */
  background-color: #4CAF50; /* Green background */
  color: white; /* White text */
  font-size: 1rem; /* Standard font size */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for background */
}

/* Button hover effect */
button:hover {
  background-color: #45a049; /* Darker green on hover */
}

/* Result text styling */
#result {
  margin-top: 20px; /* Space above result */
  font-size: 1.1rem; /* Slightly larger text for results */
  color: #333; /* Text color for results */
}
