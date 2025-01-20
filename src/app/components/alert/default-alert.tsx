"use client";

import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    max-width: calc(100vw - 28px);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    h4 {
        font-size: 1.5rem;
        margin-top: 40px;
        margin-bottom: 4px;
    }
    .content {
        width: 100%;
        max-width: 768px;
        padding: 1rem;
        margin-bottom: 0.6rem;
        border-radius: 0.5rem;
        font-size: .8rem;
    }
    .blue {
        background-color: #EFF6FF;
        color: #0984e3;
    }
    .red {
        background-color: #FEF2F2;
        color: #ff3f34;
    }
    .green {
        background-color: #F0FDF4;
        color: #05c46b;
    }
    .yellow {
        background-color: #FEFCE8;
        color: #ff9f1a;
    }
    .black {
        background-color: #F9FAFB;
        color: black;
    }
`

export default function DefaultAlert() {
    return (
        <Container>
            <h4 className="mt-[40px] font-medium">Default alert</h4> 
            <div className="content blue" role="alert">
                <span>Info alert!</span> Change a few things up and try submitting again.
            </div>
            <div className="content red" role="alert">
                <span>Danger alert!</span> Change a few things up and try submitting again.
            </div>
            <div className="content green" role="alert">
                <span>Success alert!</span> Change a few things up and try submitting again.
            </div>
            <div className="content yellow" role="alert">
                <span>Warning alert!</span> Change a few things up and try submitting again.
            </div>
            <div className="content black" role="alert">
                <span>Dark alert!</span> Change a few things up and try submitting again.
            </div>
        </Container>
    )
}