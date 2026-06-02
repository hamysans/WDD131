const form = document.querySelector("#fsyForm");

console.log(form);

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event)

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const campuses = form.campus;
    console.log(campuses[0].checked)
})