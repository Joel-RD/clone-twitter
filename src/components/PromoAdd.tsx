export function PromoAdd({title, desc, describtion, titleButton}: {title: string, desc: string, describtion: string, titleButton: string}) {
    return (
        <div className="promo-add-container">
            <div className="promo-add-header">
                <strong className="promo-add-title">{title}</strong>
                <p className="promo-add-discount">{desc}</p>
            </div>
            <p className="promo-add-description">{describtion}</p>
            <button className="promo-add-button">{titleButton}</button>
        </div>
    )
}