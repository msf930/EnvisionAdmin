import Image from "next/image";

import { cn } from "@/app/lib/utils";
import { getImage } from "@/app/lib/getImage";

export default async function DynamicImage({ url, alt, containerClass }) {
  const { base64, img } = await getImage(url);

  return (
    <Image
      src={img}
      alt={alt || ""}
      unoptimized={true}
      placeholder="blur"
      blurDataURL={base64}
      objectFit="cover"
      quality={80}
      layout="fill"
    />
  );
}
