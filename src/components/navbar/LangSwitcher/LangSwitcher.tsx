import React from "react";
import styles from "./LangSwitcher.module.scss";
import FlexDiv from "../../reuse/FlexDiv";
import { Paragraph } from "../../reuse/Paragraph";
import { atom, useAtom } from "jotai";
import { Icon } from "../../reuse/Icon";

export const langData = atom<LangType>("en");

export const Langs = ["en", "fr"] as const;

export type LangType = typeof Langs[number];

export const LangSwitcher: React.FC<{ onClick?: Function }> = ({ onClick }) => {
  const [lang, setLang] = useAtom(langData);

  const langClick = () => {
    const newLang: LangType = lang === "en" ? "fr" : "en";
    const currentPath = window.location.pathname;
    const newLangPath = currentPath.replace(/\/(en|fr)\//, `/${newLang}/`);
    if (newLangPath !== currentPath) {
      setLang(newLang);
    }
    onClick && onClick();
  };

  return (
    <FlexDiv
      gapArray={[2]}
      className={styles.langWrapper}
      onClick={() => langClick()}
    >
      <Paragraph level="big" color="primary">
        {lang.toUpperCase()}
      </Paragraph>
      <Icon icon="internet" size="regular" color="primary" />
    </FlexDiv>
  );
};
