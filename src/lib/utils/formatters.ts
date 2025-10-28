import { PHONE_LINE_CODES } from "./PHONE_LINE_CODES"

export const formatCI = (value: string) => {
  // Eliminar todos los puntos y espacios en blanco del valor actual del campo de entrada
  // eslint-disable-next-line no-useless-escape
  const formattedCedula = value.replace(/[\.\s]/g, '')

  // Aplicar el formato de separación por puntos cada tres caracteres
  return formattedCedula.replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')
}

export const formatRIF = (value: string) => {
  // Eliminar todos los puntos y espacios en blanco del valor actual del campo de entrada
  // eslint-disable-next-line no-useless-escape
  const formattedCedula = value.replace(/[\.\s]/g, '')

  // Aplicar el formato de separación por puntos cada tres caracteres
  return formattedCedula.replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')
}

export const formatPhoneNumber = (value: string) => {
  const sanitizedPhoneNumber = value.replace(/\s/g, '')

  const formattedPhoneNumber = sanitizedPhoneNumber.replace(/(\d{3})(\d{4})/, (match, p1, p2) => {
    return `${p1} ${p2}`
  })

  return formattedPhoneNumber
}

export const formatPhone = (phoneNumber: string): { codeLine: string; number: string } => {
  const codeLine = phoneNumber.substring(0, 4)
  const number = phoneNumber.substring(4)
  const formattedNumber = number.replace(/(\d{3})(\d{4})/, '$1 $2')

  return { codeLine, number: formattedNumber }
}

export const convertBytes = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes} B`
  } else if (bytes < 1024 * 1024) {
    const kilobytes = bytes / 1024
    const formattedKB = kilobytes.toFixed(1)
    return `${formattedKB} KB`
  } else {
    const megabytes = bytes / (1024 * 1024)
    const formattedMB = megabytes.toFixed(1)
    return `${formattedMB} MB`
  }
}

export const formatCodePhoneLines = () => {
  const allCodeLines = [...PHONE_LINE_CODES.DIGITAL, ...PHONE_LINE_CODES.MOVILNET, ...PHONE_LINE_CODES.MOVISTAR]
  return allCodeLines
}
