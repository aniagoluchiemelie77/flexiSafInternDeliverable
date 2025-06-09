function showTab(tabId) {
  var tabs = document.getElementsByClassName("tab-content");
  var links = document.querySelectorAll("#nav a");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  links.forEach((link) => link.classList.remove("active"));
  document.getElementById(tabId).style.display = "block";
  document
    .querySelector(`#nav a[onclick="showTab('${tabId}')"]`)
    .classList.add("active");
}
document.getElementById("carForm").addEventListener("submit", function (event) {
  event.preventDefault();
  Swal.fire({
    title: "Thank you!",
    text: "Your inquiry has been submitted successfully.",
    icon: "success",
    confirmButtonText: "OK",
  });
});
