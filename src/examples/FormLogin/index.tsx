import { IDENTIFIER_TYPE_SCHEMA } from '../../lib/schemas/login.schema'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components'
import { LoginWithEmail } from "./LoginWithEmail"
import { LoginWithPID } from "./LoginWithPID"

export const FormLogin = () => {
  return (
    <Tabs
      className='max-w-xs h-screen flex flex-col justify-center items-center w-full mx-auto space-y-4'
      defaultValue={IDENTIFIER_TYPE_SCHEMA.Values.EMAIL}
    >
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value={IDENTIFIER_TYPE_SCHEMA.Values.EMAIL}>Email</TabsTrigger>
        <TabsTrigger value={IDENTIFIER_TYPE_SCHEMA.Values.IDENTITY_CARD_NUMBER}>Cedula</TabsTrigger>
      </TabsList>

      <TabsContent value={IDENTIFIER_TYPE_SCHEMA.Values.IDENTITY_CARD_NUMBER} className="w-full">
        <LoginWithPID />
      </TabsContent>

      <TabsContent value={IDENTIFIER_TYPE_SCHEMA.Values.EMAIL} className="w-full">
        <LoginWithEmail />
      </TabsContent>
    </Tabs>
  )
}
