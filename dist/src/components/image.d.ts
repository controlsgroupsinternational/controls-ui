import { PrimitiveImageProps } from '@radix-ui/react-avatar';
import { ReactNode } from 'react';

export interface D4tImageProps extends PrimitiveImageProps {
    src?: string;
    containerClassName?: string;
    imageClassName?: string;
    filename?: string;
    zoom?: boolean;
    download?: boolean;
    fallback?: {
        className?: string;
        children?: ReactNode;
    };
}
export declare const D4TImage: ({ src, containerClassName, imageClassName, zoom, fallback, download, filename, ...rest }: D4tImageProps) => import("react").JSX.Element;
