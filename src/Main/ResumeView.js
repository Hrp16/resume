import React from "react";
import styled from "styled-components";
import coverImg from "../images/1682955852463.jpeg";

const ResumeView = () =>{
    return (
        <Main>
            <Head>
                <img alt="" src={coverImg} />
            </Head>
        </Main>
    )
};
const Main = styled.main``;

const Head = styled.header`
img {
    width: 100%;
}
`;

export default ResumeView;