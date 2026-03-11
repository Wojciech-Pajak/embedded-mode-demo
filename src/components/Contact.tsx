import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Contact.css";

export const Contact: React.FC = () => {
  const isWidgetLoadedRef = useRef(false);
  const isLoadingRef = useRef(false);
  const [leftColumnWidth, setLeftColumnWidth] = useState(350);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hideNewConversation, setHideNewConversation] = useState(true);
  const [hideHeader, setHideHeader] = useState(true);
  const [, setContentScale] = useState(100);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
    isDraggingRef.current = true;
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;

    e.preventDefault();

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const resizerWidth = 4;
    const minWidth = 350;
    const newLeftWidth = e.clientX - containerRect.left;

    const totalAvailableWidth = containerRect.width - resizerWidth;

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
    if (!isWidgetLoadedRef.current && !isLoadingRef.current && window.zE) {
      isLoadingRef.current = true;
      try {
        window.zE("messenger", "render", {
          mode: "embedded",
          conversationList: {
            targetElement: "#zendesk-widget-container-0",
            includeHeader: false,
            hideNewConversationButton: hideNewConversation,
          },
          messageLog: {
            targetElement: "#zendesk-widget-container-1",
            includeHeader: false,
          },
        });
        window.zE("messenger:set", "customization", {
          common: {
            hideHeader: hideHeader,
          },
          conversationList: {
            hideNewConversationButton: hideNewConversation,
          },
        });
        isWidgetLoadedRef.current = true;
      } catch (error) {
        console.error("Error rendering Zendesk widget:", error);
        isLoadingRef.current = false;
      }
    } else if (isWidgetLoadedRef.current && window.zE) {
      // Update only the hide/show state without re-rendering the whole widget
      window.zE("messenger:set", "customization", {
        common: {
          hideHeader: hideHeader,
        },
        conversationList: {
          hideNewConversationButton: hideNewConversation,
        },
      });
    } else {
      isLoadingRef.current = false;
    }
  }, [hideNewConversation]);

  return (
    <div
      className={`contact-container ${isDragging ? "resizing" : ""}`}
      ref={containerRef}
    >
      <div
        className="contact-columns"
        style={{ gridTemplateColumns: `${leftColumnWidth}px 4px 1fr` }}
      >
        <div className="contact-column content-column">
          <div className="header-row" style={{ position: 'relative' }}>
            <h2 className="header-title">Your threads</h2>
            <button
              className="header-dropdown-toggle"
              onClick={() => setShowDropdown((prev) => !prev)}
              aria-label="Show actions"
              style={{ marginLeft: 'auto' }}
            >
              ⋮
            </button>
            {showDropdown && (
              <div className="header-btn-dropdown">
                <button
                  className="header-btn"
                  onClick={() => setHideNewConversation((prev) => !prev)}
                >
                  button
                </button>
                <button
                  className="header-btn"
                  onClick={() => {
                    if (window.zE) {
                      window.zE('messenger:ui', 'newConversation', {
                        displayName: 'Support Request',
                        iconUrl: 'https://static.zdassets.com/web_widget/latest/basic_settings_avatar.png',
                        metadata: {
                          source: 'help_button',
                          priority: 'high',
                          userId: 12345,
                        },
                      });
                    }
                  }}
                >
                  new
                </button>
                <button
                  className="header-btn"
                  onClick={() => {
                    setContentScale((prev) => {
                      const newScale = prev + 5;
                      if (window.zE) {
                        window.zE('messenger:set', 'customization', {
                          common: {
                            contentScale: newScale
                          }
                        });
                      }
                      return newScale;
                    });
                  }}
                >
                  +
                </button>
                <button
                  className="header-btn"
                  onClick={() => {
                    setContentScale((prev) => {
                      const newScale = prev - 5;
                      if (window.zE) {
                        window.zE('messenger:set', 'customization', {
                          common: {
                            contentScale: newScale
                          }
                        });
                      }
                      return newScale;
                    });
                  }}
                >
                  -
                </button>
                <button
                  className="header-btn"
                  onClick={() => {
                    setHideHeader((prev) => {
                      const newValue = !prev;
                      if (window.zE) {
                        window.zE('messenger:set', 'customization', {
                          common: {
                            hideHeader: newValue
                          }
                        });
                      }
                      return newValue;
                    });
                  }}
                >
                  header
                </button>
              </div>
            )}
          </div>
          <div id="zendesk-widget-container-0" style={{ height: "100%" }}></div>
        </div>
        <div
          className="column-resizer"
          onMouseDown={handleMouseDown}
          style={{ cursor: isDragging ? "col-resize" : "col-resize" }}
        />
        <div className="contact-column details-column">
          <h2>What's on your mind?</h2>
          <div id="zendesk-widget-container-1" style={{ height: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};
