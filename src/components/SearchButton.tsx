import { Icon } from "../hooks/IconsComponents"

export function SearchButton({ className = "" }: { className?: string }) {
    return (
        <aside className={`search-button-container ${className}`}>
            <Icon name="search" className="search-button-icon" />
            <input className="search-button-input" type="text" />
        </aside>
    )
}