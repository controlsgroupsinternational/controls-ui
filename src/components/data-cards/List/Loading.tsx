'use client'

export const LoaderDots = () => {
  return <span className='loader-fade-dot'></span>
}

export const ListLoading = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-24'>
      <LoaderDots />

      <h6 className='font-semibold'>Cargando...</h6>
    </div>
  )
}
