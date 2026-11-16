
import { vehicles } from "./vehicles.js";

import {
    getVehiclesByBrand,
    getVehicleById,
    getAvailableVehicles,
    hasValidPrices,
    hasAvailableVehicles,
    getAveragePrice,
    getTotalInventoryValue,
    getBrandsAndModels,
    getVehiclesByPriceRange,
    getVehiclesByYear,
    getMostExpensiveVehicle,
    getCheapestAvailableVehicle,
    getInventoryStatistics,
    formatVehicle
} from "./vehicleUtils.js";

// Helper function for displaying sections
function printSection(title) {
    console.log("\n========================================");
    console.log(title);
    console.log("========================================");
}

// Format prices in NIS
function formatPrice(price) {
    return `${price.toLocaleString("en-US")} NIS`;
}

// 1. Display all vehicles
printSection("ALL VEHICLES");

console.table(vehicles);

// 2. Get vehicles by brand
printSection("VEHICLES BY BRAND: Chery");

console.table(getVehiclesByBrand("Chery"));

// 3. Find a vehicle by ID
printSection("VEHICLE SEARCH BY ID: 3");

const searchedVehicle = getVehicleById(3);

console.log(searchedVehicle ?? "Vehicle not found");

// 4. Get available vehicles
printSection("AVAILABLE VEHICLES");

console.table(getAvailableVehicles());

// 5. Validate all vehicle prices
printSection("PRICE VALIDATION");

console.log("All vehicles have valid prices:", hasValidPrices());

// 6. Check vehicle availability
printSection("AVAILABILITY CHECK");

console.log("At least one vehicle is available:", hasAvailableVehicles());

// 7. Calculate average vehicle price
printSection("AVERAGE VEHICLE PRICE");

console.log(formatPrice(getAveragePrice()));

// 8. Calculate total inventory value
printSection("TOTAL INVENTORY VALUE");

console.log(formatPrice(getTotalInventoryValue()));

// 9. Get brands and models
printSection("BRANDS AND MODELS");

console.table(getBrandsAndModels());

// 10. Get vehicles by price range
printSection("VEHICLES BY PRICE RANGE: 80000 - 120000 NIS");

console.table(getVehiclesByPriceRange(80000, 120000));

// 11. Get vehicles by manufacturing year
printSection("VEHICLES BY YEAR: 2024");

console.table(getVehiclesByYear(2024));

// 12. Get the most expensive vehicle
printSection("MOST EXPENSIVE VEHICLE");

const mostExpensive = getMostExpensiveVehicle();

if (mostExpensive) {
    console.log(formatVehicle(mostExpensive));
} else {
    console.log("No vehicles found.");
}

// 13. Get the cheapest available vehicle
printSection("CHEAPEST AVAILABLE VEHICLE");

const cheapestAvailable = getCheapestAvailableVehicle();

if (cheapestAvailable) {
    console.log(formatVehicle(cheapestAvailable));
} else {
    console.log("No available vehicles found.");
}

// 14. Display inventory statistics
printSection("INVENTORY STATISTICS");

const statistics = getInventoryStatistics();

console.table([
    {
        "Statistic": "Total Vehicles",
        "Value": statistics.totalVehicles
    },
    {
        "Statistic": "Available Vehicles",
        "Value": statistics.availableVehicles
    },
    {
        "Statistic": "Reserved Vehicles",
        "Value": statistics.reservedVehicles
    },
    {
        "Statistic": "Sold Vehicles",
        "Value": statistics.soldVehicles
    },
    {
        "Statistic": "Average Vehicle Price",
        "Value": formatPrice(statistics.averagePrice)
    },
    {
        "Statistic": "Total Inventory Value",
        "Value": formatPrice(statistics.totalInventoryValue)
    }
]);

printSection("END OF VEHICLE INVENTORY PROCESSOR");

console.log("All operations completed successfully.");
