
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const placeSearch = document.getElementById("placeSearch");
    const searchMessage = document.getElementById("searchMessage");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const place = placeSearch.value.trim().toLowerCase();

        const destinations = {
            goa: {
                name: "Goa, India",
                description: "Enjoy beautiful beaches, golden sands, water sports, Portuguese heritage, and exciting nightlife.",
                image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900"
            },
            paris: {
                name: "Paris, France",
                description: "Explore the Eiffel Tower, the Louvre Museum, charming streets, and French cuisine.",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900"
            },
            bali: {
                name: "Bali, Indonesia",
                description: "Discover tropical beaches, green rice terraces, beautiful temples, and island adventures.",
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900"
            },
            london: {
                name: "London, England",
                description: "Visit Big Ben, Buckingham Palace, Tower Bridge, and world-famous museums.",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900"
            },
            dubai: {
                name: "Dubai, UAE",
                description: "Experience the Burj Khalifa, desert safaris, luxury shopping, and modern attractions.",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900"
            },
            tokyo: {
                name: "Tokyo, Japan",
                description: "Explore vibrant city streets, Japanese temples, delicious food, and modern technology.",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900"
            },
            agra: {
                name: "Agra, India",
                description: "Discover the Taj Mahal, Agra Fort, and the city's rich Mughal history.",
                image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900"
            },
            maldives: {
                name: "Maldives",
                description: "Relax in turquoise waters, stay in overwater villas, and enjoy snorkeling and diving.",
                image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900"
            },
            singapore: {
                name: "Singapore",
                description: "Visit Marina Bay Sands, Gardens by the Bay, Sentosa Island, and vibrant food markets.",
                image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900"
            },
            rome: {
                name: "Rome, Italy",
                description: "Explore the Colosseum, ancient Roman landmarks, beautiful piazzas, and Italian cuisine.",
                image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900"
            },
            switzerland: {
                name: "Switzerland",
                description: "Enjoy the Swiss Alps, scenic train journeys, mountain villages, and stunning lakes.",
                image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900"
            },
            "new york": {
                name: "New York, USA",
                description: "Discover Times Square, Central Park, the Statue of Liberty, and the city's skyline.",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=900"
            }
        };

        const destination = destinations[place];

        if (destination) {
            searchMessage.innerHTML = `
                <div class="search-result">
                    <h2>${destination.name}</h2>
                    <img src="${destination.image}" alt="${destination.name}"
                         style="width:100%;max-width:600px;border-radius:12px;"
                         onerror="this.style.display='none'">
                    <p>${destination.description}</p>
                    <button type="button" id="planDestination">Plan This Trip</button>
                </div>
            `;

            document.getElementById("planDestination").addEventListener("click", function () {
                const destinationInput = document.getElementById("destination");

                if (destinationInput) {
                    destinationInput.value = destination.name;
                    document.getElementById("contact").scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });
        } else {
            searchMessage.innerHTML = `
                <div class="search-result">
                    <h2>Destination not found</h2>
                    <p>We don't have details for "${placeSearch.value.trim()}" yet.
                    Try Goa, Paris, Bali, London, Dubai, Tokyo, Agra, Singapore,
                    Rome, Maldives, Switzerland, or New York.</p>
                </div>
            `;
        }
    });
});
