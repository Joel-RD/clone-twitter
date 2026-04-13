import React from 'react'
import type { JSX } from 'react'
import { allIcons } from '../assets/icons'

export const Icon = ({ name, className = '' }: { name: keyof typeof allIcons, className?: string }): JSX.Element | null => {
    const IconComponent = allIcons[name] as React.ComponentType<{ className?: string }>
    if (!IconComponent) return null

    return <IconComponent className={className} />
}
