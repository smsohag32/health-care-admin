
import { Stethoscope } from 'lucide-react'
import { Button } from "@/components/ui/button"

const NotFound = () => {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
         <Stethoscope className="w-24 h-24 text-blue-500 mb-8" />
         <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">404 - Page Not Found</h1>
         <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
            Oops! It seems the page you&apos;re looking for has gone missing from our records.
         </p>
         <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Button onClick={() => window.history.back()}>
               Return to Back
            </Button>
         </Button>
      </div>
   )
}

export default NotFound

