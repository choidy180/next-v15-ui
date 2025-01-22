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
        align-items: start;
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
        flex-direction: column;
        justify-content: start;
        align-items: start;
        width: 254px;

        .box-content {
            display: none;
            width: 100%;
            margin-top: 4px;
            border-radius: 14px;
            min-height: 100px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            .text {
                padding: 13.5px 18px;
            }            
            p {
                font-size: 1rem;
                line-height: 1.1rem;
                color: black;
            }
        }
        &:hover {
            .box-content{
                display: block;
            }
        }
    }
    div.text {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        border-bottom: 1.4px solid #DDDDDD;

        span {
            color: #000000;
            font-size: 1rem;
            line-height: 1rem;
        }
        p {
            color: #000000;
            font-size: 1rem;
            padding: 10px 0;
            cursor: pointer;
        }

        &.last {
            border: none;
        }
    }
`

export default function UserDropdownAvatar() {
    return (
        <Container>
            <h4>User Dropdown Avatar</h4>
            <div className="box">
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={60}
                        height={60}
                        alt="Avatar"
                        className="round"
                    />
                    <div className="box-content">
                        <div className="text">
                            <span>Example Image</span>
                            <span>Image1@example.com</span>
                        </div>
                        <div className="text">
                            <p>Dashboard</p>
                            <p>Settings</p>
                            <p>Earnings</p>
                        </div>
                        <div className="text last">
                            <p>Sign out</p>
                        </div>
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
                    <div className="box-content">
                        <div className="text">
                            <span>Example Image</span>
                            <span>Image1@example.com</span>
                        </div>
                        <div className="text">
                            <p>Dashboard</p>
                            <p>Settings</p>
                            <p>Earnings</p>
                        </div>
                        <div className="text last">
                            <p>Sign out</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

