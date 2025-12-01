import React, { useEffect, useRef, useState, useCallback } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
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
  const [leftColumnWidth, setLeftColumnWidth] = useState(350); // Initial width in pixels
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const enlarge = () => {
    const newSize = customScale + 10;
    setCustomScale(newSize);
    if (window.zE) {
      window.zE("messenger:set", "customization", {
        contentScale: newSize,
      });
    }
  };

  const diminish = () => {
    const newSize = customScale - 10;
    setCustomScale(newSize);
    if (window.zE) {
      window.zE("messenger:set", "customization", {
        contentScale: newSize,
      });
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
    isDraggingRef.current = true;
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;

    e.preventDefault(); // Prevent text selection and other default behaviors

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const navColumnWidth = 100; // Fixed width of nav column
    const resizerWidth = 4; // Width of the resizer
    const minWidth = 250; // Minimum width for content columns
    const newLeftWidth = e.clientX - containerRect.left - navColumnWidth;

    // Calculate available space for both columns (excluding nav and resizer)
    const totalAvailableWidth =
      containerRect.width - navColumnWidth - resizerWidth;

    // Ensure both columns respect minimum width
    if (
      newLeftWidth >= minWidth &&
      totalAvailableWidth - newLeftWidth >= minWidth
    ) {
      setLeftColumnWidth(newLeftWidth);
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    isDraggingRef.current = false;
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

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
        window.zE("messenger", "render", {
          mode: "embedded",
          conversationList: {
            targetElement: "#zendesk-widget-container-0",
            includeHeader: false,
            hideNewConversationButton: true,
          },
          messageLog: {
            targetElement: "#zendesk-widget-container-1",
            includeHeader: false,
          },
        });
        window.zE("messenger:set", "customization", {
          conversationList: {
            hideNewConversationButton: true,
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
    <div
      className={`contact-container ${isDragging ? "resizing" : ""}`}
      ref={containerRef}
    >
      <div
        className="contact-columns"
        style={{
          gridTemplateColumns:
            location.pathname === "/contact/message"
              ? `100px ${leftColumnWidth}px 4px 1fr`
              : "100px 1fr 3fr",
        }}
      >
        <div className="contact-column nav-column">
          <nav className="contact-nav">
            <Link
              to="/contact/info"
              className={`nav-icon ${
                location.pathname === "/contact/info" ? "active" : ""
              }`}
            >
              📞
              <span>Contact Info</span>
            </Link>
            <Link
              to="/contact/message"
              className={`nav-icon ${
                location.pathname === "/contact/message" ? "active" : ""
              }`}
            >
              ✉️
              <span>Message Us</span>
            </Link>
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
            <Link
              to="/contact/location"
              className={`nav-icon ${
                location.pathname === "/contact/location" ? "active" : ""
              }`}
            >
              📍
              <span>Location</span>
            </Link>
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

        {location.pathname === "/contact/message" && (
          <div
            className="column-resizer"
            onMouseDown={handleMouseDown}
            style={{ cursor: isDragging ? "col-resize" : "col-resize" }}
          />
        )}

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
