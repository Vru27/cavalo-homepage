import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-96 w-full">
      <Image
        src="https://media.istockphoto.com/id/2082112210/photo/grasslands-and-road.jpg?b=1&s=612x612&w=0&k=20&c=WrRUraCyOdQ_n2YQoReCjTYfoMSTg_Kzknoqv9MzOCU="
        alt="Grasslands and road"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
}
