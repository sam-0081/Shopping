import React from 'react';
import {ErrorMessage as HookFormErrorMessage} from '@hookform/error-message';

const ErrorMessage = ({errors, name}) => (
    <HookFormErrorMessage
        errors={errors}
        name={name}
        render={({messages}) =>
            messages && Object.entries(messages).map(([type, message]) => (
                <p className={'mt-2 text-red-600 text-sm'} key={type}>{message}</p>
            ))
        }
    />
);
export default ErrorMessage;