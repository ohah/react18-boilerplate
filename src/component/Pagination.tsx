import paginationCalculator, { IPageCalculatorOptions } from 'pagination-calculator2';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

interface PaginationProps extends IPageCalculatorOptions {
  onChange?: (value: number) => void;
}
const Button = styled.button`
  padding: 0;
  background: 0;
  border: 0;
  height: 45px;
  width: 45px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PaginationWrapper = styled.div`
  margin: 0 auto;
  & ${Button}.active {
    background-color: #b5b5b8;
  }
  display: flex;
  align-items: center;
`;

const Pagination = ({ total, current, pageSize, pageLimit, onChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(current || 1);
  const {
    total: _total,
    current: _current,
    pageCount,
    pages,
    next,
    previous,
    showingEnd,
    showingStart,
  } = useMemo(() => {
    return paginationCalculator({
      total,
      current: currentPage,
      pageSize,
      pageLimit,
    });
  }, [currentPage]);
  useEffect(() => {
    if (onChange) {
      onChange(currentPage);
    }
  }, [currentPage]);
  return (
    <PaginationWrapper>
      <Button onClick={() => setCurrentPage(num => (num !== 1 ? num - 1 : 1))}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
        </svg>
      </Button>
      {pages.map(num => {
        return (
          <Button
            type="button"
            key={num}
            className={num === currentPage ? 'active' : ''}
            onClick={() => {
              if (typeof num === 'number') {
                setCurrentPage(num);
              }
            }}
          >
            {num}
          </Button>
        );
      })}
      <Button
        onClick={() => {
          setCurrentPage(num => (next === num + 1 ? next : num));
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
        </svg>
      </Button>
      {currentPage}
    </PaginationWrapper>
  );
};

export default Pagination;
