
export function UserAdd({imgUrl, name, userName, titlebutton}:{imgUrl: string, name: string, userName: string, titlebutton: string}) {
    return (
        <>
            <aside>
                <img src={imgUrl} alt="" />
                <div>
                    <strong>{name}</strong>
                    <span>{userName}</span>
                </div>
                <button>{titlebutton}</button>
            </aside>
        </>
    )
}