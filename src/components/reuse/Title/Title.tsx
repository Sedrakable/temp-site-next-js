import React, { PropsWithChildren } from "react";
import styles from "./Title.module.scss";

import FlexDiv from "../../reuse/FlexDiv";
import { ColorType, Heading } from "../../reuse/Heading";

interface TitleProps {
  title: string;
  color?: ColorType;
}
export const Title: React.FC<PropsWithChildren<TitleProps>> = ({
  title,
  color = "black",
}) => {
  return (
    <FlexDiv className={styles.title} padding={{ horizontal: [5, 6, 6, 7] }}>
      <Heading
        font="Cursive"
        as="h2"
        level="2"
        color={color}
        className={styles.heading}
        textAlign="center"
      >
        {title}
      </Heading>
      {/* <ButtonStroke /> */}
    </FlexDiv>
  );
};
