import neon from "../../public/images/profile/neon.jpg";
import Image from "next/image";

export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={neon}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -4,
      }}
    />
  );
}
