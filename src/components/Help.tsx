import React, { useRef, useState, useEffect } from "react";
import "./Help.css";

type Section = "home" | "messages" | "articles";

const helpArticles = [
  { id: 1, title: "How to place an order", summary: "Step-by-step guide to ordering products." },
  { id: 2, title: "Shipping & Delivery", summary: "Information about shipping times and costs." },
  { id: 3, title: "Returns & Refunds", summary: "How to return products and get a refund." },
  { id: 4, title: "Account Management", summary: "Managing your account and preferences." },
];

export const Help: React.FC = () => {
  const [section, setSection] = useState<Section>("home");
  const widgetLoaded = useRef(false);

  // Handler for "Ask a question" button: open Messages, load widget, and trigger new conversation
  const handleAskQuestion = () => {
    setSection("messages");
    setTimeout(() => {
      if (window.zE) {
        window.zE('messenger:ui', 'newConversation', {
          displayName: 'Support Request',
          iconUrl: 'https://static.zdassets.com/web_widget/latest/basic_settings_avatar.png',
          metadata: {
            source: 'help_button',
            priority: 'high',
          },
        });
      }
    }, 400);
  };

  // Render Zendesk widgets for Messages
  useEffect(() => {
    if (section === "messages" && window.zE) {
      try {
        window.zE("messenger", "render", {
          mode: "embedded",
          widget: {
            targetElement: "#zendesk-messages-full",
            includeHeader: true,
          },
        });
        widgetLoaded.current = true;
      } catch (e) {
        // fail silently
      }
    }
  }, [section]);

  // Handler for Messages nav button: always render widget
  const handleMessagesClick = () => {
    setSection("messages");
    setTimeout(() => {
      if (window.zE) {
        window.zE("messenger", "render", {
          mode: "embedded",
          widget: {
            targetElement: "#zendesk-messages-full",
            includeHeader: true,
          },
        });
        widgetLoaded.current = true;
      }
    }, 100);
  };


  return (
    <div className="help-page">
      <nav className="help-nav">
        <button className={section === "home" ? "active" : ""} onClick={() => setSection("home")}>Home</button>
        <button className={section === "messages" ? "active" : ""} onClick={handleMessagesClick}>Messages</button>
        <button className={section === "articles" ? "active" : ""} onClick={() => setSection("articles")}>Articles</button>
      </nav>

      {section === "home" && (
        <div className="help-home-section">
          <h1 className="help-header">How can we help?</h1>
          <div className="help-banner">
            <span>Need assistance?</span>
            <button className="help-cta" onClick={handleAskQuestion}>Ask a question</button>
          </div>
          <div className="help-banner secondary">
            <span>Looking for answers?</span>
            <button className="help-cta" onClick={() => setSection("articles")}>Browse Articles</button>
          </div>
        </div>
      )}

      {section === "messages" && (
        <div className="help-messages-section">
          <div id="zendesk-messages-full" className="zendesk-widget-container"></div>
        </div>
      )}

      {section === "articles" && (
        <div className="help-articles-section">
          <h2>Help Articles</h2>
          <ul className="help-articles-list">
            {helpArticles.map((article) => (
              <li key={article.id} className="help-article-item">
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
