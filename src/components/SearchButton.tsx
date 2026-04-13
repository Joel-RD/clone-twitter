import { Icon } from "../hooks/IconsComponents"

export function SearchButton({ className = "" }: { className?: string }) {
    return (
        <aside className={className}>
            <Icon name="search" className="input-search-content" />
            <input type="text" />
        </aside>
    )
}