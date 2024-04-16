import { useFetchPage } from "./useFetchPage";

import { HomePageProps } from "@/app/pages";
import { IFooter, INavBar, ISettings } from "@/app/data";

const { generateQueries } = require("./generateSanityQueries");

// Custom hook for handling form state
export const useDataQuery = () => {
  // Load JSON data from files using require

  const {
    navbarQuery,
    footerQuery,
    homeQuery,
    settingsQuery,
  } = generateQueries();

  const navbarData: INavBar = useFetchPage(navbarQuery, "navbar")!;
  const footerData: IFooter = useFetchPage(footerQuery, "footer")!;
  const homePageData: HomePageProps = useFetchPage(homeQuery, "homePage")!;
  const settingsData: ISettings = useFetchPage(settingsQuery, "settings")!;

  // const settingsData: ISettings = useFetchPage(settingsQuery)!;
  // const navbarData: INavBar = useFetchPage(navbarQuery)!;
  // const footerData: IFooter = useFetchPage(footerQuery)!;
  // const homePageData: HomePageProps = useFetchPage(homeQuery)!;

  return {
    settingsData,
    navbarData,
    footerData,
    homePageData,
  };
};
