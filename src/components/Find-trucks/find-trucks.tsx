import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function FindTrucks() {
  return (
    <main className="mt-8">
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[#F5EDD3]"></div>

        {/* Diagonal stripes */}
        <div className="absolute inset-0">
          {/* Each stripe is a skewed div */}
          <div className="absolute top-0 left-0 w-20 h-full bg-[#FDD835] opacity-40 transform -skew-x-12"> </div>
          <div className="absolute top-0 left-64 w-20 h-full bg-[#FDD835] opacity-30 transform -skew-x-12"></div>
          <div className="absolute top-0 right-96 w-20 h-full bg-[#FDD835] opacity-40 transform -skew-x-12"></div>
          <div className="absolute top-0 right-32 w-56 h-full bg-[#FDD835] opacity-30 transform -skew-x-12"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#FBC02D] leading-tight mb-6 ml-20">
                Find Your
                <br />
                Perfect Trucks
              </h1>

              <p className="text-lg text-gray-800 mb-2 font-medium ml-20">Not sure what you're looking for?</p>
              <p className="text-lg text-gray-800 mb-8 ml-20">Answer a few questions to discover the best fit for you.</p>

              <Button className="bg-[#FBC02D] text-gray-900 hover:bg-[#F9A825] font-semibold px-8 py-6 text-base rounded-lg ml-20">
                Start Quiz <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right Side - Placeholder for image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full h-80 rounded-lg flex items-center justify-center">
                <Image 
                 src="https://cdn.cavalo.in/cavalo/assets/images/banner-cta-img.svg"
                 alt="Find Trucks Illustration"
                 width={700}
                 height={200}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
