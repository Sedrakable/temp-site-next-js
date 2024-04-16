import React, { PropsWithChildren } from "react";
import styles from "./Block.module.scss";

import FlexDiv from "../../reuse/FlexDiv";
import cn from "classnames";
import { Title } from "../../reuse/Title/Title";

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
}
export const Block: React.FC<PropsWithChildren<BlockProps>> = ({
  title,
  variant = "dark",
  children,
}) => {
  // const BigStroke = () => {
  //   return <Image src="../../../assets/photos/BigStroke.png" alt="stroke" />;
  // };
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
