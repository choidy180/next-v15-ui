"use client";

import { useState } from "react";
import { HiMiniChevronUp } from "react-icons/hi2";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: calc(100% - 28px);
    margin-top: 28px;
    .head {
        width: 100%;
        padding: 1.25rem;
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.2s all ease-in-out;
        background-color: #DBEAFE;
        border-bottom: 1.4px solid #bbbbbb;

        svg {
            width: 28px;
            height: 28px;
            transform: scale(1.4);
            transition: 0.2s all ease-in-out;
        }

        &.focus {
            background-color: #93C5FD;
            svg {
                transform: scale(1.4) rotate(180deg);
            }
        }
    }
    .content {
        width: 100%;
        height: 0px;
        overflow: hidden;
        padding: 0;
        transition: all 0.2s all ease-in-out;
        &.focus {
            height: auto;
            padding: 1.25rem;
            border: 1.4px solid #CECECE;
        }
    }
    .first {
        border-top-right-radius: 14px;
        border-top-left-radius: 14px;
    }
    &.last {
        .head {
            border-bottom: 0px;
        }
    }
`

export default function BorderlessAccodian() {
    const [focus1, setFocus1] = useState<boolean>(false);
    const [focus2, setFocus2] = useState<boolean>(false);
    const [focus3, setFocus3] = useState<boolean>(false);
    return (
        <Container>
            <div className="container">
                <div className={`head first ${focus1 === true && 'focus'}`} onClick={()=> setFocus1(!focus1)}>
                    <p>아코디언이 무엇인가요?</p>
                    <HiMiniChevronUp/>
                </div>
                <div className={`content ${focus1 === true && 'focus'}`}>
                    <p>아코디언은 웹사이트나 애플리케이션의 사용자 인터페이스 요소로, 접었다 펼칠 수 있는 메뉴나 섹션을 의미합니다.</p>
                </div>
            </div>
            <div className="container">
                <div className={`head ${focus2 === true && 'focus'}`} onClick={()=> setFocus2(!focus2)}>
                    <p>아코디언이 무엇인가요?</p>
                    <HiMiniChevronUp/>
                </div>
                <div className={`content ${focus2 === true && 'focus'}`}>
                    <p>사용자가 한 번에 하나의 섹션만 볼 수 있도록 설계되어, 화면 공간을 효율적으로 사용하고 깔끔한 디자인을 제공합니다.</p>
                </div>
            </div>
            <div className="container last">
                <div className={`head ${focus3 === true && 'focus'}`} onClick={()=> setFocus3(!focus3)}>
                    <p>아코디언이 무엇인가요?</p>
                    <HiMiniChevronUp/>
                </div>
                <div className={`content ${focus3 === true && 'focus'}`}>
                    <p>주름진 구조를 지칭할 때도 사용됩니다. 예를 들어, 접이식 문, 주름이 많은 천 또는 책에서 반복적인 확장과 수축이 가능한 디자인을 아코디언이라고 부르기도 합니다.</p>
                </div>
            </div>
        </Container>
    )
}