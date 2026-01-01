import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageLoader } from "../context/PageLoaderContext";

const RouteLoader = () => {
  const { pathname } = useLocation();
  const { setLoading } = usePageLoader();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default RouteLoader;
