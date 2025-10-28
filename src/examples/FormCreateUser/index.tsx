import { ICreateUser } from '../../lib/schemas/user.schema'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const FormCreateUser = () => {
  const formCreateUser = useForm<ICreateUser>()

  return (
    <div>FormCreateUser</div>
  )
}
