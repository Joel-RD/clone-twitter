import "../styles/userAdd.css"

export function UserAdd({ imgUrl, name, userName, titlebutton }: { imgUrl: string, name: string, userName: string, titlebutton: string }) {
    return (
        <aside className="user-add-item">
            <article className="user-add-info">
                <img className="user-add-avatar" src={imgUrl} alt="" />
                <div className="user-add-details">
                    <strong className="user-add-name">{name}</strong>
                    <span className="user-add-username">{userName}</span>
                </div>
            </article>
            <button className="user-add-button">{titlebutton}</button>
        </aside>
    )
}