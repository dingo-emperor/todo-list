type stateType = {
    message: {
        message: string;
    },
    list: {
        todo_list: Array<string>;
        done_list: Array<string>;
    }
};

export default stateType;