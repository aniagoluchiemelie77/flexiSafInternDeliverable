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
const carInventory = [
  {
    name: "Rolls Royce Phantom",
    price: "$300,000.00",
    image: "images/car1.jpeg",
  },
  {
    name: "2025 Volkswagen",
    price: "$50,000.00",
    image: "images/car2.jpeg",
  },
  {
    name: "2025 Tesla",
    price: "$150,000.00",
    image: "images/car3.jpeg",
  },
  {
    name: "2025 Tesla Model S",
    price: "$79,000.00",
    image: "images/Tesla.jpeg",
  },
  {
    name: "2024 BMW M5",
    price: "$90,000.00",
    image: "images/BMW.jpeg",
  },
  {
    name: "2025 Mercedes-Benz G-Class",
    price: "$130,000.00",
    image: "images/Mercedes.jpeg",
  },
];

// Function to dynamically load cars into the HTML
function loadCars() {
  const carContainer = document.querySelector(".main_cardiv");
  carContainer.innerHTML = ""; // Clear existing content

  carInventory.forEach((car) => {
    const carDiv = document.createElement("div");
    carDiv.innerHTML = `
      <img src="${car.image}" alt="${car.name} Image" />
      <p class="lead_p">${car.name}</p>
      <p class="car_price">Price: ${car.price}</p>
    `;
    carContainer.appendChild(carDiv);
  });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", loadCars);

