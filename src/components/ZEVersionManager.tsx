import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ZE_VERSION_PARAM } from "../constants";

/**
 * Component that ensures the Zendesk version parameter is always present in the URL
 * Adds it on initial load and maintains it through navigation
 */
const ZEVersionManager = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const [key, value] = ZE_VERSION_PARAM.split("=");
    const currentValue = searchParams.get(key);

    // Only update if the parameter is missing or has a different value
    if (currentValue !== value) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key, value);
      setSearchParams(newParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return null; // This component doesn't render anything
};

export default ZEVersionManager;
