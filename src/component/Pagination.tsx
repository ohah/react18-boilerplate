/* eslint-disable react/jsx-props-no-spreading */
import {useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';

interface PaginationProps {
  count: number;
  color?: string;
  prevButton?: boolean;
  lastButton?: boolean;
  page?: number;
  onChange?: (value: number) => void;
}
const PaginationWrapper = styled.div<PaginationProps>`
  display: flex;
  & button.active {
    color: ${props => props.color};
  }
`;

const Pagination = ({page, count, color, prevButton, lastButton, onChange}: PaginationProps) => {
  const [_page, setPage] = useState(page || 1);
  useEffect(() => {
    if (onChange) {
      onChange(_page);
    }
  }, [_page]);
  return (
    <PaginationWrapper color={color} count={count}>
      {Array.from(new Array(10).fill(0), (x, i) => i + 1).map((value, i) => {
        return (
          <button type="button" key={value} className={value === _page ? 'active' : ''} onClick={() => setPage(value)}>
            {value}
          </button>
        );
      })}
    </PaginationWrapper>
  );
};

export default Pagination;
