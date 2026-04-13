export function PromoAdd({title, desc, describtion, titleButton}: {title: string, desc: string, describtion: string, titleButton: string}) {
    return (
        <>
            <div>
                <strong>{title}</strong>
                <p>{desc}</p>
            </div>
            <p>{describtion}</p>
            <button>{titleButton}</button>
        </>
    )
}