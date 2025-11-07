import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-96 w-full">
      <Image
        src="https://kennyperezlaw.com/wp-content/uploads/2021/06/7-Things-You-Need-to-Know-About-Semi-Trucks.jpg"
        alt="Grasslands and road"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
}
