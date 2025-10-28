import { ICharacters } from './ICharacters';
import { ITableSubmit } from '../../../components/data-tables/Table/types';

export declare const useGetCharacters: () => {
    characters: ICharacters;
    loadingCharacters: boolean;
    onSubmitCharactersTable: ITableSubmit;
};
