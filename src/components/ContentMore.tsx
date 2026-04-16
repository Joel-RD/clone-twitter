import { GlobalCart } from "./GlobalCart";
import { SearchButton } from "./SearchButton";
import { PromoAdd } from "./PromoAdd";
import { UserAdd } from "./userAdd";
import { WhatHappend } from "./WhatHappend";
import "../styles/contentMore.css"

const mulPost = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10];
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
                header={
                    <h3>¿Que esta pasando?</h3>
                }
                content={
                    <section className="whathappend-container"> {
                        mulPost.map(() => (
                            <WhatHappend
                                title="Tendencia en Republica Dominicana"
                                teme="Juan Pablo Duarte"
                            />
                        ))
                    }
                    </section>
                }
                className="posts-trading"
            />

            <GlobalCart
                header={
                    <h3>A quien seguir</h3>
                }
                content={
                    mulPost.map(() => (
                        <UserAdd
                            imgUrl="https://imgs.search.brave.com/MRD_Xz3k4qmtyI-pRA84I1-GA9iBjbbb2TRi6vVEYWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEz/OTA4NjQ0L3Bob3Rv/L3N1cnByaXNlZC1j/YXQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXVXRHZ2M3pn/SDI4cVY4NGFEamtk/RmNsbzg2R2d4bmVp/RVdjbFg4WUtFUFE9"
                            name="Juan"
                            userName="juanPablo-01"
                            titlebutton="Seguir"
                        />
                    ))
                }
                className="user-suggestions"
            />
        </aside>
    );
}