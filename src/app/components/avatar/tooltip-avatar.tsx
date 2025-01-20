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
        padding-top: 40px;
    }
    h4 {
        width: 100%;
        font-size: 1.5rem;
        margin-top: 40px;
        margin-bottom: 4px;
    }
    img {
        border-radius: 0.25rem;
        &:hover {
            cursor: pointer;
        }

        &.round {
            border-radius: 9999px;
        }
    }
    div.content {
        position: relative;
        .tooltip {
            display: none;
            width: 112px;
            position: absolute;
            padding: 12px 20px;
            background-color: #34495e;
            color: #ecf0f1;
            font-size: 0.85rem;
            border-radius: 14px;
            top: 0;
            left: 50%;
            transform: translateX(-50%) translateY(calc(-100% - 8px));
            &::after{
                content: '';
                width: 14px;
                height: 14px;
                background-color: #34495e;
                position: absolute;
                bottom: -4px;
                left: calc(50% + 5px);
                transform: translateX(-50%) translateY(50%);
                rotate: 45deg;
                border-radius: 2px;
            }
        }
        &:hover {
            .tooltip {
                display: block;
            }
        }
    }
`

export default function TooltipAvatar() {
    return (
        <Container>
            <h4>Avatar Tooltip</h4>
            <div className="box">
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={60}
                        height={60}
                        alt="Avatar"
                        className="round"
                    />
                    <div className="tooltip">
                        <span>IMAGE-1</span>
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
                    <div className="tooltip">
                        <span>IMAGE-2</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

