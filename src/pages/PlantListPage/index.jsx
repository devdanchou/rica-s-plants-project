import { useState, useEffect } from "react";
import * as plantService from "services/plant";
import NavBar from "shared-components/NavBar";
import RedirectToPlantsIfSignedOut from "shared-components/RedirectToPlantsIfSignedOut";
import PlantItem from "./PlantItem";

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <RedirectToPlantsIfSignedOut>
      <NavBar />
      <div className="min-h-screen bg-green-50">
        {isLoading ? (
          <div className="flex justify-center pt-40">
            <i className="fa-solid fa-spinner text-3xl text-emerald-600 animate-spin"></i>
          </div>
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <div className="px-4 mb-6 text-4xl font-playfair text-emerald-800">
                Plants In Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map((plant) => (
                  <PlantItem key={plant.name} plant={plant} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToPlantsIfSignedOut>
  );
};

export default PlantListPage;
