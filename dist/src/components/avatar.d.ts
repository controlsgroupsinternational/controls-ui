import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
declare const Avatar: React.ForwardRefExoticComponent<Omit<Omit<AvatarPrimitive.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref">, "placeholder"> & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref">, "placeholder"> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref">, "placeholder"> & React.RefAttributes<HTMLSpanElement>>;
export { Avatar, AvatarImage, AvatarFallback };
