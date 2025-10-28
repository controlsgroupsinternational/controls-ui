import { formatPhoneNumber } from "./formatters"

export const handleOnKeyUpPhoneNumber = (event) => {
  const { value } = event.target
  const phoneNumberFormated = formatPhoneNumber(value)
  return phoneNumberFormated
}
