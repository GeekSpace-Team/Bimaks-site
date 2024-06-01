const SupportText = () => {
  return (
    <div className="bg-blue-400 py-10 px-5 text-center  text-white">
      <h1 className="text-2xl font-bold ">TECHNICAL SUPPORT</h1>
      <p className="my-6">
        BİMAKS’s Technical Assistance department aims to provide you with the
        most efficient solutions.
      </p>
      <div className="flex flex-col gap-3 mt-7 text-[17px] leading-7">
        <p>Thanks to the technical experience and knowledge of BİMAKS,</p>
        <p>our customers can direct them to the most effective and</p>
        <p>sustainable solutions in order to overcome their problems.</p>
        <p className="leading-10 mt-3">
          Our customers send their completed checklist forms to our Technical
          Support Unit and then we analyze the system data from our customers
          using the BASP (Bimaks Antiscalant Software Program) software program.
          As a result, our software program calculates the optimal dosage
          requirement for the specific chemicals to be used within the system,
          indicating which product will best suit these requirements
        </p>
      </div>
    </div>
  );
};

export default SupportText;
