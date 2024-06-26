import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import axios from "axios";
import { useState, useEffect } from "react";

interface Location {
  lat: number;
  lng: number;
}

function MapComponent() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [contentLoaded, setContentLoaded] = useState(false);

  const getAllLocations = async () => {
    try {
      const response = await axios.get("https://hashith.online/api/readall");
      if (response.data != null) {
        const newLocations: Location[] = [];
        response.data.forEach((element: any) => {
          const newLocation: Location = {
            lat: element.startLocationLan,
            lng: element.startLocationLong,
          };
          newLocations.push(newLocation);
        });
        setLocations((prevLocations) => [...prevLocations, ...newLocations]); // Concatenate newLocations with prevLocations
      } else {
        console.log("Empty");
      }
      setContentLoaded(true);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <>
      {contentLoaded === false ? (
        <div className="flex h-screen items-center justify-center">
          <p>Loading</p>
        </div>
      ) : (
        <div>
          <APIProvider apiKey="AIzaSyC8XOXvvxImxyxY6dFnOKIMTlbOM3X58Yw">
            <Map
              style={{ width: "100vw", height: "100vh" }}
              defaultZoom={8}
              center={{ lat: 6.927079, lng: 79.861244 }}
              draggable={true}
            >
              {locations.map((location, index) => (
                <Marker
                  key={index}
                  position={{ lat: location.lat, lng: location.lng }}
                />
              ))}
            </Map>
          </APIProvider>
        </div>
      )}
    </>
  );
}

export default MapComponent;
