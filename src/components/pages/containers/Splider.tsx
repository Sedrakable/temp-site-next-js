import React, { useEffect, useRef } from "react";

import {
  Options,
  Splide,
  SplideSlide,
  SplideTrack,
  // @ts-ignore
} from "@splidejs/react-splide";
import styles from "./Splider.module.scss";

import { SideContainer, SideContainerProps } from "./SideContainer";
import cn from "classnames";
import FlexDiv from "../../reuse/FlexDiv";
import { Icon } from "../../reuse/Icon";
import { ICustomImage, SanityImage } from "../../reuse/SanityImage/SanityImage";
import { useWindowResize } from "../../../helpers/useWindowResize";
export interface SpliderProps {
  customImage: ICustomImage;
  content?: SideContainerProps;
}

export interface SpliderContainerProps {
  slides: SpliderProps[];
  arrows?: boolean;
  splideProgress?: number;
  // eslint-disable-next-line no-unused-vars
  setSplideProgress?: (progress: number) => void;
}

export const Splider: React.FC<SpliderContainerProps> = ({
  slides,
  arrows = false,
  splideProgress,
  setSplideProgress,
}) => {
  const { isMobileOrTablet } = useWindowResize();
  const mainRef = useRef<Splide>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const prevArrowRef = useRef<HTMLDivElement>(null);
  const nextArrowRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (mainRef.current) {
  //     const splideInstance = mainRef.current.splide;

  //     if (splideInstance) {
  //       splideInstance.destroy();
  //       splideInstance.init();
  //     }
  //   }
  // }, [slides]);

  useEffect(() => {
    if (mainRef.current) {
      const splideInstance = mainRef.current.splide;

      if (splideInstance) {
        splideInstance.on("move", (index: number) => {
          if (setSplideProgress) {
            setSplideProgress(index);
          }
          const progressBarWidth = slides
            ? `${((index + 1) / slides?.length) * 100}%`
            : "0%";
          progressBarRef.current!.style.width = progressBarWidth;
        });
      }
    }
  }, [setSplideProgress, slides, progressBarRef]);

  useEffect(() => {
    if (mainRef.current && splideProgress !== undefined) {
      const splideInstance = mainRef.current.splide;

      if (splideInstance) {
        splideInstance.go(splideProgress);
      }
    }
  }, [splideProgress]);

  useEffect(() => {
    if (mainRef.current) {
      const splideInstance = mainRef.current.splide;

      const handleDragStart = () => {
        // Hide the arrow elements when dragging starts.
        if (prevArrowRef.current && nextArrowRef.current) {
          prevArrowRef.current.style.opacity = "0%";
          nextArrowRef.current.style.opacity = "0%";
        }
      };

      const handleDragEnd = () => {
        // Restore the visibility of the arrow elements when dragging ends.
        if (prevArrowRef.current && nextArrowRef.current) {
          prevArrowRef.current.style.opacity = "100%";
          nextArrowRef.current.style.opacity = "100%";
        }
      };

      if (!splideInstance) return;
      splideInstance.on("drag", handleDragStart);
      splideInstance.on("dragged", handleDragEnd); // Listen for the "dragged" event, which occurs when dragging ends.

      return () => {
        splideInstance.off("drag");
        splideInstance.off("dragged");
      };
    }
  }, [mainRef]);

  useEffect(() => {
    const splideInstance = mainRef.current?.splide;
    const prevArrowElement = prevArrowRef.current;
    const nextArrowElement = nextArrowRef.current;

    const handlePrevArrowClick = () => {
      if (setSplideProgress) {
        setSplideProgress(splideInstance?.index! - 1);
      } else {
        splideInstance?.go("-1");
      }
    };

    const handleNextArrowClick = () => {
      if (setSplideProgress) {
        setSplideProgress(splideInstance?.index! + 1);
      } else {
        splideInstance?.go("+1");
      }
    };

    prevArrowElement?.addEventListener("click", handlePrevArrowClick);
    nextArrowElement?.addEventListener("click", handleNextArrowClick);

    return () => {
      prevArrowElement?.removeEventListener("click", handlePrevArrowClick);
      nextArrowElement?.removeEventListener("click", handleNextArrowClick);
    };
  }, [mainRef, prevArrowRef, nextArrowRef, setSplideProgress]);

  const renderSlides = (text: boolean) => {
    return slides?.map((splider: SpliderProps, key) => {
      return (
        <SplideSlide
          key={key}
          className={cn({ [styles.content]: splider?.content })}
        >
          {splider?.customImage && (
            <div className={styles.imgWrapper}>
              <SanityImage
                image={splider?.customImage.image}
                alt={splider?.customImage.alt}
              />
            </div>
          )}
          {text && splider?.content && <SideContainer {...splider.content} />}
        </SplideSlide>
      );
    });
  };

  const mainOptions: Options = {
    type: "loop",
    autoplay: true,
    pagination: false,
    pauseOnHover: true,
    resetProgress: false,
    interval: 5000,
    arrows: false,
    rewind: true,
    focus: "center", // Manually set focus
  };

  return (
    slides && (
      <div className={cn(styles.wrapper)}>
        <Splide
          className={styles.container}
          options={mainOptions}
          hasTrack={false}
          ref={mainRef}
        >
          <SplideTrack className={styles.track}>
            {renderSlides(true)}
          </SplideTrack>
        </Splide>
        <div className={styles.ui}>
          <FlexDiv flex={{ x: "flex-start" }} className={styles.progressBar}>
            <div className={styles.progress} ref={progressBarRef} />
          </FlexDiv>
          {arrows && !isMobileOrTablet && (
            <div className={styles.customArrows}>
              <div ref={prevArrowRef} className={styles.prevArrow}>
                <Icon icon="arrow" rotate={180} size="big" />
              </div>
              <div ref={nextArrowRef} className={styles.nextArrow}>
                <Icon icon="arrow" size="big" />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};
