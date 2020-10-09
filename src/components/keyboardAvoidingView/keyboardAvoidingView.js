import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const KeyboardAvoidingView = ({
    enableOnAndroid,
    contentContainerStyle,
    bounces,
    children,
    ...props
}) => {
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={contentContainerStyle}
            enableOnAndroid={enableOnAndroid}
            bounces={bounces}
            {...props}
        >
            {children}
        </KeyboardAwareScrollView>
    );
};

KeyboardAvoidingView.propTypes = {
    enableOnAndroid: PropTypes.bool,
    bounces: PropTypes.bool,
    children: PropTypes.node,
};

KeyboardAvoidingView.defaultProps = {
    enableOnAndroid: false,
    bounces: false,
};

export default KeyboardAvoidingView;
