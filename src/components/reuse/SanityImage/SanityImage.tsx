import React from "react";
import Img from "next/image";
import { urlFor } from "../../../api/useFetchPage";
import { SanityImageSource } from "@sanity/asset-utils";

export interface ICustomImage {
  alt: string;
  image: SanityImageSource;
  width?: number;
}

export const SanityImage: React.FC<ICustomImage> = ({ image, alt }) => {
  return (
    image && (
      <Img
        src={urlFor(image)!.url()}
        alt={alt}
        // width={getImageDimensions(image).width}
        // height={getImageDimensions(image).height}
        fill
        loading="lazy"
        placeholder="blur"
        style={{ objectFit: "cover" }}
        blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}
      />
    )
  );
};
