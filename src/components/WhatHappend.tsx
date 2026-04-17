import { Icon } from "../hooks/IconsComponents"
import "../styles/whatHappend.css"

export function WhatHappend({ title, teme }: { title: string, teme: string }) {
    return (
        <aside className="what-happend-item">
            <div className="what-happend-info">
                <span className="what-happend-category">{title}</span>
                <strong className="what-happend-topic">{teme}</strong>
            </div>
            <Icon name="more" className="what-happend-more" />
        </aside>
    )
}
