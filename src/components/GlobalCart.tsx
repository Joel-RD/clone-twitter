import React from "react"

export function GlobalCart({header="" ,content, className = ""}: {content: React.ReactNode, header?: React.ReactNode , className?: string})
{
    return (
        <section className={className}>
            {header}
            {content}
        </section>
    )
}