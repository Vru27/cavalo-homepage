import Image from "next/image";

export default function VehicleType() {
    return (
        <div className="mt-10">
            <h2 className="text-center text-3xl font-bold mb-8">
                Vehicle<span className="text-yellow-500"> Type</span>
            </h2>
            <div className="flex justify-center gap-35 flex-wrap">
                <div className="flex flex-col items-center bg-white hover:bg-yellow-50 hover:shadow-lg hover:scale-105 rounded-lg p-4 transition-all duration-300 ease-in-out cursor-pointer">
                    <Image
                        width={100}
                        height={100}
                        alt="Truck"
                        src="/Icons/truck.png"
                        className="border-b-4 border-gray-700"
                    />
                    <p className="mt-2 text-gray-700 font-medium">Trucks</p>
                </div>
                <div className="flex flex-col items-center bg-white hover:bg-yellow-50 hover:shadow-lg hover:scale-105 rounded-lg p-4 transition-all duration-300 ease-in-out cursor-pointer">
                    <Image
                        width={100}
                        height={100}
                        alt="Bus"
                        src="/Icons/bus.png"
                        className="border-b-4 border-gray-700"
                    />
                    <p className="mt-2 text-gray-700 font-medium">Buses</p>
                </div>
                <div className="flex flex-col items-center bg-white hover:bg-yellow-50 hover:shadow-lg hover:scale-105 rounded-lg p-4 transition-all duration-300 ease-in-out cursor-pointer">
                    <Image
                        width={100}
                        height={100}
                        alt="3Wheeler"
                        src="/Icons/tuk-tuk.png"
                        className="border-b-4 border-gray-700"
                    />
                    <p className="mt-2 text-gray-700 font-medium">3 Wheelers</p>
                </div>
                <div className="flex flex-col items-center bg-white hover:bg-yellow-50 hover:shadow-lg hover:scale-105 rounded-lg p-4 transition-all duration-300 ease-in-out cursor-pointer">
                    <Image
                        width={100}
                        height={100}
                        alt="tractor"
                        src="/Icons/tractor.png"
                        className="border-b-4 border-gray-700"
                    />
                    <p className="mt-2 text-gray-700 font-medium">Tractors</p>
                </div>
                <div className="flex flex-col items-center bg-white hover:bg-yellow-50 hover:shadow-lg hover:scale-105 rounded-lg p-4 transition-all duration-300 ease-in-out cursor-pointer">
                    <Image
                        width={100}
                        height={100}
                        alt="machinery"
                        src="/Icons/excavator.png"
                        className="border-b-4 border-gray-700"
                    />
                    <p className="mt-2 text-gray-700 font-medium">Machinery</p>
                </div>
            </div>
        </div>
    )
}
