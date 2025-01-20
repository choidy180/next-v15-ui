"use client";

import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: calc(100vw - 28px);
    margin-top: 28px;
    div {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        margin-top: 16px;
    }
    h4 {
        width: 100%;
        font-size: 1.5rem;
        margin-top: 40px;
        margin-bottom: 4px;
    }
    svg {
        width: 60px;
        height: 60px;
        color: #7f7f7f;
        background-color: #EDEDED;
        border-radius: 0.25rem;
        padding: 4px;

        &.round {
            border-radius: 9999px;
        }
    }
`

export default function PlaceholderIconAvatar() {
    return (
        <Container>
            <h4>Placeholder Icon Avatar</h4>
            <div>
                <svg fill="currentColor" className="round" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
            </div>
        </Container>
    )
}

