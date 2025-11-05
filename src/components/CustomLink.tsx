import { Link, type LinkProps, useSearchParams, useLocation } from "react-router-dom";
import { ZE_VERSION_PARAM } from "../constants";

/**
 * Custom Link component that automatically appends the Zendesk version parameter
 * to all navigation links and adds active class
 */
const CustomLink = ({ to, className, ...props }: LinkProps) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const getUrlWithParam = (url: string) => {
    // Handle string URLs
    if (typeof url === "string") {
      // Get current search params and add/update the ZE version
      const params = new URLSearchParams(searchParams);
      const [key, value] = ZE_VERSION_PARAM.split("=");
      params.set(key, value);

      // Combine path with search params
      const [path] = url.split("?");
      return `${path}?${params.toString()}`;
    }

    // Handle object URLs (from react-router-dom)
    return url;
  };

  // Check if the current path matches the link's destination
  const isActive = () => {
    if (typeof to === "string") {
      const [path] = to.split("?");
      // Exact match for home, startsWith for other routes
      if (path === "/") {
        return location.pathname === "/";
      }
      return location.pathname.startsWith(path);
    }
    return false;
  };

  const activeClass = isActive() ? "active" : "";
  const combinedClassName = className ? `${className} ${activeClass}` : activeClass;

  return <Link to={getUrlWithParam(to as string)} className={combinedClassName} {...props} />;
};

export default CustomLink;
