// components/ScrollToTop.tsx
import { useEffect } from "react";
import { withRouter } from "next/router";

const ScrollToTop = ({ router }: any) => {
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default withRouter(ScrollToTop);
