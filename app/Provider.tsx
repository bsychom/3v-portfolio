'use client'

import { Toaster} from 'sonner'
export default function Providers ({children} : {children : React.ReactNode}){
    return (
        <div>
            <Toaster position="top-right" richColors />
            {children}
        </div>
    )
}