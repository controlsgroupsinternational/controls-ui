import { fetcher } from '../utils'

export const getUsers = async () => fetcher('https://randomuser.me/api/?results=20')