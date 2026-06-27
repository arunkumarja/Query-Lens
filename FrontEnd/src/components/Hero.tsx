const Hero = () => {
    return (
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-5xl font-bold text-gray-900">
            Understand. Optimize. Convert.
          </h1>
  
          <p className="mt-3 text-gray-500 text-lg">
            Your all-in-one SQL analysis and conversion tool
          </p>
        </div>
  
        <div className="hidden md:block">
          <img
            src="/sql-hero.png"
            alt="hero"
            className="w-72"
          />
        </div>
      </div>
    );
  };
  
  export default Hero;