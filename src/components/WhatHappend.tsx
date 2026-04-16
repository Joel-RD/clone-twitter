import { Icon } from "../hooks/IconsComponents"
Icon
import "../styles/whatHappend.css"

export function WhatHappend({ title, teme }: { title: string, teme: string }) {
    return (
        <aside>
            <div>
                <span>{title}</span>
                <strong>{teme}</strong>
            </div>
            <Icon name="more" className="trend-post-more" />
        </aside>
    )
}
