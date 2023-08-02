import React from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { TopBar } from "./TopBar";

type ContentProps = {
    children: React.ReactNode;
}

const Div = styled.div`

    background-color: #f3f3f3;
    padding: 18px 26px;
    overflow-y: scroll;
    max-height: 100vh;
    width: 100%;
    color: #222222;

    .content {
        max-width: 1550px;
        margin: auto;
    }


    @media screen and (max-width: 800px) {
        padding: 0px 26px;
    }

`;

export function Content(props: ContentProps) {
    return (
        <Div>
            <div className="content">
                <TopBar />
                <div style={{ minHeight: 'calc(100vh - 120px)' }}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </Div>
    );
}