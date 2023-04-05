

// Get all the unfollow buttons
const unfollowButtons = document.querySelectorAll("form button");

// Loop through each button and add an event listener to display the dialog
unfollowButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    // Get the form element containing the button that was clicked
    const form = event.currentTarget.parentNode;
    const profileId = form.dataset.profileId;
    const dialog = document.createElement('dialog');
    dialog.setAttribute('data-id', profileId);
    dialog.innerHTML = `
      <form method="dialog">
        <label>Are you sure you want to unfollow?</label>
        <button type="button" id="cancelBtn" value="cancel">Cancel</button>
        <button type="submit" id="confirmBtn" value="default">Confirm</button>
      </form>
    `;
    document.body.appendChild(dialog);
    dialog.showModal();

    // Handle click event for confirm button
    const confirmBtn = dialog.querySelector("#confirmBtn");
    confirmBtn.addEventListener("click", event => {
      event.preventDefault();
      form.setAttribute("action", `/following/followlist/${profileId}`);
      form.submit();
    });

    // Handle click event for cancel button
    const cancelBtn = dialog.querySelector("#cancelBtn");
    cancelBtn.addEventListener("click", event => {
      event.preventDefault();
      dialog.close();
    });
  });
});