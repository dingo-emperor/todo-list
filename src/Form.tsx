import React from 'react';

type Props = {
    message: string;
    handleChange: any;
    handleSubmit: () => void;
}

const Form: React.FunctionComponent<Props> = (props: Props) => {
    const { message, handleChange, handleSubmit } = props;
    return (
        <div>
            <label>
                {`Enter something`}
                <input type={"text"} value={message} onChange={handleChange} />
            </label>
            <button onClick={handleSubmit}>
                {`Submit`}
            </button>
        </div>
    )
};

export default Form;