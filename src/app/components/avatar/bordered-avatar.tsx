"use client";

import styled from "styled-components";
import avatarImage from '../../../../public/avatar/avatar_image.jpg'
import Image from "next/image";

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
    img {
        border-radius: 0.25rem;
        padding: 4px;
        border: 2px solid #c7c7c7;
        height: 60px;
        object-fit: cover;
        &.round {
            border-radius: 9999px;
        }
    }
`

export default function BorderedAvatar() {
    return (
        <Container>
            <h4>Default Avatar</h4>
            <div>
                <Image
                    src={avatarImage}
                    width={60}
                    height={60}
                    alt="..."
                    className="round"
                />
                <Image
                    src={avatarImage}
                    width={60}
                    height={60}
                    alt="..."
                    className=""
                />
            </div>
        </Container>
    )
}

