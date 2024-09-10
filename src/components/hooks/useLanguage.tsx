'use client'

import { use } from 'react'
import { useConfiguration } from '@/components/providers/ConfigurationProvider'

export function useLanguage(): Record<string, string> {
	const { languagePromise } = useConfiguration()
    const language = use(languagePromise)

	return language
}
