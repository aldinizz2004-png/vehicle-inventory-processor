
import { vehicles } from "./vehicles.js";

// Get vehicles by brand
export function getVehiclesByBrand(brand) {
    return vehicles.filter(
        vehicle => vehicle.brand.toLowerCase() === brand.toLowerCase()
    );
}

// Find a vehicle by ID
export function getVehicleById(id) {
    return vehicles.find(vehicle => vehicle.id === id);
}

export function getAvailableVehicles() {
    return vehicles.filter(
        vehicle => vehicle.status === "Available"
    );
}

export function hasValidPrices() {
    return vehicles.every(
        vehicle => Number.isFinite(vehicle.price) && vehicle.price > 0
    );
}

export function hasAvailableVehicles() {
    return vehicles.some(
        vehicle => vehicle.status === "Available"
    );
}

export function getAveragePrice() {
    if (vehicles.length === 0) {
        return 0;
    }

    const total = vehicles.reduce(
        (sum, vehicle) => sum + vehicle.price,
        0
    );

    return total / vehicles.length;
}

export function getTotalInventoryValue() {
    return vehicles.reduce(
        (total, vehicle) => total + vehicle.price,
        0
    );
}

export function getBrandsAndModels() {
    return vehicles.map(({ brand, model }) => ({
        brand,
        model
    }));
}

export function getVehiclesByPriceRange(min, max) {
    if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) {
        return [];
    }

    return vehicles.filter(
        vehicle => vehicle.price >= min && vehicle.price <= max
    );
}

export function getVehiclesByYear(year) {
    return vehicles.filter(
        vehicle => vehicle.year === year
    );
}

export function getMostExpensiveVehicle() {
    if (vehicles.length === 0) {
        return null;
    }

    return vehicles.reduce(
        (mostExpensive, vehicle) =>
            vehicle.price > mostExpensive.price ? vehicle : mostExpensive
    );
}

export function getCheapestAvailableVehicle() {
    const availableVehicles = getAvailableVehicles();

    if (availableVehicles.length === 0) {
        return null;
    }

    return availableVehicles.reduce(
        (cheapest, vehicle) =>
            vehicle.price < cheapest.price ? vehicle : cheapest
    );
}

export function getInventoryStatistics() {
    const totalVehicles = vehicles.length;

    const availableVehicles = vehicles.filter(
        vehicle => vehicle.status === "Available"
    ).length;

    const reservedVehicles = vehicles.filter(
        vehicle => vehicle.status === "Reserved"
    ).length;

    const soldVehicles = vehicles.filter(
        vehicle => vehicle.status === "Sold"
    ).length;

    const totalValue = getTotalInventoryValue();

    const averagePrice = totalVehicles > 0
        ? totalValue / totalVehicles
        : 0;

    return {
        totalVehicles,
        availableVehicles,
        reservedVehicles,
        soldVehicles,
        averagePrice,
        totalInventoryValue: totalValue
    };
}

export function formatVehicle({ id, brand, model, ...details }) {
    return {
        id,
        name: `${brand} ${model}`,
        ...details
    };
}
