import React from "react";
import styled from "styled-components";

interface TooltipProps {
    title: string,
    content: string,
    children: React.ReactNode,
}

const Message = styled.span`
    display: none;
    background-color: #eef3fd;
    padding: 1rem;
    width: fit-content;
    position: absolute;
    white-space: nowrap;
    transfrom:translateX(-50%);
`;
const Wrapper = styled.div`
    display: block;
    position: relative;
    &:hover ${Message} {
        display: block;
    }
`;

function Tooltip(props: TooltipProps) {
    return (
        <Wrapper>
        {props.children}
        <Message>
            <div>{props.title}</div>
            <div>{props.content}</div>
        </Message>
        </Wrapper>
    )
}

export default Tooltip;