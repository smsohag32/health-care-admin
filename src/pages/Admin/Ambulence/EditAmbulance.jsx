import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import HcModal from '@/components/modals/HcModal'

export const EditAmbulance = ({ ambulance, isOpen, onClose, onEdit }) => {
   const [editedAmbulance, setEditedAmbulance] = useState(ambulance)

   useEffect(() => {
      setEditedAmbulance(ambulance)
   }, [ambulance])

   const handleSubmit = (e) => {
      e.preventDefault()
      onEdit(editedAmbulance)
   }

   return (
      <HcModal open={isOpen} onOpenChange={onClose}>
         <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="registrationNumber" className="text-right">
                     Registration
                  </Label>
                  <Input
                     id="registrationNumber"
                     value={editedAmbulance.registrationNumber}
                     onChange={(e) => setEditedAmbulance({ ...editedAmbulance, registrationNumber: e.target.value })}
                     className="col-span-3"
                  />
               </div>
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="model" className="text-right">
                     Model
                  </Label>
                  <Input
                     id="model"
                     value={editedAmbulance.model}
                     onChange={(e) => setEditedAmbulance({ ...editedAmbulance, model: e.target.value })}
                     className="col-span-3"
                  />
               </div>
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="capacity" className="text-right">
                     Capacity
                  </Label>
                  <Input
                     id="capacity"
                     type="number"
                     value={editedAmbulance.capacity}
                     onChange={(e) => setEditedAmbulance({ ...editedAmbulance, capacity: parseInt(e.target.value) })}
                     className="col-span-3"
                  />
               </div>
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                     Status
                  </Label>
                  <Select
                     onValueChange={(value) => setEditedAmbulance({ ...editedAmbulance, status: value })}
                     defaultValue={editedAmbulance.status}
                  >
                     <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select status" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="on-call">On Call</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                     </SelectContent>
                  </Select>
               </div>
            </div>
            <div>
               <Button type="submit">Save Changes</Button>
            </div>
         </form>
      </HcModal>
   )
}

