// Show Test Modal
function showTest(testNumber) {
  const modal = document.getElementById('test-modal');
  const testQuestions = document.getElementById('test-questions');
  const testCard = document.getElementById(`test${testNumber}`);

  // Display the test questions (you can modify this to generate dynamic questions)
  testQuestions.innerHTML = `<h3>Test ${testNumber} Questions</h3><p>Sample MCQs will go here...</p>`;
  
  modal.style.display = 'flex';

  // Store the testCard in the modal for later reference
  modal.setAttribute('data-current-card', testNumber);
}

// Close Modal
function closeModal() {
  const modal = document.getElementById('test-modal');
  modal.style.display = 'none';
}

// Submit Test and Show Result
function submitTest() {
  const result = document.getElementById('test-result');
  const modal = document.getElementById('test-modal');
  const testNumber = modal.getAttribute('data-current-card'); // Get the currently open test card
  const testCard = document.getElementById(`test${testNumber}`);

  // Display the result
  result.innerHTML = 'Congratulations! You passed the test.';
  result.style.display = 'block';
  
  // Close the modal after submission
  closeModal(); 

  // Trigger card flip for reward only after the test is submitted
  testCard.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
}

// Close Modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('test-modal');
  if (event.target === modal) {
    closeModal();
  }
};


// EmailJS form submission logic goes here if using the contact form
// Open the PDF in modal
function openPDF(pdfPath) {
    const pdfFrame = document.getElementById('pdf-frame');
    const modal = document.getElementById('pdf-modal');
  
    pdfFrame.src = pdfPath;
    modal.style.display = 'block';
  }
  
  // Close the modal
  function closePDFModal() {
    const modal = document.getElementById('pdf-modal');
    const pdfFrame = document.getElementById('pdf-frame');
  
    modal.style.display = 'none';
    pdfFrame.src = ''; // Clear the PDF source when closed
  }
  