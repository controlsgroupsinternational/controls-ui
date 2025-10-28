import { default as React } from 'react';
import { PinFieldProps } from 'react-pin-field';

export interface ICodeVerificationProps extends Omit<PinFieldProps, 'validate'> {
    onComplete: (code: string) => void;
    mode: 'numeric' | 'alpha-numeric';
    length: number;
    disabled?: boolean;
    containerClassName?: string;
    format?: (char: string) => string;
}
export declare const CodeVerification: ({ onComplete, mode, length, disabled, tabIndex, autoFocus, containerClassName, className, ...rest }: ICodeVerificationProps) => React.JSX.Element;
