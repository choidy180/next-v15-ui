"use client";

import styled from "styled-components";
import avatarImage from '../../../../public/avatar/avatar_image.jpg';
import avatarImage2 from '../../../../public/avatar/avatar_image2.jpg';
import Image from "next/image";

const Container = styled.div`
    width: 100%;
    max-width: calc(100vw - 28px);
    margin-top: 28px;
    div.box {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 20px;
        margin-top: 16px;
    }
    h4 {
        width: 100%;
        font-size: 1.5rem;
        margin-top: 40px;
        margin-bottom: 4px;
    }
    img {
        border-radius: 0.25rem;
        width: 60px;
        height: 60px;
        object-fit: cover;
        &:hover {
            cursor: pointer;
        }

        &.round {
            border-radius: 9999px;
        }
    }
    div.content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &.round {
            border-radius: 9999px;
        }
    }
    .dot {
        position: absolute;
        width: 14px;
        height: 14px;
        border: 1px solid #2c3e50;
        border-radius: 9999px;
    }
    .red {
        background-color: #ff3f34;
    }
    .green {
        background-color: #2ecc71;
    }
    .top-right {
        top: 0px;
        right: 0px;
    }
    .bottom-right {
        bottom: 0px;
        right: 0px;
    }

    .square-top-right {
        top: -4px;
        right: -4px;
    }
    .square-bottom-right {
        bottom: -4px;
        right: -4px;
    }

`

export default function DotIndicatorAvatar() {
    return (
        <Container>
            <h4>Dot Indicator Avatar</h4>
            <div className="box">
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={60}
                        height={60}
                        alt="Avatar"
                        className="round"
                    />
                    <div className="dot green top-right"/>
                </div>
                <div className="content">
                    <Image
                        src={avatarImage2}
                        width={60}
                        height={60}
                        alt="Avatar"
                        className=""
                    />
                    <div className="dot red top-right square-top-right"/>
                </div>
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={60}
                        height={60}
                        alt="Avatar"
                        className="round"
                    />
                    <div className="dot green bottom-right"/>
                </div>
                <div className="content">
                    <Image
                        src={avatarImage2}
                        width={60}
                        height={60}
                        alt="Avatar"
                        className=""
                    />
                    <div className="dot red bottom-right square-bottom-right"/>
                </div>
            </div>
        </Container>
    )
}

