// Sample car data with image URLs
const cars = [
    { name: 'Honda Aura', price: 800000, year: 2012, bodyType: 'sedan', imageUrl: 'car1.jpg' },
    
    { name: 'Volkswagen vento', price: 600000, year: 2020, bodyType: 'sedan', imageUrl: 'car2.png' },
    { name: 'Suzuki Celerio X', price: 1100000, year: 2015, bodyType: 'truck', imageUrl: 's1.jpg' },
    
    { name: 'Mahindra Scorpio', price: 2200000, year: 2015, bodyType: 'suv', imageUrl: 'car12.jpg' },
    { name: 'Honda Amaze', price: 450000, year: 2015, bodyType: 'sedan', imageUrl: 'car4.png' },
    { name: 'Tata Tiago', price: 1200000, year: 2015, bodyType: 'truck', imageUrl: 's22.png' },
    { name: 'Swift Dezire', price: 900000, year: 2015, bodyType: 'sedan', imageUrl: 'car5.jpg' },
    { name: 'Toyota Fortuner', price: 2900000, year: 2015, bodyType: 'suv', imageUrl: 'car13.png' },
    { name: 'Lexus', price: 1500000, year: 2015, bodyType: 'sedan', imageUrl: 'car66.png' },
    { name: 'Suzuki Baleno', price: 1250000, year: 2015, bodyType: 'truck', imageUrl: 's3.png' },
    { name: 'Tata Tigor', price: 500000, year: 2015, bodyType: 'sedan', imageUrl: 'car77.png' },
    { name: 'Mahindra XUV700', price: 180000, year: 2015, bodyType: 'suv', imageUrl: 'car14.png' },
    
    { name: 'Tata Altroz', price: 780000, year: 2015, bodyType: 'truck', imageUrl: 's4.png' },
    { name: 'Verna', price: 1200000, year: 2015, bodyType: 'sedan', imageUrl: 'car99.png' },
    { name: 'Scorpio', price: 2400000, year: 2015, bodyType: 'suv', imageUrl: 'car12.jpg' },
    { name: 'Volkswagen', price: 400000, year: 2015, bodyType: 'sedan', imageUrl: 'car110.png' },
    { name: 'I 20', price: 620000, year: 2015, bodyType: 'truck', imageUrl: 's5.png' },
    { name: 'Toyota', price: 1990000, year: 2015, bodyType: 'suv', imageUrl: 'car13.png' },
    

   
];

const carList = document.getElementById('carList');
const priceFilter = document.getElementById('priceFilter');
const yearFilter = document.getElementById('yearFilter');
const bodyTypeFilter = document.getElementById('bodyTypeFilter');

// Function to filter and display cars
function filterCars() {
    const selectedPrice = priceFilter.value;
    const selectedYear = yearFilter.value;
    const selectedBodyType = bodyTypeFilter.value;

    const filteredCars = cars.filter(car => {
        const meetsPriceCriteria = selectedPrice === 'all' || car.price < parseInt(selectedPrice);
        const meetsYearCriteria = selectedYear === 'all' || car.year >= parseInt(selectedYear);
        const meetsBodyTypeCriteria = selectedBodyType === 'all' || car.bodyType === selectedBodyType;

        return meetsPriceCriteria && meetsYearCriteria && meetsBodyTypeCriteria;
    });

    displayCars(filteredCars);
}

// Function to display filtered cars
function displayCars(cars) {
    carList.innerHTML = '';

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');

        const carImage = document.createElement('img');
        carImage.classList.add('car-image');
        carImage.src = car.imageUrl; // Use the imageUrl property for the car image
        carCard.appendChild(carImage);

        const carOverlay = document.createElement('div');
        carOverlay.classList.add('car-overlay');

        const carInfo = document.createElement('div');
        carInfo.classList.add('car-info');
        carInfo.innerHTML = `${car.name}<br>Price: ₹${car.price}<br>Year: ${car.year}<br>Body Type: ${car.bodyType}`;
        carOverlay.appendChild(carInfo);

        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Buy Car';
        carOverlay.appendChild(buyButton);

        carCard.appendChild(carOverlay);

        carList.appendChild(carCard);
    });
}


const resetFiltersButton = document.getElementById('resetFilters');

// Function to reset filters
function resetFilters() {
  priceFilter.value = 'all';
  yearFilter.value = 'all';
  bodyTypeFilter.value = 'all';
  filterCars();
}

// Event listener for the reset button
resetFiltersButton.addEventListener('click', resetFilters);


// Event listeners for filter changes
priceFilter.addEventListener('change', filterCars);
yearFilter.addEventListener('change', filterCars);
bodyTypeFilter.addEventListener('change', filterCars);

// Initial display of all cars
displayCars(cars);
