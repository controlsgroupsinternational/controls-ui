import { ITableColumn } from '../../../components/data-tables/Table/types'
import { ICharacter } from './ICharacters';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Location {
  name: string;
  url: string;
}

export const characterColumns: ITableColumn<ICharacter>[] = [
  {
    id: 'id',
    label: 'ID'
  },
  {
    id: 'name',
    label: 'Nombre',
    isQuery: true
  },
  {
    id: 'type',
    label: 'Tipo',
    filters: [
      {
        id: 'Habilitado',
        label: 'Habilitado',
        value: 'Habilitado'
      },
      {
        id: 'Deshabilitado',
        label: 'Deshabilitado',
        value: 'Deshabilitado'
      },
      {
        id: 'Removido',
        label: 'Removido',
        value: 'Removido'
      },
    ]
  },
  {
    id: 'species',
    label: 'Especie',
    filters: [
      {
        id: 'Humano',
        label: 'Humano',
        value: 'Humano'
      },
      {
        id: 'Alien',
        label: 'Alien',
        value: 'Alien'
      }
    ]
  },
]