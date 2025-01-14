import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


import { Card, CardContent } from '@/components/ui/card'
import { AddAmbulance } from './AddAmbulance'
import { EditAmbulance } from './EditAmbulance'
import { AmbulanceTable } from './AmbulenceTable'

const Ambulance = () => {
   const [ambulances, setAmbulances] = useState([
      { id: '1', registrationNumber: 'AMB-001', model: 'Toyota Hiace', capacity: 2, status: 'available' },
      { id: '2', registrationNumber: 'AMB-002', model: 'Ford Transit', capacity: 3, status: 'on-call' },
      { id: '3', registrationNumber: 'AMB-003', model: 'Mercedes Sprinter', capacity: 4, status: 'maintenance' },
   ])
   const [searchTerm, setSearchTerm] = useState('')
   const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
   const [editingAmbulance, setEditingAmbulance] = useState(null)

   const filteredAmbulances = ambulances.filter(ambulance =>
      ambulance.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ambulance.model.toLowerCase().includes(searchTerm.toLowerCase())
   )

   const handleAddAmbulance = (newAmbulance) => {
      const id = (ambulances.length + 1).toString()
      setAmbulances([...ambulances, { ...newAmbulance, id }])
      setIsAddDialogOpen(false)
   }

   const handleEditAmbulance = (updatedAmbulance) => {
      setAmbulances(ambulances.map(amb => amb.id === updatedAmbulance.id ? updatedAmbulance : amb))
      setEditingAmbulance(null)
   }

   const handleDeleteAmbulance = (id) => {
      setAmbulances(ambulances.filter(amb => amb.id !== id))
   }

   return (
      <>
         <div className="pt-5">
            <div>
               <div className="flex justify-between items-center mb-6">
                  <div className="relative w-full max-w-sm">
                     <Input
                        placeholder="Search ambulances..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                     />
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                     </svg>
                  </div>
                  <Button onClick={() => setIsAddDialogOpen(true)} className="bg-blue-500 hover:bg-blue-600">
                     <Plus className="mr-2 h-4 w-4" /> Add Ambulance
                  </Button>
               </div>
               <AmbulanceTable
                  ambulances={filteredAmbulances}
                  onEdit={setEditingAmbulance}
                  onDelete={handleDeleteAmbulance}
               />
            </div>
         </div>

         {/* add modal */}
         <AddAmbulance
            isOpen={isAddDialogOpen}
            onClose={() => setIsAddDialogOpen(false)}
            onAdd={handleAddAmbulance}
         />
         {/* edit modal */}
         {editingAmbulance && (
            <EditAmbulance
               ambulance={editingAmbulance}
               isOpen={!!editingAmbulance}
               onClose={() => setEditingAmbulance(null)}
               onEdit={handleEditAmbulance}
            />
         )}
      </>
   )
}

export default Ambulance

