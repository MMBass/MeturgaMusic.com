import React, { useState } from 'react';

export const SettingsContext = React.createContext(undefined);

import { LOCAL_STORAGE_KEYS } from '@/constants';

/* !!! Important: When listening to updates from this context,
you may have to put useEffect in the target component
(and depends on [nameContext]) to force rerender before updating other states */

/* In order to createBanner you should create a container for it
in the componenet you want to display.
example:
{(bannersContext.{{YOUR BANNER FUTURE NAME}}?.open) &&
    {{HERE PUT THE CHILDS, E.T.C: <Alert> OR <Snackbar> OR IT CAN BE ANY html,
    AND USE THE severity/title/message IF NEEDED}}
} */

export default function SettingsContextProvider({children}) {
    const fontsize_ls = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.L_BODY_FONT_SIZE));

    const [settings, setSettings] = useState({
        fontSize: { sm: Number(fontsize_ls?.sm) || 14, md: Number(fontsize_ls?.md) || 16, lg:  Number(fontsize_ls?.lg) || 18 },
        fullScreen : false
    });

    const [badge, setBadge] = useState(false);

    function updateBadge(num) {
        setBadge(num);
    }

    const increaseFontSize = () => {
        if (settings.fontSize.md < 60) {
            setSettings({ ...settings, fontSize: { sm: settings.fontSize.sm + 1, md: settings.fontSize.md + 1, lg: settings.fontSize.lg + 1 } });
            updatefontSizeLs();
        }
    }

    const reduceFontSize = () => {
        if (settings.fontSize.sm > 7) {
            setSettings({ ...settings, fontSize: { sm: settings.fontSize.sm - 1, md: settings.fontSize.md - 1, lg: settings.fontSize.lg - 1 } });
            updatefontSizeLs();
        }
    }

    function updatefontSizeLs() {
        localStorage.setItem(LOCAL_STORAGE_KEYS.L_BODY_FONT_SIZE, JSON.stringify({
            sm: settings.fontSize.sm,
            md: settings.fontSize.md,
            lg: settings.fontSize.lg
        }));
    }

    function toggleFullScreen(bool) {
        setSettings({ ...settings, fullScreen: bool});
    }

    const actions = { reduceFontSize, increaseFontSize, updateBadge, toggleFullScreen };

    return (
        <SettingsContext.Provider value={{ ...settings, ...actions, badge }}>
            {children}
        </SettingsContext.Provider>
    );
};
