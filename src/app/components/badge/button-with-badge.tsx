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

        button {
            position: relative;
            display: inline-flex;
            align-items: center;
            padding: 0.75rem;
            font-size: 1rem;
            font-weight: 500;
            text-align: center;
            color: white;
            background-color: #3742fa;
            border-radius: 8px;
            &:hover {
                background-color: #6eadff;
            }

            svg {
                width: 28px;
                height: 28px;
            }
        }

        span {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            font-size: 12px;
            background-color: #DBEAFE;
            color: #3742fa;
            border-radius: 9999px;
            margin-left: 8px;
        }
    }
`

export default function ButtonWithBadge(){
    return (
        <Container>
            <h4>Notification Badge</h4>

            <div>
                <button type="button">
                    Message
                    <span>2</span>
                </button>
            </div>
        </Container>
    )
}