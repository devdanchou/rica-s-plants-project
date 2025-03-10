const PlantHeading = (props) => {
  const { plant } = props;

  return (
    <>
      <div className="flex items-center justify-between text-emerald-700">
        <div className="font-playfair text-4xl">{plant.name}</div>
        <div className="text-3xl">${plant.price}</div>
      </div>
      <div className="pl-px my-2 text-lg italic text-slate-500">
        {plant.botanical_name}
      </div>
    </>
  );
};

export default PlantHeading;
