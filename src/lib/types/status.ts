export interface IStatus {
  id: number
  title: string
  description: string
  color: string
  isActive: boolean
}

export interface IFormEditStatus {
  title: string
  description: string
  color: string
  isActive: 'true' | 'false'
}
