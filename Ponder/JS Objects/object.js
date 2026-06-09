const aCourse = {
    name: "Clown School",
    code: "HNK101",
    sections: [
        {sectionNum: 1, 
            roomNum: "STC1273", 
            enrolled: 12, 
            days: "MTWTHF", 
            instructor: "Chuckles"},
        {sectionNum: 2, 
            roomNum: "STC167", 
            enrolled: 13, 
            days: "F", 
            instructor: "Pennywise"}
    ],
    enrollStudent: function(sectionNum) {
        // sectionNum represents the section the user wants to add student to
        //find that section in our array, add a student to it
            this.sections.find(section => section.sectionNum == sectionNum).enrolled++;
            renderSections(this.sections);
    }
}

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});