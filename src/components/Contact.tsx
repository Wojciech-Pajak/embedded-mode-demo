import React, { useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import CustomLink from "./CustomLink";
import { ContactInfo } from "./ContactInfo";
import { Location } from "./Location";
import "./Contact.css";
export const Contact: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("useEffect");
    if (window.zE && location.pathname === "/contact/message") {
      console.log("check");
      try {
        window.zE("messenger", "load", {
          mode: "embedded",
          conversationListScreen: {
            targetElement: "#zendesk-widget-container",
          },
          conversationScreen: {
            targetElement: "#zendesk-widget-container-2",
          },
        });
      } catch (error) {
        console.error("Error rendering Zendesk widget:", error);
      }
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

        {location.pathname === "/contact/message" ? (
          <>
            <div className="contact-column content-column">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/contact/message" replace />}
                />
                <Route
                  path="/message"
                  element={<div id="zendesk-widget-container"></div>}
                />
              </Routes>
            </div>

            <div className="contact-column details-column">
              <div id="zendesk-widget-container-2"></div>
            </div>
          </>
        ) : (
          <div className="contact-column content-column-full">
            <Routes>
              <Route path="/info" element={<ContactInfo />} />
              <Route path="/location" element={<Location />} />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
};
