import React, { FC } from "react";
import { ICustomImage, IHero, IServices, IValues, IWorkBlock } from "./data.d";
import { Hero } from "@/components/reuse/Hero/Hero";
import { WorkSlider } from "@/components/pages/blocks/WorkSlider/WorkSlider";
import { Services } from "@/components/pages/home/Services/Services";
import { Values } from "@/components/pages/home/Values/Values";
import { ImageGrid } from "@/components/pages/blocks/ImageGrid/ImageGrid";
import { ContactBlock } from "@/components/pages/blocks/ContactBlock/ContactBlock";

export interface HomePageProps {
  hero: IHero;
  work: IWorkBlock;
  services: IServices;
  values: IValues;
  images: ICustomImage[];
}

export const HomePage: FC<HomePageProps> = (props) => {
  return (
    props && (
      <>
        <Hero {...props?.hero} />
        <WorkSlider {...props?.work} />
        <Services {...props.services} />
        <Values {...props.values} />
        <ImageGrid customImages={props.images} randomize maxImages={8} />
        <ContactBlock title="Contact" />
      </>
    )
  );
};
