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
    svg {
        flex-shrink: 0;
        display: inline;
        width: 1.125rem;
        height: 1.125rem;
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
        align-items: start;

        div {
            display: flex;
            justify-content: start;
            align-items: center;

            span {
                font-size: 1rem;
                font-weight: 600;
            }

            button {
                svg {
                    width: 16px;
                    height: 16px;
                    margin-inline-end: 0.5rem
                }
                color: white;
                font-weight: 500;
                border-radius: 8px;
                font-size: 0.8rem;
                padding: 6px 12px;
                text-align: center;
                margin-top: 16px;

                &.btn_blue {
                    background-color: #0984e3;
                    border: 1px solid #0984e3;
                    margin-right: 0.75rem;
                }
                &.btn_red {
                    background-color: #ff3f34;
                    border: 1px solid #ff3f34;
                    margin-right: 0.75rem;
                }
                &.btn_green {
                    background-color: #05c46b;
                    border: 1px solid #05c46b;
                    margin-right: 0.75rem;
                }
                &.btn_yellow {
                    background-color: #ff9f1a;
                    border: 1px solid #ff9f1a;
                    margin-right: 0.75rem;
                }
                &.btn_black {
                    background-color: black;
                    border: 1px solid black;
                    margin-right: 0.75rem;
                }
                &.btn_blue_border {
                    color: #0984e3;
                    border: 1px solid #0984e3;
                }
                &.btn_red_border {
                    color: #ff3f34;
                    border: 1px solid #ff3f34;
                }
                &.btn_green_border {
                    color: #05c46b;
                    border: 1px solid #05c46b;
                }
                &.btn_yellow_border {
                    color: #ff9f1a;
                    border: 1px solid #ff9f1a;
                }
                &.btn_black_border {    
                    color: black;
                    border: 1px solid black;
                }
            }
        }
        p {
            margin-top: 8px;
        }
    }
    .blue {
        background-color: #EFF6FF;
        color: #0984e3;
        border: 1px solid #0984e3;
    }
    .red {
        background-color: #FEF2F2;
        color: #ff3f34;
        border: 1px solid #ff3f34;
    }
    .green {
        background-color: #F0FDF4;
        color: #05c46b;
        border: 1px solid #05c46b;
    }
    .yellow {
        background-color: #FEFCE8;
        color: #ff9f1a;
        border: 1px solid #ff9f1a;
    }
    .black {
        background-color: #F9FAFB;
        color: black;
        border: 1px solid #2c3e50;
    }
`

export default function AdditionalContentAlerts() {
    return (
        <Container>
            <h4 className="mt-[40px] font-medium">Additional content</h4> 
            <div className="content blue" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span>This is a info alert</span>
                </div>
                <p>More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <div>
                    <button className="btn_blue">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                        </svg>
                        View More
                    </button>
                    <button className="btn_blue_border">Dismiss</button>
                </div>
            </div>
            <div className="content red" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span>This is a info alert</span>
                </div>
                <p>More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <div>
                    <button className="btn_red">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                        </svg>
                        View More
                    </button>
                    <button className="btn_red_border">Dismiss</button>
                </div>
            </div>
            <div className="content green" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span>This is a info alert</span>
                </div>
                <p>More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <div>
                    <button className="btn_green">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                        </svg>
                        View More
                    </button>
                    <button className="btn_green_border">Dismiss</button>
                </div>
            </div>
            <div className="content yellow" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span>This is a info alert</span>
                </div>
                <p>More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <div>
                    <button className="btn_yellow">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                        </svg>
                        View More
                    </button>
                    <button className="btn_yellow_border">Dismiss</button>
                </div>
            </div>
            <div className="content black" role="alert">
                <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span>This is a info alert</span>
                </div>
                <p>More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <div>
                    <button className="btn_black">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                        </svg>
                        View More
                    </button>
                    <button className="btn_black_border">Dismiss</button>
                </div>
            </div>
        </Container>
    )
}