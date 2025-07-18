import { Switch } from "@mantine/core";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMutation, useQuery } from "urql";
import { RelativeTime } from "../../components";
import { graphql } from "../../gql";

export function PartyOverwatch() {
  const [{ data, fetching }, refetch] = useQuery({
    query: graphql(`
      query GetUserLocations {
        nextParty {
          id
          startDate
          latitude
          longitude
          attendings {
            id
            user {
              id
              displayName
              locations {
                latitude
                longitude
                timestamp
              }
              lastKnownLocation {
                latitude
                longitude
                timestamp
              }
            }
          }
        }
      }
    `),
    requestPolicy: "network-only",
  });

  const [isTracking, setIsTracking] = useState(false);
  const [, updateLocation] = useMutation(
    graphql(`
      mutation UpdateLocation($latitude: Float!, $longitude: Float!) {
        updateLocation(latitude: $latitude, longitude: $longitude) {
          id
          lastKnownLocation {
            latitude
            longitude
            timestamp
          }
        }
      }
    `),
  );

  useEffect(() => {
    let watchId: number;

    if (isTracking) {
      // This will handle foreground updates for the map
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          updateLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        },
      );
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [isTracking, updateLocation]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 10000); // Refetch every 10 seconds
    return () => clearInterval(interval);
  }, [refetch]);

  const userLocations =
    data?.nextParty?.attendings
      .map(
        ({ user }) =>
          user.lastKnownLocation && {
            id: user.id,
            displayName: user.displayName, // Replace with actual user name if available
            position: [
              user.lastKnownLocation.latitude,
              user.lastKnownLocation.longitude,
            ] as [number, number],
            lastSeen: user.lastKnownLocation.timestamp,
          },
      )
      .filter(
        <T,>(location: T | null | undefined): location is T =>
          location !== null && location !== undefined,
      ) ?? [];

  if (data?.nextParty) {
    userLocations.push({
      id: "party",
      displayName: "Party Location",
      position: [data.nextParty.latitude, data.nextParty.longitude],
      lastSeen: null,
    });
  }

  if (fetching || Date.now() < new Date(data?.nextParty?.startDate).getTime()) {
    return null;
  }

  return (
    <>
      <Switch
        label="Tracking aktivieren"
        checked={isTracking}
        onChange={(event) => setIsTracking(event.currentTarget.checked)}
        mb="md"
        size="xl"
      />
      {userLocations.length > 0 && (
        <MapContainer
          center={
            userLocations
              .reduce(
                (acc, { position }) => {
                  acc[0] += position[0];
                  acc[1] += position[1];
                  return acc;
                },
                [0, 0],
              )
              .map((coord) => coord / userLocations.length) as [number, number]
          }
          zoomControl={false}
          zoom={7}
          boxZoom
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer
            url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {userLocations.map((user, idx) => (
            <Marker key={idx} position={user.position}>
              <Popup>
                {user.displayName}{" "}
                {user.lastSeen && (
                  <RelativeTime date={new Date(user.lastSeen)} />
                )}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
  );
}
