import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { Form, DialogContent, DialogHeader, DialogTitle, Separator, Input, GenericSelect, DialogFooter, Button } from '../../components'
import { GlobalDialog } from './global-dialog';

export const gpsCarrierCreateSchema = z.object({
  apn: z.string(),
  number: z.string(),
  carrier: z.string()
})

interface IFormCreateGpsCarrier extends z.infer<typeof gpsCarrierCreateSchema> {}

export const AddDialogCarrier = () =>  {
  const formGpsCarrier = useForm<IFormCreateGpsCarrier>({ resolver: zodResolver(gpsCarrierCreateSchema) })

  const handleOnlyNumbers = (event) => {
    if (!/[0-9.]/.test(event.key)) {
      event.preventDefault()
    }
  }

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <GlobalDialog>
      <Form {...formGpsCarrier}>
        <form onSubmit={formGpsCarrier.handleSubmit(onSubmit)}>

            <DialogHeader>
              <DialogTitle>Agregar Operadora</DialogTitle>
              <Separator className='my-4' />
            </DialogHeader>

            <h5 className='font-semibold'>
            Informacion basica
            </h5>

            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                id='ip'
                type='text'
                form={formGpsCarrier}
                label='IP'
                placeholder='00.0.00.000'
                tabIndex={8}
                maxLength={16}
                onKeyPress={handleOnlyNumbers}
              />

              <div className='w-full flex justify-start items-end gap-x-2'>
                <GenericSelect
                  id='phoneCode'
                  tabIndex={9}
                  label='Telefono'
                  defaultValue='0412'
                  form={formGpsCarrier}
                  placeholder='Buscar...'
                  classNameGroup='max-h-[300px]'
                  // ctaPlaceholder='Codigo'
                  // buttonClassName='w-[90px]'
                  // popoverClassName='w-[130px]'
                  // notFoundLabel='Codigo No Encontrado'
                  items={[
                    {
                      label: 'ABC',
                      value: 'ABC'
                    }
                  ]}
                />

                {/* <Input
                  id='phoneNumber'
                  prefix='+58'
                  type='text'
                  tabIndex={10}
                  maxLength={7}
                  placeholder='0000000'
                  form={formGpsCarrier}
                  onKeyPress={handleOnlyNumbers}
                  onKeyUp={handleOnKeyUpPhoneNumber}
                /> */}
              </div>
            </div>

            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                id='domain'
                type='text'
                form={formGpsCarrier}
                label='Dominio'
                placeholder='00.0.00.000'
                tabIndex={11}
                maxLength={20}
                onKeyPress={handleOnlyNumbers}
              />

              <Input
                id='port'
                type='text'
                form={formGpsCarrier}
                label='Puerto'
                placeholder='3500'
                tabIndex={12}
                maxLength={4}
                onKeyPress={handleOnlyNumbers}
              />
            </div>

            <h6 className='font-semibold'>
            APN
              <Separator />
            </h6>

            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                id='apn.name'
                type='text'
                form={formGpsCarrier}
                label='Nombre'
                placeholder='Digitel'
                tabIndex={13}
                maxLength={30}
              />

              <Input
                id='apn.host'
                type='text'
                form={formGpsCarrier}
                label='Host'
                placeholder='mi.host.name.com'
                tabIndex={14}
                maxLength={80}
              />
            </div>

            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                id='apn.username'
                type='text'
                form={formGpsCarrier}
                label='Usuario'
                placeholder='userexample'
                tabIndex={15}
                maxLength={50}
              />

              <Input
                id='apn.password'
                type='text'
                form={formGpsCarrier}
                label='Contraseña'
                placeholder='*********'
                tabIndex={16}
                maxLength={80}
              />
            </div>

            <DialogFooter className='w-full justify-between items-end gap-4'>
              <Button
                className='w-full'
                onClick={() => {}}
                type='button'
                tabIndex={17}
              >
              Cancelar
              </Button>

              <Button
                onClick={formGpsCarrier.handleSubmit(onSubmit)}
                className='w-full'
                type='button'
                tabIndex={18}
              >
              Agregar
              </Button>
            </DialogFooter>
        </form>
      </Form>
    </GlobalDialog>
  )
}