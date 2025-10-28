import React, { Dispatch, useState } from 'react'
import { useForm } from 'react-hook-form'

import { simulateFetch } from '../lib/utils/simulateFetch'
import { convertHexToRGBA } from '../lib/utils/colors'
import { IFormEditStatus, IStatus } from '../lib/types'

import { Badge, Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Label } from '../components'
import { ColorSquare } from '../components/color-picker/ColorSquare'
import { GenericSelect } from '../components'
import { Input } from '../components'
import { TextArea } from '../components'
import { subcategoryRules } from './rules'
import { PopoverPicker } from '../components/color-picker/PopoverPicker'

interface IDialogDetailSubcategoryProps {
  status: IStatus
  isOpenEdit: boolean
  setOpenEdit: Dispatch<boolean>
}

export const DialogEditStatus = ({ status, isOpenEdit, setOpenEdit }: IDialogDetailSubcategoryProps) => {
  const formEditStatus = useForm<IFormEditStatus>()
  const [color, setColor] = useState('#b32aa9')
  const [loading, setLoading] = useState(false)

  const presetColors = ['#cd9323', '#1a53d8', '#9a2151', '#0d6416', '#8d2808']

  const onSubmitEditStatus = async (data: IFormEditStatus) => {
    setLoading(true)
    await simulateFetch(3000)

    console.log({ ...data, color })
    setLoading(false)
    setOpenEdit(false)
  }

  return (
    <Dialog open={isOpenEdit} onOpenChange={setOpenEdit}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Estado</DialogTitle>
        </DialogHeader>

        <section className='w-full space-y-4'>
          <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
            <Input
              id='title'
              type='text'
              tabIndex={4}
              label='Titulo'
              placeholder='Pekkin'
              defaultValue={status.title}
              form={formEditStatus}
            />

            <GenericSelect
              tabIndex={5}
              form={formEditStatus}
              id='isActive'
              label='Estado'
              placeholder='Seleccione un Estado'
              defaultValue={String(status.isActive)}
              items={[
                {
                  label: 'Activo',
                  value: 'true'
                },
                {
                  label: 'Bloqueado',
                  value: 'false'
                }
              ]}
            />
          </div>

          <TextArea
            form={formEditStatus}
            rows={5}
            tabIndex={6}
            id='description'
            label='Descripción'
            defaultValue={status.description}
          />
        </section>

        <section className='w-full flex flex-col justify-between'>
          <Label>Color del Estado</Label>

          <div className='my-2'></div>

          <div className='w-full flex flex-col sm:flex-row justify-between gap-x-7 gap-y-5'>
            <div
              style={{ backgroundColor: convertHexToRGBA(color, 0.1) }}
              className={'w-full sm:w-40 h-20 sm:h-full rounded-md bg-opacity-5 flex flex-col justify-center items-center'}
            >
              <Badge
                className={`text-[${color}]`}
                style={{ color, borderColor: color, backgroundColor: convertHexToRGBA(color, 0.3) }}
              >
                {color}
              </Badge>
            </div>

            <div className='w-full grid grid-rows-2 grid-cols-5 justify-between items-center gap-4'>
              {
                presetColors.map(color => (
                  <ColorSquare key={color} color={color} onClick={() => setColor(color)} />
                ))
              }

              {
                [presetColors[0], presetColors[1], presetColors[2]].map(color => (
                  <ColorSquare key={color} color={color} onClick={() => setColor(color)} />
                ))
              }

              <PopoverPicker color={color} onChange={setColor} />
            </div>
          </div>
        </section>

        <DialogFooter className='flex flex-col gap-y-4'>
          <Button
            type='button'
            variant='outline'
            disabled={loading}
            onClick={() => setOpenEdit(false)}
          >
            Cancelar
          </Button>

          <Button
            type='button'
            isLoading={loading}
            onClick={formEditStatus.handleSubmit(onSubmitEditStatus)}
          >
            Editar Estado
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
