import { useState } from "react";
import { Button } from "@/components/ui/button";
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

function UserLocationPage() {
  const navigate = useNavigate();

  const [framework, setFramework] = useState("");
  return (
    <>
      <div className="flex w-full items-center h-screen  justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Set Your Location</CardTitle>
            <CardDescription>Get newest dansla Updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">District</Label>
                  <Select onValueChange={(Value) => setFramework(Value)}>
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
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => navigate("/")} variant="outline">
              Back
            </Button>
            <Button
              onClick={() => navigate("/full", { state: { key: framework } })}
            >
              Go
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default UserLocationPage;
