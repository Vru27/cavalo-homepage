import Image from "next/image";

export default function Brands() {
  // all 12 brands in an array
  const brands = [
    "/Brands/brand1.avif",
    "/Brands/brand2.avif",
    "/Brands/brand3.avif",
    "/Brands/brand4.avif",
    "/Brands/brand5.avif",
    "/Brands/brand6.avif",
    "/Brands/brand4.avif",
    "/Brands/brand1.avif",
    "/Brands/brand6.avif",
    "/Brands/brand3.avif",
    "/Brands/brand4.avif",
    "/Brands/brand2.avif",
  ];

  const firstRow = brands.slice(0, 6);
  const secondRow = brands.slice(6, 12);

  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl font-bold mb-8">
        Browse used vehicle<span className="text-yellow-500"> by brands</span>
      </h2>

       {/* Row 1 */}
      <div className="flex justify-center gap-8 flex-wrap mb-4">
        {firstRow.map((src, index) => (
          <Image
            key={index}
            width={100}
            height={100}
            alt={`Brand ${index + 1}`}
            src={src}
            className="border border-gray-200 px-4 py-2 rounded-[6px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:border-yellow-400"
          />
        ))}
      </div>
      {/* Row 2 */}
      <div className="flex justify-center gap-8 flex-wrap mb-10">
        {secondRow.map((src, index) => (
          <Image
            key={index + 6}
            width={100}
            height={100}
            alt={`Brand ${index + 7}`}
            src={src}
            className="border border-gray-200 px-4 py-2 rounded-[6px] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:border-yellow-400"
          />
        ))}
      </div>
    </div>
  );
}
