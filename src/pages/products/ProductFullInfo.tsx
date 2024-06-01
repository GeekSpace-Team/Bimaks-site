import { FC } from "react"; // Adjust the import path as needed
import Contact from "../../components/contact/Contact";

const ProductFullInfo: FC = () => {
  return (
    <div className="px-[10%] my-10 dark:text-white">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-3/4">
          <h1 className="text-2xl font-bold mb-5">
            MAKS 1100 OXYGEN SCAVENGER
          </h1>
          <div className="flex gap-20">
            <img src="/images/atiksu-aritma02.jpeg" className="w-1/4" alt="" />
            <div className="flex flex-col gap-10">
              <h2 className=" font-bold">GENERAL DESCRIPTION</h2>
              <p>
                <span className="font-bold">MAKS 1100</span> is a catalyzed
                oxygen scavenger in liquid form.
              </p>
            </div>
          </div>
          <div className="my-12 flex flex-col gap-7 ">
            <p className="font-bold">PRINCIPAL USES</p>
            <p>
              <span className="font-bold">MAKS 1100</span> is an oxygen
              scavenger designed to control oxygen corrosion in boiler systems
              with/or without deaerators.
              <span className="font-bold"> MAKS 1100 </span>
              should always be applied together with an internal scale/deposit
              inhibitor for a complete boiler treatment program.
            </p>
            <p className="font-bold">PRODUCT BENEFITS</p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Reduces dissolved oxygen in boiler feed water systems to protect
                from corrosion
              </li>
              <li>Catalyzed form for faster reaction at lower temperatures</li>
              <li>
                Enhanced formula prevents activity loss during long term storage
                and usage
              </li>
              <li>
                Complies with FDA and USDA regulations in food industry, potable
                water, sterilization and steam humidification
              </li>
              <li>Can be used at pressures up to 40 bars</li>
            </ul>
            <p className="font-bold">Dosage</p>
            <p className="leading-[35px]">
              The specific dosage of MAKS 1100 varies depending on the amount of
              dissolved oxygen present at the point of injection. A certain
              residual has to be maintained in the boiler water. Your BIMAKS
              representative will recommend the optimum dosage necessary to
              ensure maximum program performance according to your specific
              system parameters. FEEDING MAKS 1100 can be fed neat or in any
              convenient dilution. Minimum solution strength for dilution is
              10%. A stainless steel quill is recommended for injection. MAKS
              1100 should be fed to points that will allow maximum reaction time
              (e.g. deaerator storage tank). MAKS 1100 must be fed continuously;
              any interruption in feed will result in corrosion formation and
              possible tube failure. If feedwater is used for steam
              attemperation, the product must be fed downstream of the
              attemperation water takeoff. MAKS 1100 should be used with a scale
              inhibitor for complete boiler treatment program. NOTE: To prevent
              catalyst precipitation, MAKS 1100 should not be mixed with
              alkaline treatments. MATERIALS: Storage and application equipments
              (pumps, lines) should be made of Buna-N, EPDM, Hypalon, Neoprene,
              Plasite 6000, PE, PP, PU, PVC, Teflon, Stainless steel 304+316
              (may discolor), Vinyl or Viton. Do not use Aluminum, Brass, Carbon
              steel, Copper, Nickel or Plasite 4005+7122 in contact with the
              neat product.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ProductFullInfo;
