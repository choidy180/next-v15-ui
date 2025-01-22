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
        gap: 60px;
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
        margin-right: 10px;
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
        justify-content: start;
        align-items: center;
    }
    div.text {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;

        h4 {
            margin-top: 0px;
            font-size: 1.5rem;
            line-height: 1.5rem;
        }
        p {
            color: #7f8c8d;
            font-size: 1.25rem;
            line-height: 1.25rem;
        }
    }
`

export default function TextAvatar() {
    return (
        <Container>
            <h4>Text Tooltip</h4>
            <div className="box">
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={60}
                        height={60}
                        alt="Avatar"
                        className="round"
                    />
                    <div className="text">
                        <h4>Image-1</h4>
                        <p>Join us January</p>
                    </div>
                </div>
                <div className="content">
                    <Image
                        src={avatarImage2}
                        width={60}
                        height={60}
                        alt="Avatar"
                        className=""
                    />
                    <div className="text">
                        <h4>Image-1</h4>
                        <p>Join us January</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

