import React, { useState } from 'react';

export const DrawerContext = React.createContext(undefined);

export default function DrawerContextProvider({children}) {
    const [drawer, setDrawer] = useState({});

    const openDrawer = (open, anchor, permanent = "temporary") => {
        setDrawer({ open, anchor, permanent });
    }

    const closeDrawer = () => {
        setDrawer({});
    }

    const actions = { openDrawer, closeDrawer };

    return (
        <DrawerContext.Provider value={{ ...drawer, ...actions }}>
            {children}
        </DrawerContext.Provider>
    );
};