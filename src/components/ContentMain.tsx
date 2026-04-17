import { GlobalCart } from "./GlobalCart"
import { PostAdd } from "./PostAdd"
import "../styles/ContainMain.css"

export function ContexMainCart() {
    return (
        <>
            <GlobalCart
                content={
                    <PostAdd />
                }
            className="container-main" />
        </>

    )
}