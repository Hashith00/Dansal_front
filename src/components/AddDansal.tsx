import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddDansale() {
  // Add the navigatioin fnnction
  const navigate = useNavigate();

  // Setting the variables to input valude
  const [name, setName] = useState("");
  const [organizationName, setorganizationName] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [amOrPm, setAmOrPm] = useState("");
  const [islocationAdded, setIsLocationAdded] = useState(false);
  const [locationLat, setLocationLat] = useState(0.0);
  const [locationLong, setLocationLong] = useState(0.0);

  // Handing the Text Input feilds
  const handleName = (event: any) => {
    setName(event.target.value);
  };
  const handleOrganization = (event: any) => {
    setorganizationName(event.target.value);
  };
  const handleCity = (event: any) => {
    setCity(event.target.value);
  };
  const handleTime = (event: any) => {
    setTime(event.target.value);
  };

  // Location Adding event handling
  const handleLocationAdding = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        function (position) {
          setLocationLat(position.coords.latitude);
          setLocationLong(position.coords.longitude);
          console.log(position.coords.longitude);
          setIsLocationAdded(true);
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  // Added tostify events
  const notify = () => {
    console.log("Clikced");
    toast.success("Location Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const addDansal = () => {
    console.log("Clikced");
    toast.success("Dansal is Successfully Added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Sending data to backend
  const addDansalRecord = async () => {
    const responce = await axios.post("https://hashith.online/api/create", {
      name: name,
      oranization: organizationName,
      date: date.toString(),
      location: city,
      district: district,
      province: "Western",
      startingTime: time.toString(),
      amOrpm: amOrPm,
      isOpen: false,
      numberOfPeopple: 0,
      startLocationLan: locationLat,
      startLocationLong: locationLong,
    });
    if (responce.status == 200) {
      addDansal();
      navigate("/");
    }
    console.log(responce);
  };

  return (
    <>
      <div className="flex w-full items-center h-screen  justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Set Your Dansal Details</CardTitle>
            <CardDescription>Get newest dansla Updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">What are you Giving</Label>
                  <Input
                    onChange={handleName}
                    id="name"
                    placeholder="Ex: Coffe, Rice & Curry"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Your organization name</Label>
                  <Input
                    onChange={handleOrganization}
                    id="naorganization"
                    placeholder="Enter your Organization"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">City</Label>
                  <Input
                    onChange={handleCity}
                    id="city"
                    placeholder="Enter the nearest city"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="date">Date</Label>
                  <Select onValueChange={(Value) => setDate(Value)}>
                    <SelectTrigger className="w-[300px]">
                      <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="23">23</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Starting Time</Label>
                  <Input
                    onChange={handleTime}
                    id="time"
                    placeholder="Enter the starting time"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Starting Time in AM or PM</Label>
                  <Select onValueChange={(Value) => setAmOrPm(Value)}>
                    <SelectTrigger className="w-[300px]">
                      <SelectValue placeholder="AM/PM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AM">AM</SelectItem>
                      <SelectItem value="PM">PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">District</Label>
                  <Select onValueChange={(Value) => setDistrict(Value)}>
                    <SelectTrigger className="w-[300px]">
                      <SelectValue placeholder="Select your district" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Western</SelectLabel>
                        <SelectItem value="Gampaha">Gampaha</SelectItem>
                        <SelectItem value="Colombo">Colombo</SelectItem>
                        <SelectItem value="Kaluthara">Kaluthara</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Southern</SelectLabel>
                        <SelectItem value="Galle">Galle</SelectItem>
                        <SelectItem value="Matara">Matara</SelectItem>
                        <SelectItem value="Hambantota">Hambantota</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Uva</SelectLabel>
                        <SelectItem value="Badulla">Badulla</SelectItem>
                        <SelectItem value="Monaragala">Monaragala</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Central</SelectLabel>
                        <SelectItem value="Matale">Matale</SelectItem>
                        <SelectItem value="Kandy">Kandy</SelectItem>
                        <SelectItem value="Nuwara_Eliya">
                          Nuwara Eliya
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup></SelectGroup>
                      <SelectGroup>
                        <SelectLabel>NorthCentral</SelectLabel>
                        <SelectItem value="Anuradhapura">
                          Anuradhapura
                        </SelectItem>
                        <SelectItem value="Polonnaruwa">Polonnaruwa</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Eastern</SelectLabel>
                        <SelectItem value="Trincomalee">Trincomalee</SelectItem>
                        <SelectItem value="Batticaloa">Batticaloa</SelectItem>
                        <SelectItem value="Ampara">Ampara</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Sabaragamuwa</SelectLabel>
                        <SelectItem value="Kegalle">Kegalle</SelectItem>
                        <SelectItem value="Ratnapura">Ratnapura</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>NorthWestern</SelectLabel>
                        <SelectItem value="Puttalam">Puttalam</SelectItem>
                        <SelectItem value="Kurunegala">Kurunegala</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="flex w-full items-center h-12  justify-center mt-5">
                    {islocationAdded == false ? (
                      <Button onClick={() => handleLocationAdding()}>
                        Set Current Location as dansal Location
                      </Button>
                    ) : (
                      <Alert>
                        <AlertTitle>Location Added</AlertTitle>
                      </Alert>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => navigate("/")} variant="outline">
              Back
            </Button>
            <Button onClick={() => addDansalRecord()}>Add dansal</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default AddDansale;
