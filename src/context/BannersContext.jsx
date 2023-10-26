import React, { useState } from 'react';

export const BannersContext = React.createContext(undefined);

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

export default function BannersContextProvider(props) {
    const [banners, setBanners] = useState({
        main: { open: false, severity: "error", title: "האתר בבניה", message: "" },
        infoSnackbar: { open: true, severity: "error", title: "", message: "אנו משתמשים בתרגום אוטומטי, לכן התרגום לעיתים אינו מדויק" },
    });

    const createBanner = (name, severity, title, message) => {
        if (banners[name]) {
            setBanners({ ...banners, [name]: undefined });
        }
        setBanners({ ...banners, [name]: { open: true, severity: severity || "success", title: title || "", message: message || "" } });
    }

    const openBanner = (name) => {
        if (banners[name]) {
            setBanners({ ...banners, [name]: { ...banners[name], open: true } });
        } else {
            console.error("Banner" + name + "does'nt exist");
        }
    }

    const closeBanner = (name) => {
        if (banners[name]) {
            setBanners({ ...banners, [name]: { ...banners[name], open: false } });
        } else {
            console.error("Banner" + name + "does'nt exist");
        }
    }

    const actions = { createBanner, openBanner, closeBanner };

    return (
        <BannersContext.Provider value={{ ...banners, ...actions }}>
            {props.children}
        </BannersContext.Provider>
    );
};
