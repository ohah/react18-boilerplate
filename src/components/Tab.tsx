/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React, { Children, forwardRef, Ref, useMemo, useState } from 'react';
import styled from 'styled-components';

interface TabProps {
  children: React.ReactNode;
}

interface TabChildProps extends TabProps {
  index: number;
}

const TabHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;
const TabButton = styled.div`
  display: flex;
  cursor: pointer;
  flex-grow: 1;
  padding: 10px;
  &.active {
    border-bottom: 2px solid #1976d2;
    color: #1976d2;
  }
`;
const TabContextWrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const TabWrapper = styled.div`
  border: 1px solid #ccc;
`;

const Wrapper = (props: TabProps) => {
  const [index, setIndex] = useState<number>(0);
  const children = Children.map(props.children, child => child);
  const Panel = children?.filter(child => (child as any).type.displayName === 'Panel');
  const Context = children?.filter(child => (child as any).type.displayName === 'Context');
  const ContextChildren = useMemo(() => {
    return Context?.filter(
      context => ((context as any).props as React.PropsWithChildren<TabChildProps>).index === index,
    );
  }, [index]);
  return (
    <TabWrapper>
      <TabHeader>
        {Panel?.map((panel, i) => {
          return (
            <TabButton
              onClick={() => setIndex(i)}
              key={i}
              className={index === (panel as any).props.index ? 'active' : ''}
            >
              {panel}
            </TabButton>
          );
        })}
      </TabHeader>
      <TabContextWrapper>{ContextChildren}</TabContextWrapper>
    </TabWrapper>
  );
};
const Panel = forwardRef((props: TabChildProps, ref: Ref<HTMLDivElement>) => {
  return <div ref={ref}>{props.children}</div>;
});
Panel.displayName = 'Panel';
const Context = forwardRef((props: TabChildProps, ref: Ref<HTMLDivElement>) => {
  return <div ref={ref}>{props.children}</div>;
});
Context.displayName = 'Context';

export { Wrapper, Panel, Context };
