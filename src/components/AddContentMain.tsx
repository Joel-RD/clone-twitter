import { CardContentMain } from "./CardContentMain";
import { GlobalCart } from "./GlobalCart";
import "../styles/AddContentMain.css"

const listpost = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export function AddContentMain() {
    return (
        <GlobalCart content={
            <> {
                listpost.map(() => (
                    <CardContentMain
                        name="Eudy Joel"
                        user="@RD_01"
                        hora="1d"
                        imgUrl="https://imgs.search.brave.com/tDyys_UsFZKHdb3FYq5W0AkKKZBFT6TgoFaSra4lAOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL2VkZGll/YW50b25pby9pL3Jh/dy9tYXN0ZXIvaW1n/Y2F0LnBuZw"
                    />
                ))
            }
            </>
        }
            className="main-post" />
    )
}