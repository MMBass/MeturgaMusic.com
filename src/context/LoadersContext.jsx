import React, { useState } from 'react';

export const LoadersContext = React.createContext(undefined);

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

export default function LoadersContextProvider(props) {
    const [loaders, setLoaders] = useState({
        main: { open: false, color: "info" },
        backdrop: { open: false, color: "info" },
        circular: { open: false, color: "inherit" },
    });

    const createLoader = (name, color) => {
        if (loaders[name]) {
            setLoaders({ ...loaders, [name]: undefined });
        }
        setLoaders({ ...loaders, [name]: { open: false, color: color || "inherit" } });
    }

    const openLoader = (name) => {
        if (loaders[name]) {
            setLoaders({ ...loaders, [name]: { ...loaders[name], open: true} });
        } else {
            console.error("Loader " + name + " does'nt exist");
        }
    }

    const closeLoader = (name) => {
        if (loaders[name]) {
            setLoaders({ ...loaders, [name]: { ...loaders[name], open: false } });
        } else {
            console.error("Loader " + name + " does'nt exist");
        }
    }

    const actions = { createLoader, openLoader, closeLoader };

    return (
        <LoadersContext.Provider value={{ ...loaders, ...actions }}>
            {props.children}
        </LoadersContext.Provider>
    );
};
