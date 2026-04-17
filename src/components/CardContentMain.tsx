import { Icon } from "../hooks/IconsComponents"

export function CardContentMain({ user, name, hora, imgUrl }: { hora: string, name: string, user: string, imgUrl: string }) {
    return (
        <article className="card-post">
            <div className="card-post-img-container">
                <img src={imgUrl} alt="" />
            </div>
            <aside className="card-post-content">
                <div className="card-post-header">
                    <div className="card-post-user-info">
                        <strong className="card-post-name">{name}</strong>
                        <span className="card-post-username">{user}</span>
                        <span className="card-post-time">{hora}</span>
                    </div>
                    <div className="card-post-actions">
                        <Icon name="GrokLogo" className="card-post-grok" />
                        <Icon name="more" className="card-post-more" />
                    </div>
                </div>

                <div className="card-post-description">
                    <p></p>
                </div>

                <div className="card-post-icons">
                    <Icon name="chat" className="card-icon-chat" />
                    <Icon name="reTwitt" className="card-icon-retwitt" />
                    <Icon name="head" className="card-icon-like" />
                    <Icon name="chart" className="card-icon-chart" />
                    <Icon name="savedElement" className="card-icon-saved" />
                    <div className="card-icon-actions">
                        <Icon name="head" className="card-icon-share" />
                        <Icon name="upload" className="card-icon-upload" />
                    </div>
                </div>
            </aside>
        </article>
    )
}