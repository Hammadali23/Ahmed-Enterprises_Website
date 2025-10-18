"use client";
import { Wrench, Search, Factory, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

export default function SparePartsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // --- DATA ARRAYS ---

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

  // --- COMPONENT RENDER ---

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Spacer for fixed header/navbar */}
      <main className="pt-24 sm:pt-32"></main> 

      {/* Hero Section: Red Background, White Text */}
      <section className="text-center py-12 md:py-16 bg-red-600 text-white shadow-xl px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 uppercase tracking-wider">
          HVAC Parts & Professional Solutions
        </h1>
        <p className="text-base sm:text-xl max-w-4xl mx-auto font-medium">
          We provide **Original Equipment Manufacturer (OEM)** and **High-Efficiency** parts, along with expert **Installation** and **Maintenance** services to ensure your system's integrity.
        </p>
      </section>

      {/* Key Value Proposition */}
      <section className="py-8 px-6 md:px-20 bg-black text-white">
        <div className="flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-6">
            <div className="text-center w-full sm:w-auto p-2">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mx-auto mb-1 sm:mb-2"/>
                <p className="font-semibold text-xs sm:text-sm uppercase">100% OEM Guarantee</p>
            </div>
            <div className="text-center w-full sm:w-auto p-2">
                <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mx-auto mb-1 sm:mb-2"/>
                <p className="font-semibold text-xs sm:text-sm uppercase">Direct Manufacturer Sourcing</p>
            </div>
            <div className="text-center w-full sm:w-auto p-2">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mx-auto mb-1 sm:mb-2"/>
                <p className="font-semibold text-xs sm:text-sm uppercase">Optimized System Efficiency</p>
            </div>
        </div>
      </section>

      {/* We Deal In: Brands Section */}
      <section className="py-12 md:py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl text-black font-extrabold text-center mb-8 md:mb-10 border-b-4 border-red-700 inline-block px-4 pb-1 uppercase tracking-tight">
          Reliable HVAC Brands for Uninterrupted Comfort
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 place-items-center">
          {companies.map((company) => (
            <a
              key={company.name}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg p-3 sm:p-5 rounded-xl border-2 border-gray-100 hover:shadow-2xl hover:border-red-600 transition duration-300 transform hover:scale-105 w-full text-center"
            >
              <div className="mx-auto mb-2 sm:mb-3 w-full h-12 sm:h-16 flex items-center justify-center">
                <img
                  src={company.img}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain transition duration-500" 
                />
              </div>
              <p className="text-center font-bold text-xs sm:text-sm text-black mt-1 sm:mt-2">
                {company.name}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-black py-12 md:py-16 px-6 md:px-20">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
          <Wrench className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" />
          <h2 className="text-2xl sm:text-3xl text-white font-extrabold border-b-4 border-red-600 px-3 sm:px-4 pb-1 uppercase tracking-tight">
            Comprehensive HVAC Service Portfolio
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-red-600 hover:shadow-2xl hover:border-red-800 transition transform duration-300"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-5 text-center bg-gray-50">
                <h3 className="font-extrabold text-base sm:text-lg text-black uppercase">
                  {service.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">Ensure System Longevity</p> 
                <div className="h-0.5 w-10 sm:w-12 bg-red-600 mx-auto mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Details Section - Image display fix implemented here */}
      <section className="py-12 md:py-16 px-6 md:px-20 bg-white">
        <h2 className="text-2xl sm:text-3xl text-black font-extrabold text-center mb-8 md:mb-10 border-b-4 border-red-600 inline-block px-4 pb-1 uppercase tracking-tight">
          Precision Parts for Peak Performance
        </h2>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Part Number, Brand, or Application..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 sm:py-4 pl-12 sm:pl-14 rounded-full border-2 border-black focus:border-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none shadow-lg text-black placeholder-gray-500 transition duration-300 text-sm sm:text-base"
            />
            <Search className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 hover:shadow-red-300/60 hover:shadow-2xl hover:border-red-600 transition transform duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* *** PRODUCT IMAGE CONTAINER ***
                  - h-64: Increased height to give the image more vertical space.
                  - object-cover: Ensures the image fills this increased height.
                */}
                <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                  {/* Badge */}
                  <span className="absolute top-2 left-2 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                    OEM Quality
                  </span>
                  <img
                    src={hoveredProduct === index ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 transform hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-extrabold text-base sm:text-lg mb-1 text-black leading-snug">
                    {product.name}
                  </h3>
                  {/* Subtle divider */}
                  <div className="h-0.5 w-full bg-gray-200 my-2"></div>
                  {/* Description */}
                  <p className="text-gray-700 text-sm h-16 sm:h-20 overflow-hidden line-clamp-4">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 md:py-12 border-4 border-black border-dashed rounded-xl bg-gray-50 px-4">
            <p className="text-lg sm:text-xl text-gray-500 font-semibold">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-2 text-red-600"/>
              We couldn't find products matching "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}