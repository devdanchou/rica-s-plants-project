import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "shared-components/NavBar";
import LoadingSpinner from "shared-components/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";
import * as plantService from "services/plant";

const PlantShowPage = () => {
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { plantId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlantById({ id: plantId });
      const plantData = await response.json();
      setPlant(plantData);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex justify-center min-h-screen bg-green-50 font-lato">
        <div className="w-full max-w-5xl px-8 py-24">
          {isLoading ? <LoadingSpinner /> : <PlantInfoSection plant={plant} />}
        </div>
      </div>
    </>
  );
};

export default PlantShowPage;
