let activeClass = "A";
let students = classAStudents;
let currentIndex = 0;

const tbody = document.getElementById("studentBody");
const presentCountEl = document.getElementById("presentCount");
const absentCountEl = document.getElementById("absentCount");
const absentRollsEl = document.getElementById("absentRolls");
const classAButton = document.getElementById("classA-btn");
const classBButton = document.getElementById("classB-btn");

function switchClass(className) {
  if (className === activeClass) return;

  activeClass = className;
  currentIndex = 0;

  students = activeClass === "A" ? classAStudents : classBStudents;

  if (activeClass === "A") {
    classAButton.classList.add("active");
    classBButton.classList.remove("active");
  } else {
    classBButton.classList.add("active");
    classAButton.classList.remove("active");
  }

  renderStudents();
}

function renderStudents() {
  tbody.innerHTML = "";
  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.className = student.status === "Present" ? "present" : "absent";
    row.innerHTML = `
        <td>${student.roll}</td>
        <td>${student.name}</td>
        <td>${student.status}</td>
        <td>
          <button class="btn btn-present" onclick="markPresent(${index})">Present</button>
          <button class="btn btn-absent" onclick="markAbsent(${index})">Absent</button>
        </td>
      `;
    tbody.appendChild(row);
  });
  updateSummary();
  highlightCurrentRow();
}

function markPresent(index) {
  students[index].status = "Present";
  renderStudents();
}

function markAbsent(index) {
  students[index].status = "Absent";
  renderStudents();
}

function markAllPresent() {
  students.forEach((s) => (s.status = "Present"));
  renderStudents();
}

function markAllAbsent() {
  students.forEach((s) => (s.status = "Absent"));
  renderStudents();
}

function updateSummary() {
  const presentCount = students.filter((s) => s.status === "Present").length;
  const absentStudents = students.filter((s) => s.status !== "Present");
  presentCountEl.textContent = presentCount;
  absentCountEl.textContent = absentStudents.length;
  absentRollsEl.textContent =
    absentStudents.map((s) => s.roll).join(", ") || "None";
}

function resetAttendance() {
  students.forEach((s) => (s.status = "Absent"));
  renderStudents();
}

function highlightCurrentRow() {
  const rows = document.querySelectorAll("#studentBody tr");
  rows.forEach((row, index) => {
    row.style.outline = index === currentIndex ? "2px solid blue" : "none";
  });
  if (rows[currentIndex]) {
    rows[currentIndex].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    markPresent(currentIndex);
    if (currentIndex < students.length - 1) currentIndex++;
  } else if (e.key === "Enter") {
    markAbsent(currentIndex);
    if (currentIndex < students.length - 1) currentIndex++;
  } else if (e.key === "ArrowLeft") {
    if (currentIndex > 0) currentIndex--;
  }
  highlightCurrentRow();
});

renderStudents();
