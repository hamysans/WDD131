const form = document.querySelector("#eventForm");
const type = document.querySelector("#personType");
const infoBox = document.querySelector("#additionalInfo");
const output = document.querySelector("#output");
const infoText = document.querySelector("#infoText")
const infoData = document.querySelector("#notes")

function updateInfoField() {
  const value = type.value;
  
  if(value === "student") {
    infoBox.hidden = false;
    infoText.innerHTML = `Student I#`
  }
  else if(value === "guest") {
    infoBox.hidden = false;
    infoText.innerHTML = `Access Code`
  }
  else if (value === "") {
    infoBox.hidden = true;
  }
}

type.addEventListener("change", updateInfoField);
updateInfoField();

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.personType.value;
  const eventDate = form.eventDate.value;
  const infoData = form.notes.value;

    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

  if (type === "guest") {
    if (infoData == 0) {
        output.textContent = "Please provide the Access Code"
        return
    }
    if (infoData != "EVENT131") {
        output.textContent = "Incorrect Access Code"
        return
    } 
  }

  if (type === "student") {
    if (infoData == 0) {
        output.textContent = "Please provide your I#"
        return
    }
    if (infoData < 100000000) {
        output.textContent = "Student I# must be 9 digits"
        return
    } 
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateInfoField();
});
          