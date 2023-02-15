import * as React from 'react';

type Props = {
    list: Array<string>;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const List: React.FunctionComponent<Props> = (props: Props) => {
    const list: Array<string> | undefined = props.list;
    const handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void = props.handleClick;
    const listItems = list.map((message: string) => {
        return (
            <li key={message}>
                <button onClick={handleClick}> {message} </button>
            </li>
        )});
    return (
        <ul> {listItems} </ul>
    );
}

export  default List;