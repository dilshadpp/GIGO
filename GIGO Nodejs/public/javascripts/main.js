const cities = [
    "Adoor", "Agartala", "Agra", "Ahmedabad", "Aizawl", 
"Alappuzha", "Aluva", "Amaravati", "Amritsar", "Angamaly", "Anthoor", "Attingal", 
"Bengaluru", "Bhopal", "Bhubaneswar", "Chalakudy", "Chandigarh", "Changanassery", "Chengannur", "Chennai", "Cherpulassery", "Cherthala", 
"Chittur-Thathamangalam", "Coimbatore", "Cuttack", "Daman", "Darjeeling", "Dehradun", "Delhi", "Diu", "Erattupetta", "Ettumanoor", 
"Faridabad", "Feroke", "Gandhinagar", "Gangtok", "Gaya", "Gurugram", "Guruvayur", "Guwahati", "Haridwar", "Haripad", "Hyderabad", "Imphal", 
"Indore", "Irinjalakuda", "Iritty", "Itanagar", "Jabalpur", "Jaipur", "Jammu", "Jodhpur", "Kalamassery", "Kalpetta", "Kanhangad", "Kannur", 
"Kayamkulam", "Kochi", "Kodungallur", "Koduvally", "Kohima", "Kolkata", "Kollam", "Kondotty", "Kottakkal", "Kottarakara", "Kottayam", 
"Koyilandy", "Kozhikode", "Lucknow", "Ludhiana", "Madurai", "Malappuram", "Mananthavady", "Mangaluru", "Manjeri", "Mannarkkad", "Maradu", 
"Mattanur", "Mavelikkara", "Mukkam", "Mumbai", "Muvattupuzha", "Muzaffarpur", "Mysuru", "Nagpur", "Nashik", "Nedumangad", "New Delhi", 
"Neyyattinkara", "Nileshwaram", "North Paravur", "Ottappalam", "Pala", "Palakkad", "Panaji", "Panoor", "Parappanangadi", "Paravur", 
"Patiala", "Patna", "Payyoli", "Perinthalmanna", "Perumbavoor", "Piravom", "Ponnani", "Port Blair", "Prayagraj", "Puducherry", "Punalur", 
"Pune", "Raipur", "Ramanattukara", "Ranchi", "Sambalpur", "Shillong", "Shimla", "Shornur", "Siliguri", "Sreekandapuram", "Srinagar", 
"Sultan Bathery", "Surat", "Tanur", "Thalassery", "Thiruvalla", "Thiruvananthapuram", "Thrikkakkara", "Thrippunithura", "Thrissur", 
"Tiruchirapalli", "Tirur", "Tirurangadi", "Udaipur", "Vadodara", "Vaikom", "Vakatara", "Valanchery", "Varanasi", "Varkala", "Vijayawada", 
"Visakhapatnam", "Wadakkancherry", "Warangal", "Wayanad", "Ziro"
];

// Function to populate city list
function populateCities() {
    const cityList = document.getElementById("city-list");
    cityList.innerHTML = "";
    cities.forEach(city => {
        const li = document.createElement("li");
        li.innerText = city;
        li.onclick = () => selectCity(city);
        cityList.appendChild(li);
    });
}

// Function to filter cities based on user input
function filterCities() {
    let input = document.getElementById("search-city").value.toLowerCase();
    let filteredCities = cities.filter(city => city.toLowerCase().includes(input));

    document.getElementById("city-list").innerHTML = filteredCities
        .map(city => `<li onclick="selectCity('${city}')">${city}</li>`)
        .join('');
}

// Function to select a city from the dropdown
function selectCity(cityName) {
    // Update the button text to show the selected city
    document.querySelector(".location-button").textContent = cityName + " ▼";

    // Hide the dropdown after selection
    document.querySelector(".location-dropdown").classList.remove("show");

    // Update the search input to the selected city
    document.getElementById("search-city").value = cityName;
}

// Function to toggle the dropdown visibility
function toggleDropdown() {
    let dropdown = document.querySelector(".location-dropdown");
    
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show"); // Close if it's open
    } else {
        dropdown.classList.add("show"); // Open if it's closed
        populateCities(); // Ensure cities are populated when opened
    }
}

// Event listener to toggle dropdown when clicking the location button
document.querySelector(".location-button").addEventListener("click", toggleDropdown);

// Close the dropdown if the user clicks outside
document.addEventListener("click", function(event) {
    let dropdown = document.querySelector(".location-dropdown");
    let button = document.querySelector(".location-button");

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});