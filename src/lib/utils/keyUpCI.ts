export const formatCI = (value: string) => {
  // Eliminar todos los puntos y espacios en blanco del valor actual del campo de entrada
  // eslint-disable-next-line no-useless-escape
  const formattedCedula = value.replace(/[\.\s]/g, '')

  // Aplicar el formato de separación por puntos cada tres caracteres
  return formattedCedula.replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')
}

export const handleOnKeyUpCI = (event) => {
  const { value } = event.target
  const ciFormmated = formatCI(value)
  return ciFormmated

  // form.setValue('ciNumber', ciFormmated)
}

export const handleOnlyNumbers = (event) => {
  if (!/[0-9.]/.test(event.key)) {
    event.preventDefault()
  }
}
