import styled from "styled-components";

const StyledNavigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    // border: 1px solid red;
    width: 508px;
    height: 30px;
`
const StyledLink = styled.a`
    color: black;
    text-decoration: none;

`

const Navigation = () => {
    return(
        <StyledNavigation >
            <StyledLink href="#">Boliger til salg</StyledLink>
            <StyledLink href="#">Mæglere</StyledLink>
            <StyledLink href="#">Mine favoritter</StyledLink>
            <StyledLink a href="#">Kontakt os</StyledLink>
        </StyledNavigation>
    )
}
export default Navigation