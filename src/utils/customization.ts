export const changeWidgetColors = () => {
    window.zE("messenger:set", "customization", {
        theme: {
            priary: "#550868",
            // action: "#73128e",
        }
    })
}

export const switchToLightThemeWidget = () => {
    window.zE("messenger:set", "customization", {
        theme: {
            primary: "#1170b6",
            onPrimary: "#fafafa",
            message: "#3a3a3a",
            onMessage: "#fafafa",
            action: "#003e73",
            onAction: "#fafafa",
            businessMessage: "#1a1a1a",
            onBusinessMessage: "#fafafa",
            background: "#fafafa",
            onBackground: "#1a1a1a",
            error: "#ff4565",
            onError: "#fafafa",
            notify: "#5893d6",
            onNotify: "#fafafa"
        }
    })
}

export const switchToDarkThemeWidget = () => {
    window.zE("messenger:set", "customization", {
        theme: {
            primary: "#571b07",
            onPrimary: "#fafafa",
            message: "#3a3a3a",
            onMessage: "#fafafa",
            action: "#731c05",
            onAction: "#fafafa",
            businessMessage: "#fafafa",
            onBusinessMessage: "#1a1a1a",
            background: "#1a1a1a",
            onBackground: "#fafafa",
            error: "#ff4565",
            onError: "#ff4565",
            notify: "#FF007F",
            onNotify: "#fafafa"
        }
    })
}
