import { useState } from 'react'
import { DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import HcModal from '@/components/modals/HcModal'

export const AddAmbulance = ({ isOpen, onClose, onAdd }) => {
   const [newAmbulance, setNewAmbulance] = useState({
      registrationNumber: '',
      model: '',
      capacity: 2,
      status: 'available',
   })

   const handleSubmit = (e) => {
      e.preventDefault()
      onAdd(newAmbulance)
      setNewAmbulance({ registrationNumber: '', model: '', capacity: 2, status: 'available' })
   }

   return (
      <HcModal className="bg-white" title={"Add New Ambulance"} isOpen={isOpen} handleClose={onClose}>
         <form className='' onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="registrationNumber" className="text-right">
                     Registration No
                  </Label>
                  <Input
                     id="registrationNumber"
                     value={newAmbulance.registrationNumber}
                     onChange={(e) => setNewAmbulance({ ...newAmbulance, registrationNumber: e.target.value })}
                     className="col-span-3"
                  />
               </div>
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="model" className="text-right">
                     Model
                  </Label>
                  <Input
                     id="model"
                     value={newAmbulance.model}
                     onChange={(e) => setNewAmbulance({ ...newAmbulance, model: e.target.value })}
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
                     value={newAmbulance.capacity}
                     onChange={(e) => setNewAmbulance({ ...newAmbulance, capacity: parseInt(e.target.value) })}
                     className="col-span-3"
                  />
               </div>
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                     Status
                  </Label>
                  <Select
                     onValueChange={(value) => setNewAmbulance({ ...newAmbulance, status: value })}
                     defaultValue={newAmbulance.status}
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
               <Button type="submit">Add Ambulance</Button>
            </div>
         </form>
      </HcModal>
   )
}

