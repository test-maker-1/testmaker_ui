import React, { useCallback, useState, useRef } from "react";
import styled from "styled-components";
import Tag from "./Tag";

const TagInputBox = (props) => {
    const inputRef = useRef();
    const [tags, setTags] = useState([]);
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const tag = inputRef.current.value;

        const exists = tags.find((t) => t === tag);
        if (exists) return;

        setTags((item) => [{ tag }, ...item]);
        inputRef.current.value = "";
    }, []);

    const onDelete = useCallback((tag) => {
        setTags((items) => items.filter((item) => item.tag !== tag));
    }, []);

    return (
        <TagContainer>
            <form onSubmit={onSubmit}>
                <Input ref={inputRef} type="text" placeholder="태그 검색" />
            </form>
            <ScrollTags>
                <TagsParent>
                    {tags.length !== 0
                        ? tags.map((tag) => (
                              <Tag
                                  key={tag.tag}
                                  tag={tag.tag}
                                  onDelete={onDelete}
                              />
                          ))
                        : null}
                </TagsParent>
            </ScrollTags>
        </TagContainer>
    );
};
export default TagInputBox;

const TagContainer = styled.div`
    display: inline-block;
    max-width: ${({ theme: { widths } }) => widths.main}px;
    width: 100%;
`;

const Input = styled.input`
    width: -webkit-fill-available;
    height: 40px;
    padding: 6px 10px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 16px;
`;

const TagsParent = styled.div`
    display: flex;
`;

const ScrollTags = styled.div`
    max-width: ${({ theme: { widths } }) => widths.main}px;
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
`;
