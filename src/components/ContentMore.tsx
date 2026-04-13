import { GlobalCart } from "./GlobalCart";
import { SearchButton } from "./SearchButton";
import { PromoAdd } from "./PromoAdd";
import { UserAdd } from "./userAdd";
import { WhatHappend } from "./WhatHappend";
import "../styles/contentMore.css"

export function ContentMore() {
    return (
        <aside className="content-more">
            <SearchButton className="searchBar" />

            <GlobalCart
                content={
                    <PromoAdd
                        title="Subscribete a Premium"
                        desc="50 % de descuento"
                        describtion="Despídete de los anuncios, consulta tus estadísticas, aplica boost a las respuestas y aprovecha más de 20 características."
                        titleButton="Subscribete"
                    />
                }
                className="promo-section"
            />

            <GlobalCart
                content={
                    <WhatHappend 
                        title="Qué está pasando" 
                        teme="Tendencia global" 
                    />
                }
                className="posts-section"
            />

            <GlobalCart
                content={
                    <UserAdd
                        imgUrl="https://example.com/profile.jpg"
                        name="Usuario Ejemplo"
                        userName="@usuario"
                        titlebutton="Seguir"
                    />
                }
                className="user-suggestions"
            />
        </aside>
    );
}