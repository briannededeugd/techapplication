// let link = document.querySelector("form");

// link.addEventListener("click", (event) => {
    
//     event.preventDefault
//     favDialog.showModal()
// });


// const favDialog = document.getElementById('confirmDialog');


// favDialog.addEventListener('close', () => {

//   ;
// });



// let links = document.querySelectorAll("form");

// links.forEach(link => {
//   link.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const confirmDialog = document.getElementById(`confirmDialog_${link.id}`);
//     confirmDialog.showModal();

//     const confirmBtn = confirmDialog.querySelector('#confirmBtn');
//     confirmBtn.addEventListener('click', () => {
//       confirmDialog.close();
//       link.submit();
//     });

//     const cancelBtn = confirmDialog.querySelector('#cancelBtn');
//     cancelBtn.addEventListener('click', () => {
//       confirmDialog.close();
//     });
//   });
// });




// Get all the unfollow buttons
const unfollowButtons = document.querySelectorAll("form button");

// Loop through each button and add an event listener to display the dialog
unfollowButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    // Get the form element containing the button that was clicked
    const form = event.currentTarget.parentNode;
    // Get the profile id from the data attribute on the form element
    const profileId = form.dataset.profileId;
    // Get the dialog element for the current profile
    const dialog = document.querySelector(`dialog[data-id="${profileId}"]`);
    // Display the dialog
    dialog.showModal();
  });
});

// Add an event listener to the confirm button in each dialog
const confirmButtons = document.querySelectorAll("dialog button#confirmBtn");

confirmButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    // Get the form element containing the button that was clicked
    const form = event.currentTarget.parentNode;
    // Submit the form
    form.submit();
  });
});