/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { TestContext } from 'App';
import React, { Children, useContext, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ToastContext } from './toast/ToastContext';

interface TabProps {
  children: React.ReactNode;
}

interface TabChildProps extends TabProps {
  index: number;
}

const List = React.memo((props: TabChildProps) => {
  return <div>{props.children}</div>;
});
List.displayName = 'List';
const Panel = React.memo((props: TabChildProps) => {
  return <div>{props.children}</div>;
});

Panel.displayName = 'Panel';

const Wrapper = (props: TabProps) => {
  const { toast } = useContext(ToastContext);
  console.log('props', props.children);
  const children = Children.map(props.children, (child) => child);
  const Panel = children?.filter((child) => (child as any).type.displayName === 'Panel');
  const List = children?.filter((child) => (child as any).type.displayName === 'List');
  const [index, setIndex] = useState(0);
  const TabEvent = (index: number) => {
    setIndex(index);
  };
  const ShowPanel = useMemo(() => {
    return Panel?.filter((panel) => (panel as any).props.index === index);
  }, [index]);
  return (
    <div>
      <button type="button" onClick={() => toast('안녕')}>
        호출
      </button>
      <div>
        {List?.map((list, i) => {
          return <div onClick={() => TabEvent((list as any).props.index)}>{list}</div>;
        })}
      </div>
      {ShowPanel}
    </div>
  );
};

export { Wrapper, Panel, List };
