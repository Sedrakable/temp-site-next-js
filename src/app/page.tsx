"use client";
import React, { useEffect, useRef, Suspense } from "react";
import styles from "./App.module.scss";
import "@/styles/Main.css";
import "@/styles/ScrollBar.scss";
import "@/styles/index.scss";

import { HomePage } from "@/app/pages";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { useDataQuery } from "../api/useDataQuery";

const App = () => {
  const ref = useRef<any>(null);

  const { footerData, navbarData, homePageData, settingsData } = useDataQuery();

  useEffect(() => {
    // Set CSS variables on page load
    if (settingsData) {
      document.documentElement.style.setProperty(
        "--primary",
        settingsData.colors.primary.hex!
      );
      document.documentElement.style.setProperty(
        "--black",
        settingsData.colors.dark.hex
      );
      document.documentElement.style.setProperty(
        "--white",
        settingsData.colors.light.hex
      );
      document.documentElement.style.setProperty(
        "--button-border-radius",
        `${settingsData.buttonBorderRadius}px`
      );
    }
  }, [settingsData]);

  return (
    navbarData && (
      <div className={styles.app} ref={ref}>
        <Navbar {...navbarData} />

        {/* <ScrollToTop /> */}
        <div className={styles.page}>
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage {...homePageData} />
          </Suspense>
        </div>

        {footerData && (
          <Footer
            legals={footerData?.legals}
            trademark={footerData?.trademark}
            links={navbarData?.links}
            logo={navbarData?.logo}
            lang="en"
            socials={{ links: footerData?.socials?.links }}
          />
        )}
      </div>
    )
  );
};

export default App;
