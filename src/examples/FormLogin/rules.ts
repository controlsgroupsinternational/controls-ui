export const loginRules = {
  email: {
    required: { value: true, message: 'Requerido' },
    minLength: { value: 3, message: 'Minimo 3 Caracteres' }
  },
  password: {
    required: { value: true, message: 'Requerido' },
  }
}