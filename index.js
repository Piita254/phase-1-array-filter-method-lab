// Code your solution here
// Function to find matching drivers
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// Function to perform fuzzy matching
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Function to match drivers by name
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}
