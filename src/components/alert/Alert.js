import React from 'react';
import { oneOfType, element, string, shape } from 'prop-types';

// styles
import { Container } from './alert.styles';

function Alert(props) {
    const { children, intent } = props;
    let message = children;

    if (children?.response) {
        message = children?.response?.data;
    } else if (children.length > 100) {
        message = 'An error occurred trying to make your request.';
    }

    return (
        <Container intent={intent} data-automation="errorMsg">{message}</Container>
    );
}

Alert.propTypes = {
    children: oneOfType([
        string,
        element,
        shape()
    ]),
    intent: string
};

Alert.defaultProps = {
    children: '',
    intent: 'info'
};

export default Alert;
