const hotels = [
    { name: "Hotel Sunshine", rating: 5, price: 200, image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/450/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/resort-overview/disneyland-hotel-06.jpg?1723533862220" },
    { name: "Ocean View", rating: 4, price: 150, image: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" },
    { name: "Mountain Resort", rating: 3, price: 100, image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg" },
    { name: "City Stay", rating: 4, price: 120, image: "https://www.hilton.com/im/en/CZMPCHH/7888781/czmpc-pool-3.jpg?impolicy=crop&cw=5000&ch=3203&gravity=NorthWest&xposition=0&yposition=64&rw=1280&rh=820" },
    { name: "Budget Inn", rating: 2, price: 80, image: "https://www.miragehotel.in/images/homepage_banner_1.jpg" }
];

const form = document.getElementById('hotelFilterForm');
const hotelList = document.getElementById('hotelList');
const ratingFilter = document.getElementById('ratingFilter');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedRating = parseInt(ratingFilter.value);
    displayHotels(selectedRating);
});

function displayHotels(minRating) {
    hotelList.innerHTML = '';
    hotels.forEach(hotel => {
        if (!minRating || hotel.rating >= minRating) {
            const listItem = document.createElement('li');
            listItem.className = 'hotel-item';
            listItem.innerHTML = `
                <img src="${hotel.image}" alt="${hotel.name}">
                <div>
                    <strong>${hotel.name}</strong> - Rating: ${hotel.rating} stars - Price: $${hotel.price}/night
                </div>
            `;
            hotelList.appendChild(listItem);
        }
    });
}

// Display all hotels initially
displayHotels();
