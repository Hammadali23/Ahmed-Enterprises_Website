"use client";
import { Wrench, Search } from "lucide-react";
import { useState } from "react";

export default function SparePartsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const companies = [
    {
      name: "Hisense VRF",
      img: "/hisense.png",
      link: "https://www.hisensehvac.com/",
    },
    {
      name: "Carrier",
      img: "/carrierlogo.png",
      link: "https://www.carrier.com/",
    },
    {
      name: "York",
      img: "/yorklogo.png",
      link: "https://www.johnsoncontrols.com/york",
    },
    {
      name: "Danfoss",
      img: "/danfoss.jpeg",
      link: "https://www.danfoss.com/",
    },
    {
      name: "HoneyWell",
      img: "/Honeywelllogo.png",
      link: "https://www.honeywell.com/",
    },
  ];

  const services = [
    {
      name: "HVAC System Installation",
      img: "/hvac.jpg",
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
      name: "Transducer 00PPG000012000A",
      desc: "A precision device that converts physical signals such as pressure, temperature, or force into electrical signals for monitoring or control applications.",
      price: "Rs 45,000",
      img: "/transducer12000.png",
    },
    {
      name: "York Referigeration Compressor Oil",
      desc: "A high-quality mineral-based lubricant specially formulated for York refrigeration and air conditioning compressors. It provides excellent lubrication, moisture control, and chemical stability, ensuring reliable compressor performance and extended service life. Suitable for systems using refrigerants like R-22 and R-134a.",
      price: "Rs 22,000",
      img: "/compressoroil.jpg",
    },
    {
      name: "Ester Oil SW220 (5 Liter Can)",
      desc: "High-performance synthetic compressor oil designed for excellent lubrication, thermal stability, and long service life in HVAC and industrial systems.",
      price: "Rs 60,000",
      img: "/esteroilsw220.png",
    },
    {
      name: "Suniso Oil Sl-68",
      desc: "Fully synthetic (POE) refrigeration compressor oil designed for HFC / chlorine-free refrigerants, offering excellent miscibility, viscosity stability, thermal stability, and wear protection in refrigeration and AC systems.",
      price: "Rs 60,000",
      img: "/sunisooilsl68.jpg",
    },
    {
      name: "Honeywell WS9B2WB/U",
      desc: "The WS9B2WB/U is a wall-mounted temperature control / thermostat module intended for use with fan coil units (2-pipe systems).",
      price: "Rs 60,000",
      img: "/honeywellws.jpg",
    },
    {
      name: "Carrier POE68 Centrifugal Oil",
      desc: "High-performance POE68 centrifugal oil designed for superior lubrication and cooling in HVAC and refrigeration compressors.",
      price: "Rs 60,000",
      img: "/poe68.png",
    },
    {
      name: "Honeywell FCU Valve V4043C1362B",
      desc: "A two-way, 2-position motorized valve designed for fan coil unit (FCU) applications, featuring a spring-return mechanism to close the valve upon loss of power.",
      price: "Rs 60,000",
      img: "/FCUvalve.jpg",
    },
     {
      name: "Carrier Internal Oil Filter Kit 06NA660028",
      desc: "A genuine OEM internal oil filter kit designed for Carrier 30HXC / 30GX 06N screw chillers",
      price: "Rs 60,000",
      img: "/oilfilter06na.jpg",
    },
    {
      name: "Toshiba Remote Controller 43166011 (RBC-AMT32E, Wired)",
      desc: "A wired remote controller used with Toshiba VRF / light commercial air-conditioning systems",
      price: "Rs 60,000",
      img: "/toshibaremotecontrol.jpg",
    },
    {
      name: "06NA660011 - Carrier HVAC - Unloader Solenoid Valve",
      desc: "OEM unloader solenoid valve for Carrier 06NA screw compressors, controlling compressor capacity and enhancing efficiency.",
      price: "Rs 60,000",
      img: "/solenoidvalve06na.jpg",
    },
    {
      name: "CARRIER, Mfr Part # HN53CC024, Contactor - 115Z68|HN53CC024 - Grainger",
      desc: "A Carrier HN53CC024 is a 3-pole HVAC contactor with a 24 VAC coil rated for about 30 A full-load, used for switching and controlling high-current loads in air conditioning / refrigeration systems",
      price: "Rs 60,000",
      img: "/contactorcc024.jpeg",
    },
    {
      name: "Hisense HYE-VD01 Wireless Remote Controller",
      desc: "A slim, backlit LCD wireless controller for Hisense VRF systems, offering individual louver control, 24-hour timer, auto test run, self-diagnostic functions, and multiple operating modes (cool/heat/auto/fan/dry).",
      price: "Rs 60,000",
      img: "/hye-vd01.jpg",
    },
    {
      name: "ALS-3 Oil strainer KH11NG120",
      desc: "Element 26 026-11225-000 is a high-quality oil filter element (20-micron) designed for commercial chiller units. It ensures efficient filtration and smooth oil circulation during oil changes, protecting the compressor from contaminants..",
      price: "Rs 60,000",
      img: "/oilfilter120.jpg",
    },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 ">
      <main className="pt-42"></main>
      {/* Header Section */}
      <section className="text-center py-16 bg-red-900 text-white">
        <h1 className="text-4xl font-bold mb-3">Spare Parts & Services</h1>
        <p className="text-lg max-w-2xl mx-auto px-3 py-3">
          We provide original spare parts for all leading HVAC brands along with
          professional installation and maintenance services.
        </p>
      </section>

      {/* Companies Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl text-teal-800 font-bold font-serif text-center mb-8">
          We Deal In
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.link}
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

      {/* Services Section */}
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

      {/* Product Details Section with Search */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl text-teal-800 font-bold font-serif text-center mb-8">
          Product Details
        </h2>
        
        {/* Search Bar */}
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

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition transform"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-76 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No products found matching your search.</p>
          </div>
        )}
      </section>
    </div>
  );
}