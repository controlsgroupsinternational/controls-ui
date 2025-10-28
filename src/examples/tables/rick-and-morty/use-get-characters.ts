import { useEffect, useState } from "react";
import { ITableSubmit } from "../../../components/data-tables/Table/types";
import { ICharacter, ICharacters } from "./ICharacters";


export const useGetCharacters = () => {
  const [characters, setCharacters] = useState<ICharacters>()
  const [loadingCharacters, setLoadingCharacters] = useState(false)

  const API_URL = 'https://rickandmortyapi.com/api/character'

  const fetchCharacters = async (): Promise<ICharacters> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch characters')
    }
    const data: ICharacters = await response.json()
    return data
  }

  const onSubmitCharactersTable: ITableSubmit = async ({ queries, filters, page, limit }) => {
    setLoadingCharacters(true)

    console.log(page, limit)

    setLoadingCharacters(false)
  }

  useEffect(() => {
    (async () => {
      setLoadingCharacters(true)
      const characters = await fetchCharacters()

      setCharacters(characters)
      setLoadingCharacters(false)
    })()
  }, [])

  return {
    characters,
    loadingCharacters,
    onSubmitCharactersTable
  }

}