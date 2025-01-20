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
        &:hover {
            cursor: pointer;
        }

        &.round {
            border-radius: 9999px;
        }
    }
    div.stacked {
        display: flex;
        justify-content: start;
        align-items: center;
        
    }
    div.content {
        position: relative;
        margin-left: -20px;
        &.first {
            margin-left: 0;
        }
        &.last {
            width: 60px;
            height: 60px;
            border-radius: 9999px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #2c3e50;
            cursor: pointer;

            span {
                font-size: 1rem;
                color: #ecf0f1;
            }
        }
        img {
            border: 2px solid #2c3e50;
        }
    }
`

export default function StackedAvatar() {
    return (
        <Container>
            <h4>Stacked Avatar</h4>
            <div className="box">
                <div className="stacked">
                    <div className="content first">
                        <Image
                            src={avatarImage}
                            width={60}
                            height={60}
                            alt="Avatar"
                            className="round"
                        />
                    </div>
                    <div className="content">
                        <Image
                            src={avatarImage2}
                            width={60}
                            height={60}
                            alt="Avatar"
                            className="round"
                        />
                    </div>
                    <div className="content">
                        <Image
                            src={avatarImage}
                            width={60}
                            height={60}
                            alt="Avatar"
                            className="round"
                        />
                    </div>
                    <div className="content">
                        <Image
                            src={avatarImage2}
                            width={60}
                            height={60}
                            alt="Avatar"
                            className="round"
                        />
                    </div>
                </div>
                <div className="stacked">
                    <div className="content first">
                        <Image
                            src={avatarImage}
                            width={60}
                            height={60}
                            alt="Avatar"
                            className="round"
                        />
                    </div>
                    <div className="content">
                        <Image
                            src={avatarImage2}
                            width={60}
                            height={60}
                            alt="Avatar"
                            className="round"
                        />
                    </div>
                    <div className="content">
                        <Image
                            src={avatarImage}
                            width={60}
                            height={60}
                            alt="Avatar"
                            className="round"
                        />
                    </div>
                    <div className="content last" onClick={()=> alert('More Avatar')}>
                        <span>99+</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

