function countWords() {
  const userInput = document.getElementById('userInput').value;
  const words = userInput.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  document.getElementById('wordCount').textContent = `${wordCount} / 1000 words`;

  const submitBtn = document.getElementById('submitBtn');
  
  // Enable or disable the button based on word count
  if (wordCount > 0 && wordCount <= 1000) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

document.getElementById('textForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Gather form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const institute = document.getElementById('institute').value;
  const userInput = document.getElementById('userInput').value;

  // Check if all required fields are filled
  if (!name || !email || !phone || !institute || !userInput) {
    document.getElementById('message').textContent = "Please fill in all fields.";
    return;
  }

  // Send form data to Google Sheets via Apps Script Web App
  fetch('https://script.google.com/macros/s/AKfycbwjWw5v8xUk5_Cd0Afqkd10KNRhlNOx8kHwYQvrDOPcHqre_mbwhMsWkWFl6DC_NHKg/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      'name': name,
      'email': email,
      'phone': phone,
      'institute': institute,
      'input': userInput
    })
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById('message').textContent = "Form submitted successfully!";
    console.log("Form submission result: ", result); // Debugging info
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('message').textContent = "There was an error submitting the form.";
  });
});


document.getElementById('textForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Gather form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const institute = document.getElementById('institute').value;
  const userInput = document.getElementById('userInput').value;

  // Send form data to Google Sheets via Apps Script Web App
  fetch('https://script.google.com/macros/s/AKfycbwjWw5v8xUk5_Cd0Afqkd10KNRhlNOx8kHwYQvrDOPcHqre_mbwhMsWkWFl6DC_NHKg/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      'name': name,
      'email': email,
      'phone': phone,
      'institute': institute,
      'input': userInput
    })
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById('message').textContent = "Form submitted successfully!";
  })
  .catch(error => console.error('Error:', error));
});
