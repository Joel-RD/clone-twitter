import { Icon } from "../hooks/IconsComponents"

export function PostAdd() {
    return (
        <section>
            <div>
                <img src="https://imgs.search.brave.com/nvg9eW5FOwE1VbuNlw-D7uMK6ULrQyzoy3GYefPP9jk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvOTc5/NTAzL3BleGVscy1w/aG90by05Nzk1MDMu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw" alt="" />
            </div>
            <aside>
                <textarea name="" id="" placeholder="Que esta pasando?"></textarea>
                <div className="span-line"></div>
                <article>
                    <div>
                        <Icon name="image" className="icon-post-img" />
                        <Icon name="gif" className="icon-post-gif" />
                        <Icon name="GrokLogo" className="icon-post-grok-logo" />
                        <Icon name="more" className="icon-post-more" />
                        <Icon name="smaile" className="icon-post-smile" />
                        <Icon name="calendar" className="icon-post-calendar" />
                        <Icon name="location" className="icon-post-location" />
                        <Icon name="flag" className="icon-post-flag" />
                    </div>
                    <div>
                        <button>Postear</button>
                    </div>
                </article>
            </aside>
        </section>
    )
}