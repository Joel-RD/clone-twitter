import {SliderNav} from "../components/ContentNav"
import { ContentMore } from "../components/ContentMore"
import {ContexMainCart} from "../components/ContentMain"

import "../styles/home.css"

export function ViewHome () {
    return (
        <header className="header-content">
            <SliderNav />
            <main>
                <ContexMainCart />
            </main>
            <ContentMore />
        </header>
    )
}