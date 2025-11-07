import Image from "next/image";
import Link from "next/link";

export default function VehicleType() {
  const vehicles = [
    { href: "/trucks", label: "Trucks", alt: "Truck", src: "/Icons/truck.png" },
    { href: "/buses", label: "Buses", alt: "Bus", src: "/Icons/bus.png" },
    { href: "/3wheelers", label: "3 Wheelers", alt: "3 Wheeler", src: "/Icons/tuk-tuk.png" },
    { href: "/tractors", label: "Tractors", alt: "Tractor", src: "/Icons/tractor.png" },
    { href: "/machinery", label: "Machinery", alt: "Machinery", src: "/Icons/excavator.png" },
  ];

  return (
    <section
      className="mt-10"
      role="region"
      aria-labelledby="vehicle-type-heading"
    >
      <h2
        id="vehicle-type-heading"
        className="text-center text-3xl font-bold mb-8"
      >
        Vehicle<span className="text-yellow-500"> Type</span>
      </h2>

      <nav
        className="flex justify-center gap-25 flex-wrap"
        role="navigation"
        aria-label="Vehicle type navigation"
      >
        {vehicles.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            aria-label={`View ${v.label} category`}
            className="group focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 rounded-lg"
          >
            <div
              role="link"
              tabIndex={0}
              className="flex flex-col items-center bg-white hover:bg-yellow-50 hover:shadow-lg hover:scale-105 rounded-lg p-4 transition-all duration-300 ease-in-out cursor-pointer focus:bg-yellow-100"
            >
              <Image
                width={100}
                height={100}
                alt={v.alt}
                src={v.src}
                className="border-b-4 border-gray-700"
              />
              <p className="mt-2 text-gray-700 font-medium">{v.label}</p>
            </div>
          </Link>
        ))}
      </nav>
    </section>
  );
}
