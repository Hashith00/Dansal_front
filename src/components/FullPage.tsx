import { useState, useEffect } from "react";
import { DansalCard } from "./DansalCard";
import { SkeletonDemo } from "./Skeliton";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const FullPage = () => {
  const location = useLocation();
  const state = location.state;
  const [isContentLocaed, setIsContentLoaded] = useState(false);
  const [details, setDetails] = useState([]);
  const [contactProps, setContactProps] = useState([]);

  const getData = async () => {
    console.log("Get data Running");
    const response = await axios.get(
      "https://hashith.online/api/read/" + state.key
    );
    console.log(details);

    console.log(response.data);
    setDetails(response.data);
    if (response.data != null) {
      const newContacts = response.data.map((element: any) => ({
        name: element.name,
        oranization: element.oranization,
        date: element.date,
        location: element.location,
        startingTime: element.startingTime,
        amOrpm: element.amOrpm,
        isOpen: element.isOpen,
        numberOfPeople: element.numberOfPeople,
      }));
      setContactProps(newContacts);
      setIsContentLoaded(true);
    } else {
      setIsContentLoaded(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex justify-between mr-10">
        <p className="text-4xl font-semibold leading-none tracking-tight mt-10 ml-10 mb-2">
          දන්සැල් Near by 🔥
        </p>
        <div className="hidden sm:block  justify-start gap-x-1 mt-10 align-baseline">
          <Button variant="secondary" className="mr-2">
            Filter
          </Button>
        </div>
      </div>

      <p className="text-2xl font-light leading-none tracking-tight ml-10 mb-4">
        {state.key}
      </p>
      <div className="grid grid-cols-1 place-items-center gap-2 md:grid-cols-2 lg:grid-cols-4 md:m-10">
        {isContentLocaed == false ? (
          <SkeletonDemo />
        ) : (
          contactProps.map((contact: any, index) => (
            <DansalCard key={index} {...contact} />
          ))
        )}
        {contactProps.length == 0 && isContentLocaed == true ? (
          <p>No Dansal Found</p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default FullPage;
