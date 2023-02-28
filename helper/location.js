function getDistance(latlng1, latlng2) {

    let [lat1, lon1] = latlng1.split(",")
    let [lat2, lon2] = latlng2.split(",")

    const R = 6371; // Radius of the earth in km
    const dLat = deg2Radius(lat2 - lat1);
    const dLon = deg2Radius(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2Radius(lat1)) *
        Math.cos(deg2Radius(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2Radius(deg) {
    return deg * (Math.PI / 180);
}

module.exports = {
    "getDistance":getDistance,
    "deg2Radius":deg2Radius
}