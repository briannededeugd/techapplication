// Get the current URL
const currentUrl = window.location.pathname;
console.log("🚀 ~ file: navbarScript.js:3 ~ currentUrl:", currentUrl)

// Get all the links
const links = document.querySelectorAll('.navbarItems a');

// Loop through each link
links.forEach(link => {
  // Compare the link's href to the current URL
  if (link.getAttribute('href') === currentUrl) {
    // Add the active class to the link
    link.classList.add('active');
  } else {
    // Remove the active class from the link
    link.classList.remove('active');
  }
});