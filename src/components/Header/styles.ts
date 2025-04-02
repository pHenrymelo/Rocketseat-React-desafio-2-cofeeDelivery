import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    height: 6.5rem;
    padding: 2rem 6rem;

    nav {
        flex: 1;
        display: flex;
        justify-content: space-between;

        div{
            display: flex;
            gap: 1rem;
            
        }

        a:last-child{
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: ${props => props.theme["yellow-light"]};

        svg{
            color: ${props => props.theme["yellow-dark"]};
        }


    }


    }

`

export const LocalityTag = styled.span`
    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple"]};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.3;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;
    border-radius: 8px;

    MapPin{
        color: ${props => props.theme["purple-dark"]};
    }

    

`