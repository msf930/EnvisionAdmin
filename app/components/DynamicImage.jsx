import Image from "next/image";

import { cn } from "@/app/lib/utils";
import { getImage } from "@/app/lib/getImage";

export default async function DynamicImage({ url, alt, containerClass }) {
  const { base64, img } = await getImage(url);

  return (
    <div className={cn("relative", containerClass)}>
      <Image
        {...img}
        alt={alt || ""}
        unoptimized={true}
        placeholder="blur"
        blurDataURL={base64}
        sizes="(max-width: 100vw) 1000px"
      />
    </div>
  );
}
