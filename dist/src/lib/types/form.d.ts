import { RegisterOptions } from 'react-hook-form';

export type IFormRules<T extends string> = {
    [key in T]: RegisterOptions;
};
