/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-return-assign */
import React, { memo, useReducer, createContext, useContext, ReactFragment } from 'react';

interface ComponentListbox {
  displayName: string;
  (props: ListBoxProps<ReactFragment>): JSX.Element;
  Button: React.MemoExoticComponent<(props: DefaultProps<HTMLButtonElement>) => JSX.Element>;
  Label: React.MemoExoticComponent<(props: DefaultProps<ReactFragment>) => JSX.Element>;
  Options: React.MemoExoticComponent<(props: DefaultProps<ReactFragment>) => JSX.Element>;
  Option: React.MemoExoticComponent<(props: OptionsProps<ReactFragment>) => JSX.Element>;
}

interface DefaultProps<T> extends React.DetailedHTMLProps<React.HTMLAttributes<T>, T> {
  children: React.ReactNode;
}

interface ListBoxProps<T> extends DefaultProps<T> {
  value: any;
  onChange: React.SetStateAction<ListBoxProps<ReactFragment>['value']>;
}

interface OptionsProps<T> extends DefaultProps<T> {
  value: any;
}

interface IEventContext {
  onChange(value: unknown): void;
}

type IListContext = [React.ReducerState<ReducerState>, React.Dispatch<React.ReducerAction<ReducerState>>];

type ListActionType = {
  type: ListAction;
  payload?: string;
};

enum ListAction {
  ACTIVE,
  INACTIVE,
  SELECT,
}

const initialState = {
  active: false,
  value: '',
};

type ReducerState = React.Reducer<typeof initialState, ListActionType>;

const ListContext = createContext<IListContext>(null as never);

const EventContext = createContext<IEventContext | null>(null);

const reducer = (state: typeof initialState, action: ListActionType): typeof initialState => {
  switch (action.type) {
    case ListAction.ACTIVE:
      return {
        ...state,
        active: true,
      };
    case ListAction.INACTIVE:
      return {
        ...state,
        active: false,
      };
    case ListAction.SELECT:
      return {
        ...state,
        active: false,
        value: action.payload || '',
      };
    default:
      throw Error('잘못된 호출입니다');
  }
};

const ListBox = memo(({ children, ...props }: ListBoxProps<HTMLDivElement>) => {
  return (
    <ListContext.Provider value={useReducer<ReducerState>(reducer, { ...initialState })}>
      <EventContext.Provider value={{ ...props }}>{children}</EventContext.Provider>
    </ListContext.Provider>
  );
});
ListBox.displayName = 'ListBox';

const Label = memo(({ children }: DefaultProps<HTMLDivElement>) => {
  return <div>{children}</div>;
});
Label.displayName = 'Label';

const Button = memo(({ children, ...props }: DefaultProps<HTMLButtonElement>) => {
  const [state, dispatch] = useContext(ListContext);
  const Toggle = () => {
    if (state.active) {
      dispatch({ type: ListAction.INACTIVE });
    } else {
      dispatch({ type: ListAction.ACTIVE });
    }
  };
  return (
    <button type="button" {...props} onClick={Toggle}>
      {children}
    </button>
  );
});
Button.displayName = 'Button';

const Options = memo(({ children, ...props }: DefaultProps<HTMLDivElement>) => {
  const [state] = useContext(ListContext);
  return (
    <>
      {state.active} {state.active === true && <div {...props}>{children}</div>}
    </>
  );
});
Options.displayName = 'Options';

const Option = memo(({ children, value, ...props }: OptionsProps<HTMLDivElement>) => {
  const [, dispatch] = useContext(ListContext);
  const event = useContext(EventContext);
  const Select = () => {
    dispatch({ type: ListAction.INACTIVE, payload: 'asdf' });
    if (event) {
      event.onChange(value);
    }
  };
  return (
    <div {...props} onClick={Select} role="button" tabIndex={0} aria-hidden="true">
      {children}
    </div>
  );
});
Option.displayName = 'Option';

export default Object.assign(ListBox, { Button, Label, Options, Option }) as unknown as ComponentListbox;
