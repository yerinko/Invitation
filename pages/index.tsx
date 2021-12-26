import Head from 'next/head'
import styled from "styled-components";
// import Header from "../components/Header";
import React, {useState} from "react";
import Animation from "../components/common/lottie/Animation";
import Snows from "../components/common/snow/snow";
import TextAnimation from "../components/common/lottie/textAnimation";
import HatAnimation from "../components/common/lottie/HatAnimation";


export default function Home() {
    const [ page, setPage ] = useState("home");
    return (
        <div  style={{background: "#c54245"}}>
            {/*<div navPage={page}/>*/}
            <div>
            <HomeBlock>
                <Snows color="#f7ecd3"/>
                <Head>
                    <title>yerinko</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Mains>
                    <div className="top">
                        <HatAnimation/>
                        <h1>Merry<br/>
                            Christmas!</h1>
                        <h2>호야네 크리스마스파티에 초대합니다</h2>
                        <Animation/>
                    </div>


                    <Container>
                        <BannerWrapper>

                            <ul>
                                <li>
                                    <ImageWrapper>
                                        <div>
                                            <h2>안녕 친구들아 호호호 메리 크리스마스!</h2>
                                            {/*<br/>*/}
                                            {/*<h2>Place: 호야네집</h2>*/}
                                            {/*<h2>Date: 2021년 12월25일</h2>*/}
                                            {/*<h2>Dress Code: RED & GREEN</h2>*/}
                                        </div>
                                    </ImageWrapper>
                                </li>
                                <li>
                                    <ImageWrapper2>
                                        <div>
                                            <h2>장소🎄: 호야네집</h2>
                                            <h2>일시🎄: 2021년 12월25일</h2>
                                            <h2>🤶🏻Dress Code: RED & GREEN🎅🏻</h2>
                                        </div>
                                    </ImageWrapper2>
                                </li>
                                <li>

                                </li>
                                <li>

                                </li>
                            </ul>
                        </BannerWrapper>
                    </Container>
                </Mains>
            </HomeBlock>
            </div>
        </div>
    );
};

const HomeBlock = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c54245;
`
const Mains = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 4em 0 0 0;
  }
  h1 {
      color: #f7ecd3;
      font-size: 4em;
      font-weight: 700;
      line-height: 1.2em;
  }
  h2 {
    color: #f5b31e;
    font-size: 1.5em;
    font-weight: 700;
    line-height: 2em;
    margin-left: 3px;
  }
 `
const Container = styled.div`
    width: 100%;
    height: 100%;
    float: left;
`
const BannerWrapper = styled.div`
    width: 100%;
    float: left;
    ul {
            margin-top: 4em;
    }
    li {
        height: 100%;
        border-radius: 20px;
        margin-bottom: 5em;
    }
`
const ImageWrapper = styled.div`
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: #006400;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`
const ImageWrapper2 = styled.div`
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: #f5b31e;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        h2 {
            color: #006400;
        }
`
const Image = styled.img`
    width: 50%;
    height: 100%;
`