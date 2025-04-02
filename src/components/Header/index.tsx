import { HeaderContainer, LocalityTag } from "./styles";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/Logo";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            <nav>
                <NavLink to="/" title="Home">
                    <Logo />
                </NavLink>
            <div>
                <LocalityTag>
                    <MapPin size={24} weight="fill" />
                    Itapajé, CE
                </LocalityTag>
                <NavLink to="/checkout" title="Checkout">
                    <ShoppingCart size={24} weight="fill"/>
                </NavLink>
            </div>
            </nav>
        </HeaderContainer>
    )
}