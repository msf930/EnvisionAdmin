import Image from "next/image";
import testImage from "../public/TestImageLarge.jpg"

export default function Home() {
  return (
   <div className="mainCont">
    <div className="imgCont">
        <Image
          src={testImage}
          alt="mountain and waterfall"
          placeholder="blur"
          layout="fill"
          
          objectFit="contain"
        ></Image>
    </div>
    <div className="imgCont">
        <Image
          src={testImage}
          alt="mountain and waterfall"
          placeholder="blur"
          unoptimized={true}
          layout="fill"
          objectFit="contain"
        ></Image>
    </div>
   </div>
  );
}
