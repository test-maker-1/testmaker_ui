import React, { useCallback } from "react";
import styled from "styled-components";

const Tag = ({ tag, onDelete }) => {
    const onClick = useCallback(() => {
        onDelete(tag);
    }, []);
    return (
        <TagBox>
            {tag}
            <button onClick={onClick}>❌</button>
        </TagBox>
    );
};

export default Tag;
Tag.propTypes = {};

const TagBox = styled.div`
    display: flex;
    height: 31px;
    width: max-content;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    border-radius: 5px;
    padding: 6px 10px;
    border: 1px solid black;
    margin-right: 10px;
`;
