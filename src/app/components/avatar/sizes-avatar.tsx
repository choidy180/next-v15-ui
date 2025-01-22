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
    div.content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 0.25rem;
        margin-right: 10px;
        cursor: pointer;

        img.avatar60{
            height: 60px;
            object-fit: cover;
        }
        img.avatar80{
            height: 80px;
            object-fit: cover;
        }
        img.avatar100{
            height: 100px;
            object-fit: cover;
        }
        img.avatar140{
            height: 140px;
            object-fit: cover;
        }
        img.avatar200{
            height: 200px;
            object-fit: cover;
        }
        img.avatar260{
            height: 260px;
            object-fit: cover;
        }

        .black-box {
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-color: #000000;
            opacity: 0.4;
        }
        p {
            position: absolute;
            display: none;
            top: 50%;
            transform: translateY(-50%);
            color: white;
            font-size: 1.4rem;
        }
        &:hover {
            .black-box {
                display: block;
            }
            P {
                display: block;
            }
        }
    }
`

export default function SizesAvatar() {
    return (
        <Container>
            <h4>Sizes Avatar</h4>
            <div className="box">
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={60}
                        height={60}
                        alt="Avatar60"
                        className="avatar60"
                    />
                    <div className="black-box"/>
                    <p>60</p>
                </div>
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={80}
                        height={80}
                        alt="Avatar80"
                        className="avatar80"
                    />
                    <div className="black-box"/>
                    <p>80</p>
                </div>
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={100}
                        height={100}
                        alt="Avatar100"
                        className="avatar100"
                    />
                    <div className="black-box"/>
                    <p>100</p>
                </div>
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={140}
                        height={140}
                        alt="Avatar140"
                        className="avatar140"
                    />
                    <div className="black-box"/>
                    <p>140</p>
                </div>
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={200}
                        height={200}
                        alt="Avatar200"
                        className="avatar200"
                    />
                    <div className="black-box"/>
                    <p>200</p>
                </div>
                <div className="content">
                    <Image
                        src={avatarImage}
                        width={260}
                        height={260}
                        alt="Avatar260"
                        className="avatar260"
                    />
                    <div className="black-box"/>
                    <p>260</p>
                </div>
            </div>
        </Container>
    )
}

