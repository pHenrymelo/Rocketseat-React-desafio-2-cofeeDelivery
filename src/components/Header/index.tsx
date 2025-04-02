import { HeaderContainer, LocalityTag } from "./styles";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/Logo";
import { ShoppingCart } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            <nav>
            <Logo />
            <div>
                <LocalityTag />
                <NavLink to="/checkout" title="Checkout">
                    <ShoppingCart />
                </NavLink>
            </div>
            </nav>
        </HeaderContainer>
    )
}