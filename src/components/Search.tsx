import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function SearchBox() {
  const [isLocationSetting, setlocation] = useState(false);
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734, // Example coordinates for Barcelona, Spain
  };

  const mapStyles = {
    height: "80vh",
    width: "100%",
  };

  const markers = [
    {
      id: 1,
      lat: 41.3851,
      lng: 2.1734,
      title: "Barcelona, Spain",
    },
    {
      id: 2,
      lat: 48.8566,
      lng: 2.3522,
      title: "Paris, France",
    },
  ];

  const addMarkers = () => {
    const marker = {
      id: 1,
      lat: 41.3851,
      lng: 2.1734,
      title: "Barcelona, Spain",
    };
    console.log("marker Added");
    markers.push(marker);
  };

  const getLocation = () => {
    setlocation(true);
    navigator.geolocation.watchPosition((possition: GeolocationPosition) => {
      setLatitude(possition.coords.latitude);
      setLongitude(possition.coords.longitude);

      if (possition.coords.latitude != 0.0) {
        setlocation(false);
      }
    });
  };

  return (
    <>
      <div className="flex flex-col w-screen">
        {isLocationSetting == false ? (
          <Button onClick={() => addMarkers()}>Get Location</Button>
        ) : (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Getting Yout Location
          </Button>
        )}
        {latitude != 0.0 ? (
          <p className="text-sm text-muted-foreground">{markers.length}</p>
        ) : (
          <p className="text-sm text-muted-foreground">{markers.length}</p>
        )}
        <LoadScript googleMapsApiKey="AIzaSyC8XOXvvxImxyxY6dFnOKIMTlbOM3X58Yw">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            {/* {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng }}
                title={marker.title}
              />
            ))} */}
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
}

export default SearchBox;
