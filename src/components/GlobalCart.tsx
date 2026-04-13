import React from "react"

export function GlobalCart({content, className = ""}: {content: React.ReactNode, className?: string})
{
    return (
        <section className={className}>
            {content}
        </section>
    )
}