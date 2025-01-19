"use client";

import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    h4 {
        font-size: 1.5rem;
        margin-top: 40px;
        margin-bottom: 4px;
    }
    svg {
        flex-shrink: 0;
        display: inline;
        width: 1rem;
        height: 1rem;
        margin-inline-end: .5rem
    }
    .content {
        width: 100%;
        max-width: 768px;
        padding: 1rem;
        margin-bottom: 0.6rem;
        border-radius: 0.5rem;
        font-size: .8rem;
        display: flex;
        justify-content: start;
        align-items: center;
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

export default function AlertsWithIcon() {
    return (
        <Container>
            <h4 className="mt-[40px] font-medium">Alerts with icon</h4> 
            <div className="content blue" role="alert">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span>Info alert!</span> Change a few things up and try submitting again.
            </div>
            <div className="content red" role="alert">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span>Danger alert!</span> Change a few things up and try submitting again.
            </div>
            <div className="content green" role="alert">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span>Success alert!</span> Change a few things up and try submitting again.
            </div>
            <div className="content yellow" role="alert">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span>Warning alert!</span> Change a few things up and try submitting again.
            </div>
            <div className="content black" role="alert">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span>Dark alert!</span> Change a few things up and try submitting again.
            </div>
        </Container>
    )
}