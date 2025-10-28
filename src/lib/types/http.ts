export interface IFetchDataTable<TEntity> {
  code: string
  info: {
    pagePrev: number
    pageNext: number
  },
  results: TEntity[]
}

export interface IFetchData<TEntity = any> {
  code: string
  results: TEntity | {
    message: string
  }
}

export interface IFetchErrorReturn {
  code: string
  data: null,
  error: {
    status: number,
    message: string
  }
}
