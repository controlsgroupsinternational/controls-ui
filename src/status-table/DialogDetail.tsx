import { useForm } from 'react-hook-form'
import React, { Dispatch } from 'react'

import { convertHexToRGBA } from '../lib/utils/colors'
import { IStatus } from '../lib/types/status'

import { Badge, CardDescription, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, Label } from '../components'
import { TextArea } from '../components'
import { Input } from '../components'

interface IDialogDetailSubcategoryProps {
  status: IStatus
  isOpenViewModel: boolean
  setOpenViewModel: Dispatch<boolean>
}

export const DialogDetailStatus = ({ status, isOpenViewModel, setOpenViewModel }: IDialogDetailSubcategoryProps) => {
  const form = useForm()

  return (
    <Dialog open={isOpenViewModel} onOpenChange={setOpenViewModel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Estado</DialogTitle>

          <DialogDescription>Vista de detalle del estado</DialogDescription>
        </DialogHeader>

        <section className='w-full space-y-4'>
          <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
            <Input
              readOnly
              id='title'
              type='text'
              tabIndex={4}
              label='Titulo'
              placeholder='Pekkin'
              value={status.title}
            />

            <Input
              readOnly
              type='text'
              tabIndex={5}
              id='isActive'
              label='Estado'
              placeholder='Pekkin'
              value={status.isActive ? 'Activo' : 'Bloqueado'}
            />
          </div>

          <TextArea
            form={form}
            rows={5}
            readOnly
            tabIndex={6}
            id='description'
            label='Descripción'
            value={status.description}
          />
        </section>

        <section>
          <Label>Color del Estado</Label>
          <CardDescription>Codigo Hexadecimal: {status.color}</CardDescription>

          <div className='my-2'></div>

          <div
            style={{ backgroundColor: convertHexToRGBA(status.color, 0.1) }}
            className={'w-full h-28 rounded-md bg-opacity-5 flex flex-col justify-center items-center'}
          >
            <Badge
              style={{
                color: status.color,
                borderColor: status.color,
                backgroundColor: convertHexToRGBA(status.color, 0.3)
              }}
            >
              {status.title}
            </Badge>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}
