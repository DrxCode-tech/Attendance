// Initialize EmailJS with your Public API Key
(function(){
  emailjs.init("3SAAOHAtaw3emxHjJ"); // Replace with your EmailJS Public API Key
})();

document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get values from the form
  var recipientEmail = document.getElementById("to_email").value;
  var senderName = document.getElementById("from_name").value;
  var messageContent = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs.send("service_nb6wxwy", "template_s54sfkc", {
    to_email: recipientEmail,
    from_name: senderName,
    message: messageContent
  })
  .then(function(response) {
    alert("Email sent successfully!");
    // Optionally clear the form fields after success:
    document.getElementById("emailForm").reset();
  }, function(error) {
    alert("Failed to send email: " + JSON.stringify(error));
  });
});
