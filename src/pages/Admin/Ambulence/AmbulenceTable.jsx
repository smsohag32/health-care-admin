import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Edit, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const AmbulanceTable = ({ ambulances, onEdit, onDelete }) => {
   const getStatusColor = (status) => {
      switch (status) {
         case 'available':
            return 'bg-green-500'
         case 'on-call':
            return 'bg-yellow-500'
         case 'maintenance':
            return 'bg-red-600'
         default:
            return 'bg-gray-500'
      }
   }

   return (
      <Table>
         <TableHeader>
            <TableRow>
               <TableHead>Registration Number</TableHead>
               <TableHead>Model</TableHead>
               <TableHead>Capacity</TableHead>
               <TableHead>Status</TableHead>
               <TableHead className="text-end">Actions</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            {ambulances.map((ambulance) => (
               <TableRow key={ambulance.id}>
                  <TableCell className="font-medium">{ambulance.registrationNumber}</TableCell>
                  <TableCell>{ambulance.model}</TableCell>
                  <TableCell>{ambulance.capacity}</TableCell>
                  <TableCell>
                     <Badge className={`${getStatusColor(ambulance.status)} hover:bg-${getStatusColor(ambulance.status)} text-white`}>
                        {ambulance.status}
                     </Badge>
                  </TableCell>
                  <TableCell>
                     <div className="flex space-x-2 justify-end">
                        <Button variant="outline" size="icon" onClick={() => onEdit(ambulance)}>
                           <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => onDelete(ambulance.id)}>
                           <Trash2 className="h-4 w-4" />
                        </Button>
                     </div>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   )
}

