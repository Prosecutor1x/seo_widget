
import { ChakraProvider } from '../lib/chakraUI'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      
        {children}
     
    </ChakraProvider>
  )
}