const FormContainer = (props) => {
  const { children } = props;

  return (
    <div className="flex">
      <div className="relative hidden md:flex">
        <img src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png" className="object-cover h-screen"/>
        <div className="absolute top-0 left-0 w-full h-screen bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-screen bg-emerald-800/20"></div>
      </div>
      <div className="flex flex-col items-center justify-center bg-emerald-50 h-screen flex-1">
        <div className="flex flex-col items-center mx-2 my-8">
          <img
            src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
            className="w-24 mb-2"
          />
          <div className="text-3xl font-playfair text-emerald-700">Rica's Plants</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
