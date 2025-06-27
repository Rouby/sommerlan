const userLocations = new Map<
  string,
  { latitude: number; longitude: number; timestamp: Date }[]
>();

export function updateUserLocation(
  userId: string,
  latitude: number,
  longitude: number,
) {
  if (!userLocations.has(userId)) {
    userLocations.set(userId, []);
  }
  const location = { latitude, longitude, timestamp: new Date() };
  userLocations.get(userId)?.push(location);
  return location;
}

export function getUserLocations(userId: string) {
  return userLocations.get(userId) || [];
}
