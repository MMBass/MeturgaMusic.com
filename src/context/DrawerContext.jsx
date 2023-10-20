import React, { useState } from 'react';

export const DrawerContext = React.createContext(undefined);

export default function DrawerContextProvider(props) {
    const [drawer, setDrawer] = useState({});

    const openDrawer = (open, anchor, permanent = "temporary", child) => {
        setDrawer({ open, anchor, permanent, child });
    }

    const closeDrawer = (open, anchor, permanent = "temporary", child) => {
        setDrawer({ open, anchor, permanent, child });
    }

    const actions = { openDrawer, closeDrawer };

    return (
        <DrawerContext.Provider value={{ ...drawer, ...actions }}>
            {props.children}
        </DrawerContext.Provider>
    );
};

