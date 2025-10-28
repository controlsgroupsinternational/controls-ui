import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, Card, CardHeader, CardTitle, Separator, CardContent, TextArea, Input } from '../../components'
import { AddDialogCarrier, gpsCarrierCreateSchema } from './add-dialog-carrier'

export const gpsCreateSchema = z.object({
  carriers: z.array(z.lazy(() => gpsCarrierCreateSchema.nullable())).nullish(),
  description: z.string(),
  gpsModelID: z.string(),
  name: z.string(),
  serial: z.string(),
  gpsBrandID: z.string(),
})

interface IFormCreateGPS extends z.infer<typeof gpsCreateSchema> {}

export const FormCreateGPS = () => {
  const formGpsDevice = useForm<IFormCreateGPS>({ resolver: zodResolver(gpsCreateSchema) })

  const onSubmitFormGps = async (data) => {
    console.log({ data })
  }

  return (
    <>
      <AddDialogCarrier />

      <Form {...formGpsDevice}>
        <form onSubmit={formGpsDevice.handleSubmit(onSubmitFormGps)} className='w-full'>

          <div className='w-full h-full flex flex-col justify-start items-start gap-x-6 gap-y-6'>
            <Card className='w-full'>
              <CardHeader>
                <CardTitle>Informacion Basica</CardTitle>
                <Separator className='my-4' />
              </CardHeader>

              {/* Identifiers */}
              <CardContent className='w-full space-y-4'>
                <div className='w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    id='name'
                    type='text'
                    form={formGpsDevice}
                    label='Nombre'
                    placeholder='Nombre del dispositivo'
                    tabIndex={1}
                    maxLength={25}
                  />

                  <Input
                    id='serial'
                    type='text'
                    form={formGpsDevice}
                    label='Serial'
                    placeholder='J-554NVX'
                    tabIndex={2}
                    maxLength={25}
                  />
                </div>

                <TextArea
                  form={formGpsDevice}
                  rows={5}
                  tabIndex={4}
                  id='description'
                  label='Descripción'
                  placeholder='Ingrese la descripcion del dispositivo'
                  maxLength={275}
                />
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </>
  )
}