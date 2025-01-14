import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

import Drivers from "./Drivers"
import Ambulance from './Ambulance'
import { AmbulanceIcon } from 'lucide-react'

const AmbulanceManagement = () => {
   const [activeTab, setActiveTab] = useState("ambulances")

   return (
      <div className="">
         <div>
            <h1 className='text-2xl mb-2 flex items-center gap-3'> <AmbulanceIcon /> Ambulance management</h1>
         </div>
         <Card className="pt-4">
            <CardContent>
               <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                     <TabsTrigger value="ambulances">Manage Ambulances</TabsTrigger>
                     <TabsTrigger value="drivers">Manage Drivers</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ambulances">
                     <Ambulance />
                  </TabsContent>
                  <TabsContent value="drivers">
                     <Drivers />
                  </TabsContent>
               </Tabs>
            </CardContent>
         </Card>
      </div>
   )
}

export default AmbulanceManagement
