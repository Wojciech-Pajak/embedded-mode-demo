import React, { useEffect, useRef, useState } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import CustomLink from "./CustomLink";
import { ContactInfo } from "./ContactInfo";
import { Location } from "./Location";
import "./Contact.css";
export const Contact: React.FC = () => {
  const location = useLocation();

  const isWidgetLoadedRef = useRef(false);
  const isLoadingRef = useRef(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [customScale, setCustomScale] = useState(100);

  const enlarge = () => {
    const newSize = customScale + 10;
    setCustomScale(newSize);
    window.zE("messenger:set", "customization", {
      contentScale: newSize,
    });
  };

  const diminish = () => {
    const newSize = customScale - 10;
    setCustomScale(newSize);
    window.zE("messenger:set", "customization", {
      contentScale: newSize,
    });
  };

  useEffect(() => {
    if (location.pathname === "/contact/message") {
      setIsExiting(false);
      setShowButtons(true);
    } else {
      if (showButtons) {
        setIsExiting(true);
        const timeout = setTimeout(() => {
          setShowButtons(false);
          setIsExiting(false);
        }, 300); // Match animation duration
        return () => clearTimeout(timeout);
      }
    }
  }, [location.pathname, showButtons]);

  useEffect(() => {
    if (
      !isWidgetLoadedRef.current &&
      !isLoadingRef.current &&
      window.zE &&
      location.pathname === "/contact/message"
    ) {
      isLoadingRef.current = true;
      try {
        window.zE("messenger", "load", {
          mode: "embedded",
          conversationList: {
            targetElement: "#zendesk-widget-container-0",
          },
          messageLog: {
            targetElement: "#zendesk-widget-container-1",
          },
        });
        isWidgetLoadedRef.current = true;
      } catch (error) {
        console.error("Error rendering Zendesk widget:", error);
        isLoadingRef.current = false;
      }
    } else {
      isLoadingRef.current = false;
    }
  }, [location.pathname]);

  return (
    <div className="contact-container">
      <div className="contact-columns">
        <div className="contact-column nav-column">
          <nav className="contact-nav">
            <CustomLink
              to="/contact/info"
              className={`nav-icon ${
                location.pathname === "/contact/info" ? "active" : ""
              }`}
            >
              📞
              <span>Contact Info</span>
            </CustomLink>
            <CustomLink
              to="/contact/message"
              className={`nav-icon ${
                location.pathname === "/contact/message" ? "active" : ""
              }`}
            >
              ✉️
              <span>Message Us</span>
            </CustomLink>
            {showButtons && (
              <div className={`nav-controls ${isExiting ? "exiting" : ""}`}>
                <button onClick={enlarge} className="nav-control-btn">
                  +
                </button>
                <button onClick={diminish} className="nav-control-btn">
                  -
                </button>
              </div>
            )}
            <CustomLink
              to="/contact/location"
              className={`nav-icon ${
                location.pathname === "/contact/location" ? "active" : ""
              }`}
            >
              📍
              <span>Location</span>
            </CustomLink>
          </nav>
        </div>

        <div
          className="contact-column content-column"
          style={{
            display:
              location.pathname === "/contact/message" ? "block" : "none",
          }}
        >
          <h2>Your threads</h2>
          <div id="zendesk-widget-container-0" style={{ height: "100%" }}></div>
        </div>

        <div
          className="contact-column details-column"
          style={{
            display:
              location.pathname === "/contact/message" ? "block" : "none",
          }}
        >
          <h2>What's on your mind?</h2>
          <div id="zendesk-widget-container-1" style={{ height: "100%" }}></div>
        </div>

        <div
          className="contact-column content-column-full"
          style={{
            display:
              location.pathname !== "/contact/message" ? "block" : "none",
          }}
        >
          <Routes>
            <Route path="/info" element={<ContactInfo />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
