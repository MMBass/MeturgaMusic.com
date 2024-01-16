import React from 'react';

import DrawerContextProvider from './DrawerContext';
import BannersContextProvider from './BannersContext';
import LoadersContextProvider from './LoadersContext';
import SettingsContextProvider from './SettingsContext';
import CurrLyricsContextProvider from './CurrLyricsContext';

const components = [DrawerContextProvider, BannersContextProvider, LoadersContextProvider, CurrLyricsContextProvider, SettingsContextProvider];

export default function ContextComposer({children}) {
  return (
    <>
      {
        components.reduceRight((acc, Comp) => {
          return <Comp>{acc}</Comp>;
        }, children)
      }
    </>
  );
};