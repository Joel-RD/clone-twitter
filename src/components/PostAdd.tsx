import { Icon } from "../hooks/IconsComponents"

export function PostAdd() {
    return (
        <section className="post-add-container">
            <div className="post-add-image-container">
                <img src="https://imgs.search.brave.com/nvg9eW5FOwE1VbuNlw-D7uMK6ULrQyzoy3GYefPP9jk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90by85Nzk1/MDMvcGV4ZWxzLXBo/b3RvLTk3OTUwMy5q/cGVnP2F1dG89Y29t/cHJlc3MmY3M9dGlueXNy/YyZkcHI9MSZ3PTUwMA" alt="" />
            </div>
            <aside className="post-add-form">
                <textarea className="post-add-textarea" name="" id="" placeholder="Que esta pasando?"></textarea>
                <div className="post-add-divider"></div>
                <article className="post-add-toolbar">
                    <div className="post-add-tools">
                        <Icon name="image" className="post-tool-icon" />
                        <Icon name="gif" className="post-tool-icon" />
                        <Icon name="GrokLogo" className="post-tool-icon" />
                        <Icon name="more" className="post-tool-icon" />
                        <Icon name="smaile" className="post-tool-icon" />
                        <Icon name="calendar" className="post-tool-icon" />
                        <Icon name="location" className="post-tool-icon" />
                        <Icon name="flag" className="post-tool-icon" />
                    </div>
                    <div className="post-add-submit">
                        <button className="post-submit-button">Postear</button>
                    </div>
                </article>
            </aside>
        </section>
    )
}