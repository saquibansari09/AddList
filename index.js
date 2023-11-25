function addContact() {
  let name = document.getElementById("nameInput").value;
  let phone = document.getElementById("phoneInput").value;

  if (name && phone) {
    let contactDiv = document.createElement("div");

    let contactInfo = document.createElement("p");
    contactInfo.textContent = "Name: " + name + " Phone: " + phone;
    contactDiv.appendChild(contactInfo);
    document.getElementById("contactList").appendChild(contactDiv);

    // Clear input fields
    // document.getElementById("nameInput").value = "";
    // document.getElementById("phoneInput").value = "";
  } else {
    alert("Please fill in both Name and Phone Number.");
  }
}
