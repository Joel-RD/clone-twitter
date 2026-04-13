import { Icon } from "../hooks/IconsComponents"
Icon

export function WhatHappend({title, teme}: {title: string, teme: string}) {
    return (
        <aside>
            <div>
                <span>{title}</span>
                <strong>{teme}</strong>
            </div>
            <Icon name="more" className="nav-icons" />
        </aside>
    )
}
