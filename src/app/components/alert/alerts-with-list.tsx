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
        flex-direction: column;
        justify-content: start;
        align-items: center;

        div {
            display: flex;
            justify-content: start;
            align-items: center;
            width: 100%;
        }

        ul {
            width: 100%;
            margin-top: 6px;
            list-style: disc;
            list-style-position: inside;
        }
        li {
            margin-left: 24px;
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
`

export default function AlertsWithList() {
    return (
        <Container>
            <h4 className="mt-[40px] font-medium">Alerts with list</h4> 
            <div className="content blue" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span>Ensure that these requirements are met:</span>
                </div>
                <ul>
                    <li>At least 10 characters (and up to 100 characters)</li>
                    <li>At least one lowercase character</li>
                    <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                </ul>
            </div>
            <div className="content red" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span>Ensure that these requirements are met:</span>
                </div>
                <ul>
                    <li>At least 10 characters (and up to 100 characters)</li>
                    <li>At least one lowercase character</li>
                    <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                </ul>
            </div>
        </Container>
    )
}