"use client";
import { Wrench, Search } from "lucide-react";
import { useState } from "react";

export default function SparePartsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const companies = [
    {
      name: "Hisense VRF",
      img: "/hisense.png",
    },
    {
      name: "Carrier",
      img: "/carrierlogo.png",
    },
    {
      name: "York",
      img: "/yorklogo.png",
    },
    {
      name: "Danfoss",
      img: "/danfoss.jpeg",
    },
    {
      name: "HoneyWell",
      img: "/Honeywelllogo.png",
    },
    {
      name: "Carlyle",
      img: "/carlylelogo.png",
    },
    {
      name: "Trane",
      img: "/tranelogo.png",
    },
    {
      name: "Johnson Controls",
      img: "/johnsonlogo.jpg",
    },
    {
      name: "Daikin",
      img: "/Daikinlogo.png",
    },
    {
      name: "Totaline",
      img: "/Totalinelogo.png",
    },
  ];

  const services = [
    {
      name: "HVAC System Installation",
      img: "/systeminstallation.png",
    },
    {
      name: "Air Conditioner Repair",
      img: "/conditioner.jpg",
    },
    {
      name: "Preventive Maintenance",
      img: "/preventive.png",
    },
    {
      name: "Spare Parts Replacement",
      img: "/spareparts.jpg",
    },
  ];

  const products = [
    {
      name: "Carrier Transducer 00PPG000012000A",
      desc: "A precision device that converts physical signals such as pressure, temperature, or force into electrical signals for monitoring or control applications.",
      images: ["/transducer12000.png", "/transducer12000.png"],
    },
    {
      name: "York Referigeration Compressor Oil",
      desc: "A high-quality mineral-based lubricant specially formulated for York refrigeration and air conditioning compressors. It provides excellent lubrication, moisture control, and chemical stability, ensuring reliable compressor performance and extended service life. Suitable for systems using refrigerants like R-22 and R-134a.",
      images: ["/compressoroil.jpg", "/compressoroil.jpg"],
    },
    {
      name: "Totaline Ester Oil SW220 (5 Liter Can)",
      desc: "High-performance synthetic compressor oil designed for excellent lubrication, thermal stability, and long service life in HVAC and industrial systems.",
      images: ["/esteroilsw220.png", "/esteroilsw220.png"],
    },
    {
      name: "Suniso Oil Sl-68",
      desc: "Fully synthetic (POE) refrigeration compressor oil designed for HFC / chlorine-free refrigerants, offering excellent miscibility, viscosity stability, thermal stability, and wear protection in refrigeration and AC systems.",
      images: ["/sunisooilsl68.jpg", "/sunisooilsl68.jpg"],
    },
    {
      name: "Honeywell WS9B2WB/U",
      desc: "The WS9B2WB/U is a wall-mounted temperature control / thermostat module intended for use with fan coil units (2-pipe systems).",
      images: ["/honeywellws.jpg", "/honeywellws.jpg"],
    },
    {
      name: "Carrier POE68 Centrifugal Oil (3.785 LITRES)",
      desc: "High-performance POE68 centrifugal oil designed for superior lubrication and cooling in HVAC and refrigeration compressors.",
      images: ["/poe68.png", "/poe68.png"],
    },
    {
      name: "Honeywell FCU Valve V4043C1362B",
      desc: "A two-way, 2-position motorized valve designed for fan coil unit (FCU) applications, featuring a spring-return mechanism to close the valve upon loss of power.",
      images: ["/FCUvalve.jpg", "/FCUvalve.jpg"],
    },
    {
      name: "Carrier Internal Oil Filter Kit 06NA660028",
      desc: "A genuine OEM internal oil filter kit designed for Carrier 30HXC / 30GX 06N screw chillers",
      images: ["/oilfilter06na.jpg", "/oilfilter06na.jpg"],
    },
    {
      name: "Toshiba Remote Controller 43166011 (RBC-AMT32E, Wired)",
      desc: "A wired remote controller used with Toshiba VRF / light commercial air-conditioning systems",
      images: ["/toshibaremotecontrol.jpg", "/toshibaremotecontrol.jpg"],
    },
    {
      name: "06NA660011 - Carrier HVAC - Unloader Solenoid Valve",
      desc: "OEM unloader solenoid valve for Carrier 06NA screw compressors, controlling compressor capacity and enhancing efficiency.",
      images: ["/solenoidvalve06na.jpg", "/solenoidvalve06na.jpg"],
    },
    {
      name: "CARRIER, Mfr Part # HN53CC024, Contactor - 115Z68|HN53CC024 - Grainger",
      desc: "A Carrier HN53CC024 is a 3-pole HVAC contactor with a 24 VAC coil rated for about 30 A full-load, used for switching and controlling high-current loads in air conditioning / refrigeration systems",
      images: ["/contactorcc024.jpeg", "/contactorcc024.jpeg"],
    },
    {
      name: "Hisense HYE-VD01 Wireless Remote Controller",
      desc: "A slim, backlit LCD wireless controller for Hisense VRF systems, offering individual louver control, 24-hour timer, auto test run, self-diagnostic functions, and multiple operating modes (cool/heat/auto/fan/dry).",
      images: ["/hye-vd01.jpg", "/hye-vd01.jpg"],
    },
    {
      name: "ALS-3 Oil strainer KH11NG120",
      desc: "Element 26 026-11225-000 is a high-quality oil filter element (20-micron) designed for commercial chiller units. It ensures efficient filtration and smooth oil circulation during oil changes, protecting the compressor from contaminants.",
      images: ["/ALS-3-KH11NG120.jpg", "/ALS-3-KH11NG120.jpg"],
    },
    {
      name: "Compressor Lockout Relay Board Part# HN-65CT-003",
      desc: "The Compressor Lockout Relay Board Part# HN-65CT-003 controls and protects compressor operation by preventing short cycling and system overload. It ensures reliable HVAC system performance and extends compressor life.",
      images: ["/Relay-HN65CT003.png", "/Relay-HN65CT003.png"],
    },
    {
      name: "Carrier / UTC - HN67ZA006 - Time Delay Relay",
      desc: "The Carrier / UTC HN67ZA006 Time Delay Relay is designed to provide precise timing control for HVAC systems, preventing short cycling and ensuring reliable compressor operation. It enhances system efficiency and protects components from premature wear.",
      images: ["/HN67ZA006.jpeg", "/HN67ZA006.jpeg"],
    },
    {
      name: "Carrier angle valve part# XL12AL002",
      desc: "The XL12AL002 is a compact angle-type refrigerant service/shut-off valve designed for controlling and isolating flow in HVAC systems. It provides a reliable sealing connection in a right-angle configuration for piping runs and servicing.",
      images: ["/anglevalve.jpg", "/anglevalve.jpg"],
    },
    {
      name: "Carrier Filter Drier Oil Part# KH42ME060",
      desc: "The KH42ME060 Filter Drier efficiently removes moisture and contaminants from HVAC and refrigeration systems. It ensures reliable performance and extends compressor life.",
      images: ["/KH42ME060.jpg", "/KH42ME060.jpg"],
    },
    {
      name: "Carrier Actuator Motor Part# HF26BB029 XU-347-0-0-1",
      desc: "The Carrier HF26BB029 is a 115 V single-phase actuator motor used in HVAC systems to control dampers or flow direction. It is a factory-authorized part designed for reliable modulation of air or fluid flow in heating/cooling systems.",
      images: ["/HF26BB029.jpg", "/HF26BB029.jpg"],
    },
    {
      name: "Carrier DISPLAY BOARD 20V47XYZ-A43",
      desc: "The 20V47XYZ-A43 is a Carrier display / HMI board used in Carrier/CIAT chillers/units",
      images: ["/20V47XYZ-A43.jpg", "/20V47XYZ-A43.jpg"],
    },
    {
      name: "Carrier Filter Drier Part# KH45LE120",
      desc: "It is designed to remove moisture and contaminants from refrigeration and air conditioning systems. It ensures efficient performance and protects the compressor from damage.",
      images: ["/KH45LE120.jpg", "/KH45LE120.jpg"],
    },
    {
      name: "Carrier spm board 32GB500362EE",
      desc: "It is a system protection module used in HVAC units to control and monitor critical functions. It ensures reliable system performance and safeguards components from electrical faults.",
      images: ["/32G500362.jpg", "/32GB500362-2.png"],
    },
    {
      name: "Carrier spm board 32GB500362EE",
      desc: "It is a system protection module used in HVAC units to control and monitor critical functions. It ensures reliable system performance and safeguards components from electrical faults.",
      images: ["/32GB500382-1.jpg", "/32GB500382-2.jpg"],
    },
  ];

  const filteredProducts = products.filter( 
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="pt-42"></main>
      
      <section className="text-center py-16 bg-red-600 text-white">
        <h1 className="text-4xl font-bold mb-3">Spare Parts & Services</h1>
        <p className="text-lg max-w-2xl mx-auto px-3 py-3">
          We provide original spare parts for all leading HVAC brands along with
          professional installation and maintenance services.
        </p>
      </section>

      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl text-teal-800 font-bold font-serif text-center mb-8">
          We Deal In
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {companies.map((company) => (
            <a
              key={company.name}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 shadow-md p-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition transform text-xl font-serif w-full text-center"
            >
              <img
                src={company.img}
                alt={company.name}
                className="mx-auto mb-3 w-full h-28 object-contain"
              />
              <p className="text-center font-medium">{company.name}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-6 md:px-20">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Wrench className="w-8 h-8 text-teal-700" />
          <h2 className="text-3xl text-teal-800 font-bold font-serif">
            Our Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition transform font-serif"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl text-teal-800 font-bold font-serif text-center mb-8">
          Product Details
        </h2>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-lg border-2 border-gray-300 focus:border-teal-600 focus:outline-none shadow-md"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition transform"
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative w-full h-76 overflow-hidden">
                  <img
                    src={hoveredProduct === index ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No products found matching your search.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}