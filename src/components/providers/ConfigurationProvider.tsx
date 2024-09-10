'use client'

import React, { createContext, useContext } from "react";

export interface Configuration {
  locale: string;
  languagePromise: Promise<Record<string, string>>;
}

export const ConfigurationContext = createContext<Configuration>({
    locale: 'en-us',
    languagePromise: new Promise((resolve) => resolve({}))
})

export function useConfiguration(): Configuration {
	const context = useContext(ConfigurationContext)
	return context
}

export function ConfigurationProvider({config, children}: React.PropsWithChildren<{config: Configuration}>): React.ReactElement {
    return <ConfigurationContext.Provider value={config}>
        {children}
    </ConfigurationContext.Provider>
}