import { HTMLAttributes } from 'react';

interface IColorSquareProps extends HTMLAttributes<HTMLDivElement> {
    color: string;
}
export declare const ColorSquare: ({ color, className, onClick }: IColorSquareProps) => import("react").JSX.Element;
export {};
