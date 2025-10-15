export default function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <main className="pt-42"></main>

      <h1 className="text-4xl font-bold text-red-800 mt-10 mb-4 text-center">
        About Ahmed Enterprises
      </h1>

      <p className="md:mx-24 text-gray-600 text-lg mx-4 text-justify">
        We, Ahmad Enterprises, feel pleasure to present ourselves as “HVAC&R Service Provider Under One Roof”.
        While manufacturers manufacture equipment to meet any of your unique need, we, Ahmad Enterprises, are
        available for all kind of Pre-Sale or After-Sale support, throughout Pakistan, 24/7. Ahmad Enterprises
        Management is honored to have a history of more than 20 years in HVAC&R field and thus, is known by each and
        every concerned quarter of this specialized engineering domain. Having corporate offices and workshops in
        two major cities of Pakistan, i.e., Karachi and Lahore, Ahmed Enterprises is further equipped with a group of
        dedicated and professional engineers, technicians and other professionals who are always eager to perform.
        Ahmad Enterprises, therefore, by virtue of its technical and human resources, is fully capable to receive,
        understand, quote, deliver and after-sale care for any of your HVAC&R requirement.
      </p>

      {/* Standy Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mx-4 md:mx-24">
        <img
          src="/standy.jpg"
          alt="Standy 1"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
        <img
          src="/standy2.jpg"
          alt="Standy 2"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
