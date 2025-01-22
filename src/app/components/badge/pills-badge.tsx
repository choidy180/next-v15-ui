"use client";

import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: calc(100vw - 28px);
    margin-top: 28px;

    h4 {
        width: 100%;
        font-size: 1.5rem;
        margin-top: 20px;
        margin-bottom: 4px;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        margin-top: 16px;

        span {
            font-size: 1rem;
            padding: 4px 20px;
            border-radius: 9999px;
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }
    }
`

export default function PillsBadge(){
    return (
        <Container>
            <h4>Pills Badge</h4>

            <div>
                <span className="blue">Blue</span>
                <span className="dark">Dark</span>
                <span className="red">Red</span>
                <span className="green">Green</span>
                <span className="yellow">Yellow</span>
                <span className="indigo">Indigo</span>
                <span className="purple">Purple</span>
                <span className="pink">Pink</span>
            </div>
        </Container>
    )
}