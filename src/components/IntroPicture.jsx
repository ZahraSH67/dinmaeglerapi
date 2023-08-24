import styled from "styled-components";
import Img from "../assets/family.png"


const StyledSection = styled.section`
    position: relative;
`

const StyledBigSquare = styled.div`
    width: 447px;
    height: 472px;
    border: 10px solid #162A41;
    position: relative;
    left: 30px;
    top: 30px;
`

const StyledImage = styled.img`
    position: absolute;
`

const StyledLittleSquare = styled.div`
    width: 210px; 
    height:210px;
    background-color: #162A41;
    position: relative;
    left: 280px;
    bottom: 200px;
`

const StyledParagraph = styled.p`
    color: white;
    // width: 128px:
    // height: 132px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    line-height: 80%;
    // text-align: center;
    padding: 70px 0 0 0;
    // border: 2px solid white;
`

const IntroPicture = () =>{
    return(
        <StyledSection className="intro_picture">
              <StyledImage src={Img} />
            <StyledBigSquare />
            <StyledLittleSquare>
                <StyledParagraph>
                    <span className="intro_span">38+</span> 
                    <br/>
                    <span>års mægler-<br/><br/>erfaring</span>
                </StyledParagraph>
            </StyledLittleSquare>

        </StyledSection>
          
    )
}

export default IntroPicture;