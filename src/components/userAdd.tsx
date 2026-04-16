import "../styles/userAdd.css"

export function UserAdd({ imgUrl, name, userName, titlebutton }: { imgUrl: string, name: string, userName: string, titlebutton: string }) {
    return (
        <>
            <aside>
                <article>
                    <img src={imgUrl} alt="" />

                    <div>
                        <strong>{name}</strong>
                        <span>{userName}</span>
                    </div>
                </article>
                <button>{titlebutton}</button>
            </aside>
        </>
    )
}