export const changeWidgetColors = () => {
  window.zE?.("messenger:set", "customization", {
    theme: {
      primary: "#550868",
      // action: "#73128e",
    },
  });
};

export const switchToLightThemeWidget = () => {
  window.zE?.("messenger:set", "customization", {
    theme: {
      primary: "#ffffffff",
      onPrimary: "#000000ff",
      message: "#3a3a3a",
      onMessage: "#fafafa",
      action: "#d8f382ff",
      onAction: "#000000ff",
      businessMessage: "#1a1a1a",
      onBusinessMessage: "#fafafa",
      background: "#fafafa",
      onBackground: "#1a1a1a",
      error: "#ff4565",
      onError: "#fafafa",
      notify: "#5893d6",
      onNotify: "#fafafa",
    },
  });
};

export const switchToDarkThemeWidget = () => {
  window.zE?.("messenger:set", "customization", {
    theme: {
      primary: "#000000ff",
      onPrimary: "#fafafa",
      message: "#3a3a3a",
      onMessage: "#fafafa",
      action: "#000000ff",
      onAction: "#fafafa",
      businessMessage: "#fafafa",
      onBusinessMessage: "#1a1a1a",
      background: "#1a1a1a",
      onBackground: "#fafafa",
      error: "#ff4565",
      onError: "#ff4565",
      notify: "#FF007F",
      onNotify: "#fafafa",
    },
  });
};
