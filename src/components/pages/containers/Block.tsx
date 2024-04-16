import React, { PropsWithChildren } from "react";
import styles from "./Block.module.scss";

import FlexDiv from "../../reuse/FlexDiv";
import Image from "next/image";
import cn from "classnames";
import { Title } from "../../reuse/Title/Title";
const bigStroke = require("../../../assets/photos/BigStroke.png");

export const BlockVariants = [
  "grid",
  "dark",
  "fabric",
  "fabric-hori",
  "light",
] as const;

export type BlockVariantType = typeof BlockVariants[number];

interface BlockProps {
  title: string;
  variant: BlockVariantType;
  strokes?: boolean;
  shadow?: boolean;
}
export const Block: React.FC<PropsWithChildren<BlockProps>> = ({
  title,
  variant = "dark",
  shadow = true,
  strokes,
  children,
}) => {
  return (
    <FlexDiv
      flex={{ direction: "column" }}
      className={cn(styles.block, styles[variant])}
      gapArray={[5, 6, 6, 7]}
      padding={{
        top: [6, 7, 7, 8],
        bottom: [8, 8, 8, 9],
        horizontal: [5, 6, 6, 7],
      }}
      width100
    >
      <Title title={title} color={variant == "light" ? "primary" : "white"} />
      {strokes && variant === "dark" && (
        <div className={styles.strokes}>
          <Image src={bigStroke} alt="stroke" />
          <Image src={bigStroke} alt="stroke" />
          <Image src={bigStroke} alt="stroke" />
        </div>
      )}
      <FlexDiv
        className={styles.content}
        width100
        flex={{ direction: "column" }}
      >
        {children}
      </FlexDiv>
    </FlexDiv>
  );
};
