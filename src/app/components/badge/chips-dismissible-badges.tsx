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
            padding: 4px 12px;
            border-radius: 4px;
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }
        button {
            padding: 4px;
        }
        svg {
            width: 12px;
            height: 12px;
            margin-left: 10px;
        }
    }
`

export default function ChipsDismissibleBadge(){
    return (
        <Container>
            <h4>Chips Dismissible Badges</h4>

            <div>
                <span className="blue">
                    Blue
                    <button type="button" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </span>
                <span className="dark">
                    Dark
                    <button type="button" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </span>
                <span className="red">
                    Red
                    <button type="button" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </span>
                <span className="green">
                    Green
                    <button type="button" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </span>
                <span className="yellow">
                    Yellow
                    <button type="button" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </span>
                <span className="indigo">
                    Indigo
                    <button type="button" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </span>
                <span className="purple">
                    Purple
                    <button type="button" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </span>
                <span className="pink">
                    Pink
                    <button type="button" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </span>
            </div>
        </Container>
    )
}