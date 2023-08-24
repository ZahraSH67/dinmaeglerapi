import styled from "styled-components";
import {BsHouseDoorFill} from "react-icons/bs";
import {MdOtherHouses} from "react-icons/md";

const StyledSection = styled.section`
    // border: 1px solid red;
    box-sizing: border-box;
    width: 540px;
    // border: 1px solid red;
    position: relative;
    left: 650px;
    bottom: 700px;

`

const StyledBigDiv = styled.div`
    display: flex;
    flex-direction: row;
    // border: 2px solid red;
    justify-content: center;
    align-items: center;
    width: 490px;
    height: 70px;
`

const StyledMiddleDiv = styled.div`
    display: flex;
    flex-direction: row;
    // border: 2px solid red;
    justify-content: space-between;
    align-items: center;
    // border: 2px solid green;
    width: 190px;
    height: 70px;
    padding: 0 40px;


`
const StyledLittleDiv = styled.div`
    display: flex;
    flex-direction: column;
    // border: 2px solid blue;
    width: 100px;
    height: 70px;
    // padding: -30px 0;
    box-sizing: border-box;
    line-height: 1%;


`

const StyledMdOtherHouses = styled(MdOtherHouses)`
    width: 42px;
    height: 42px;
`
const StyledBsHouseDoorFill = styled(BsHouseDoorFill)`
    width: 42px;
    height: 42px;
`

const IntroductionFirstPart = () => {
    return(
        <StyledSection className="introduction_first_part">
            <h3 className="intro_thirdtitle">Vi har fulgt danskerne hjem i snart 4 årtier</h3>
            <h6 className="intro_sixthtitle">Det synes vi siger noget om os!</h6>
            <p>It is a long established fact that a reader will be distracted by
                 the readable content of a page when looking at its layout. 
                 The point of using Lorem Ipsum is that it has normal distribution.
            </p>
            <p>It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout.
            </p>

            <StyledBigDiv>

                <StyledMiddleDiv>
                    <StyledMdOtherHouses />
                    <StyledLittleDiv>
                        <p>4829</p>
                        <p>boliger solgt</p>
                    </StyledLittleDiv>
                </StyledMiddleDiv>


                <StyledMiddleDiv>
                    <StyledBsHouseDoorFill />
                    <StyledLittleDiv>
                        <p>158</p>
                        <p>boliger til salg</p>
                    </StyledLittleDiv>
                </StyledMiddleDiv>

            </StyledBigDiv>

        </StyledSection>
    )
   
}

export default IntroductionFirstPart;