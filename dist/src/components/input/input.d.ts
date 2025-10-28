import { InputProps } from './types';
import * as React from 'react';
export interface InputUIProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
export declare const InputUI: React.ForwardRefExoticComponent<InputUIProps & React.RefAttributes<HTMLInputElement>>;
export declare function Input({ children, id, label, classNameContainer, description, icon, isLoading, iconDirection, ...rest }: InputProps): React.JSX.Element;
