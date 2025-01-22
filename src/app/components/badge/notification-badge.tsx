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
            position: absolute;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            font-size: 10px;
            background-color: #EA2027;
            color: white;
            border: 2px solid white;
            border-radius: 9999px;
            top: -0.5rem;
            inset-inline-end: -0.5rem
        }
    }
`

export default function NotificationBadge(){
    return (
        <Container>
            <h4>Notification Badge</h4>

            <div>
                <button type="button">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                    <span>20</span>
                </button>
            </div>
        </Container>
    )
}