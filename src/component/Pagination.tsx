import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

interface PaginationProps {
  prevButton?: boolean;
  lastButton?: boolean;
  totalRows: number;
  pageRows: number;
  showPage: number;
  page: number;
  onChange?: (value: number) => void;
}
const Button = styled.button`
  padding: 0;
  background: 0;
  border: 0;
  height: 20px;
  width: 20px;
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

const showPageNum = ({
  totalRows,
  showPage,
  pageRows,
  page,
}: {
  totalRows: number;
  pageRows: number;
  page: number;
  showPage: number;
}) => {
  const [cursor] = [page];
  const totalPage = Math.ceil(totalRows / pageRows);
  const pageArray: number[] = [];
  for (let i = page; i < page + showPage && i <= totalPage; i += 1) {
    pageArray.push(i);
  }
  return { pageArray, totalPage };
};

const Pagination = ({ pageRows, page, totalRows, showPage, prevButton, lastButton, onChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(page || 1);
  const { pageArray, totalPage } = useMemo(() => {
    return showPageNum({ totalRows, pageRows, page: currentPage, showPage });
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
      {pageArray.map(num => {
        return (
          <Button
            type="button"
            key={num}
            className={num === currentPage ? 'active' : ''}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </Button>
        );
      })}
      <Button onClick={() => setCurrentPage(num => num + 1)}>
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
