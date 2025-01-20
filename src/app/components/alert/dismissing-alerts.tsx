"use client";

import styled from "styled-components";

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
    svg {
        flex-shrink: 0;
        display: inline;
        width: 1rem;
        height: 1rem;
        margin-inline-end: .5rem
    }
    button {
        margin-inline-start: auto;
        margin: -0.375rem;
        border-radius: 0.5rem;
        padding: 0.375rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        svg {
            margin-inline-end: 0rem
        }
    }
    .content {
        width: 100%;
        max-width: 768px;
        padding: 1rem;
        margin-bottom: 0.6rem;
        border-radius: 0.5rem;
        font-size: .8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            justify-content: start;
            align-items: center;

            a {
                font-weight: 600;
                text-decoration: underline;
                &:hover{
                    text-decoration: none;
                }
            }
        }
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


export default function DismissingAlerts() {
    return (
        <Container>
            <h4 className="mt-[40px] font-medium">Dismissing</h4> 
            <div className="content blue" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    A simple info alert with an <a href="#">&nbsp;example link</a>. Give it a click if you like.
                </div>
                <button type="button" className="blue" data-dismiss-target="#alert-1" aria-label="Close">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
            <div className="content red" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    A simple info alert with an <a href="#">&nbsp;example link</a>. Give it a click if you like.
                </div>
                <button type="button" className="red" data-dismiss-target="#alert-1" aria-label="Close">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
            <div className="content green" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    A simple info alert with an <a href="#">&nbsp;example link</a>. Give it a click if you like.
                </div>
                <button type="button" className="green" data-dismiss-target="#alert-1" aria-label="Close">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
            <div className="content yellow" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    A simple info alert with an <a href="#">&nbsp;example link</a>. Give it a click if you like.
                </div>
                <button type="button" className="yellow" data-dismiss-target="#alert-1" aria-label="Close">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
            <div className="content black" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    A simple info alert with an <a href="#">&nbsp;example link</a>. Give it a click if you like.
                </div>
                <button type="button" className="black" data-dismiss-target="#alert-1" aria-label="Close">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
        </Container>
    )
}