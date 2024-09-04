import Image from "next/image";

export const ImageGallery = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-center text-primary">
      Explore Our Stunning Gallery
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="md:col-span-3">
        <Image
          src="/large.avif"
          alt="Large featured image"
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="md:col-span-2 grid grid-rows-2 gap-4">
        <Image
          src="/small_1.avif"
          alt="Small image 1"
          width={400}
          height={300}
          className="rounded-lg object-cover w-full h-full"
        />
        <Image
          src="/small_2.avif"
          alt="Small image 2"
          width={400}
          height={300}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
);
