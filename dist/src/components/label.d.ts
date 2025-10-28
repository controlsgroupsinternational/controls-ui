import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
declare const Label: React.ForwardRefExoticComponent<Omit<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref">, "placeholder"> & VariantProps<(props?: import('class-variance-authority/dist/types').ClassProp) => string> & React.RefAttributes<HTMLLabelElement>>;
export { Label };
