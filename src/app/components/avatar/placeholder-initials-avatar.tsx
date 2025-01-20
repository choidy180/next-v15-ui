"use client";

import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: calc(100vw - 28px);
    margin-top: 28px;
    div.box {
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
    div.content {
        width: 60px;
        height: 60px;
        color: #D1D5DB;
        background-color: #4B5563;
        border-radius: 0.25rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &.round {
            border-radius: 9999px;
        }
        span {
            font-size: 1.25rem;
        }
    }
`

export default function PlaceholderInitialsAvatar() {
    return (
        <Container>
            <h4>Placeholder Initials Avatar</h4>
            <div className="box">
                <div className="content round">
                    <span>MS</span>
                </div>
                <div className="content">
                    <span>MS</span>
                </div>
            </div>
        </Container>
    )
}

