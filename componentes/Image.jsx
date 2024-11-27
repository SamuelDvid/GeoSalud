import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image
        className="imagen-geosalud"
        src="/geosalud.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
