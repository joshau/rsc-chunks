'use client'

import { useConfiguration } from '@/components/providers/ConfigurationProvider'

export function useLocale(): string {
	const { locale } = useConfiguration()
	return locale
}
