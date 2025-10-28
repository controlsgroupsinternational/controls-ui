import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { z } from "zod"

import { ILoginWithDNI, LOGIN_WITH_DNI, loginSchema } from '../../lib/schemas/login.schema'
import { UserAuthenticated } from '../../lib/types'
import { Button, Form, GenericSelect, Input, InputPID, PIDValue, formatCITypes } from '../../components'

export const LoginWithPID = () => {
  const form = useForm<ILoginWithDNI>({ resolver: zodResolver(LOGIN_WITH_DNI) })

  const onSubmit = async ({ pidNumber: pidNumber, pidType: pidType, password }: ILoginWithDNI) => {
    const loginData: z.infer<typeof loginSchema> = {
      identifier: `${pidType.toUpperCase()}-${pidNumber.replaceAll('.', '')}`,
      type: 'IDENTITY_CARD_NUMBER',
      password
    }

    const validation = loginSchema.safeParse(loginData)

    if (!validation?.success) {
      console.error('Campos Invalidos', validation)
      return
    }

    console.log(loginData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full'>
        <h5 className='font-black text-2xl text-left w-full'>
          Iniciar Sesion
        </h5>

        <InputPID
          form={form}
          label='Cedula'
          pid={{
            type: {
              items: formatCITypes(),
              defaultValue: formatCITypes(['VENEZUELAN'])[0].value
            }
          }}
        />

        <GenericSelect
          id='some'
          form={form}
          label='Algo nuevo'
          placeholder='Seleccione'
          defaultValue='FINO'
          items={[
            {
              label: 'Finoo',
              value: 'FINO'
            }
          ]}
        />

        <Input
          id='password'
          name='password'
          type='password'
          tabIndex={3}
          label='Contraseña'
          placeholder='*******'
          form={form}
        />

        <Button 
          tabIndex={4}
          type='submit'
          className='w-full'
        >
          Iniciar Sesion
        </Button>
      </form>
  </Form>
  )
}
