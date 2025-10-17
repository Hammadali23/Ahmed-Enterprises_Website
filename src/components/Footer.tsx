export default function Footer() {
  return (
    <footer className="bg-red-600 grid grid-cols-2 text-white text-center py-4 mt-10">
      <p>© {new Date().getFullYear()} Ahmed Enterprises | HVAC Services</p>
      <p>
        Designed and Developed by{" "}
        <a
          href="https://my-portfolio--tau.vercel.app/?fbclid=IwY2xjawNdqr1leHRuA2FlbQIxMABicmlkETFMMjVVdk1PYnJHZ1FHWjJRAR49Sq6392EIggBIfPX60Zx0hZYSbJnxN2cX0N_kS3BZT41pLedw_OOTgjqCcw_aem_RTdrfZfvdDj3TYRi9IwE8g"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-200 transition"
        >
          Hammad Ali
        </a>
      </p>
    </footer>
  );
}
