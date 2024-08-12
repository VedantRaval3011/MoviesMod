import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      <Image
        className="h-52"
        src="packman.svg"
        alt="Loading..."
        width={500}
        height={300}
      ></Image>
    </div>
  );
}
