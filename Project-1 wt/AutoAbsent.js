let autoMode = false;
let autoInterval = null;

function startAutoMode(markAs = "Absent", delay = 1500) {
  if (autoMode) return;
  autoMode = true;

  autoInterval = setInterval(() => {
    if (currentIndex >= students.length) {
      stopAutoMode();
      return;
    }
    if (markAs === "Present") markPresent(currentIndex);
    else markAbsent(currentIndex);
    currentIndex++;
    highlightCurrentRow();
  }, delay);
}

function stopAutoMode() {
  clearInterval(autoInterval);
  autoMode = false;
}

// Optional: toggle button
function toggleAutoAttendance() {
  if (autoMode) {
    stopAutoMode();
  } else {
    startAutoMode("Absent", 1500); // Change to "Present" if needed
  }
}
