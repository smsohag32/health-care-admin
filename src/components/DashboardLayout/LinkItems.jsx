import {
   Car,
   ContactRound,
   PanelsTopLeft,
   Plus,
   ShieldBan,
   UserRoundCog,
   Users,
   UsersRound,
   Edit,
   FileText,
   FilePlus,
   Calendar,
   Search,
   Bell,
   Clipboard,
   File,
   Layers,
   LayoutDashboard,
} from "lucide-react";

export const items = [
   {
      to: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />
   },
   {
      to: "/dashboard/doctors",
      label: "Doctors",
      icon: <ContactRound size={20} />,
   },
   {
      to: "/dashboard/ambulance",
      label: "Ambulance",
      icon: <Car size={20} />,
   },
   {
      to: "/dashboard/employees",
      label: "Employees",
      icon: <Users size={20} />,
      subItems: [
         {
            to: "/dashboard/employee-list",
            label: "Employee List",
            icon: <Users size={20} />,
         },
         {
            to: "/dashboard/employee/add",
            label: "Add Employee",
            icon: <Plus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/departments",
      label: "Departments",
      icon: <PanelsTopLeft size={20} />,
   },
   {
      to: "/dashboard/user-management",
      label: "User Management",
      icon: <UserRoundCog size={20} />,
      subItems: [
         {
            to: "/dashboard/user-management",
            label: "All User",
            icon: <UsersRound size={20} />,
         },
         {
            to: "/dashboard/user-types",
            label: "Roles & Permission",
            icon: <ShieldBan size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/patient-management",
      label: "Patient Management",
      icon: <Users size={20} />,
      subItems: [
         {
            to: "/dashboard/patient-list",
            label: "Patient List",
            icon: <Users size={20} />,
         },
         {
            to: "/dashboard/patient/add",
            label: "Add Patient",
            icon: <Plus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/appointments",
      label: "Appointments",
      icon: <Calendar size={20} />,
      subItems: [
         {
            to: "/dashboard/appointments/view",
            label: "View Appointments",
            icon: <Search size={20} />,
         },
         {
            to: "/dashboard/appointments/create",
            label: "Create Appointment",
            icon: <FilePlus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/ambulance-management",
      label: "Ambulance",
      icon: <Car size={20} />,
      subItems: [
         {
            to: "/dashboard/ambulance/view",
            label: "View Ambulances",
            icon: <FileText size={20} />,
         },
         {
            to: "/dashboard/ambulance/manage",
            label: "Manage Ambulance Requests",
            icon: <Clipboard size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/pharmacy-management",
      label: "Pharmacy Management",
      icon: <File size={20} />,
      subItems: [
         {
            to: "/dashboard/pharmacy/view",
            label: "View Inventory",
            icon: <FileText size={20} />,
         },
         {
            to: "/dashboard/pharmacy/add",
            label: "Add Medicine",
            icon: <Plus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/billing-management",
      label: "Billing Management",
      icon: <Layers size={20} />,
      subItems: [
         {
            to: "/dashboard/billing/view",
            label: "View Bills",
            icon: <FileText size={20} />,
         },
         {
            to: "/dashboard/billing/generate",
            label: "Generate Bill",
            icon: <FilePlus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/laboratory-management",
      label: "Laboratory Management",
      icon: <FileText size={20} />,
      subItems: [
         {
            to: "/dashboard/laboratory/view",
            label: "View Tests",
            icon: <File size={20} />,
         },
         {
            to: "/dashboard/laboratory/add",
            label: "Add Test",
            icon: <Plus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/reports-management",
      label: "Reports Management",
      icon: <FileText size={20} />,
      subItems: [
         {
            to: "/dashboard/reports/view",
            label: "View Reports",
            icon: <File size={20} />,
         },
         {
            to: "/dashboard/reports/generate",
            label: "Generate Reports",
            icon: <FilePlus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/room-management",
      label: "Room Management",
      icon: <FileText size={20} />,
      subItems: [
         {
            to: "/dashboard/rooms/view",
            label: "View Rooms",
            icon: <File size={20} />,
         },
         {
            to: "/dashboard/rooms/add",
            label: "Add Room",
            icon: <Plus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/inventory-management",
      label: "Inventory Management",
      icon: <Layers size={20} />,
      subItems: [
         {
            to: "/dashboard/inventory/view",
            label: "View Inventory",
            icon: <FileText size={20} />,
         },
         {
            to: "/dashboard/inventory/add",
            label: "Add Item",
            icon: <Plus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/emergency-management",
      label: "Emergency Management",
      icon: <FileText size={20} />,
      subItems: [
         {
            to: "/dashboard/emergency/view",
            label: "View Emergency Cases",
            icon: <Clipboard size={20} />,
         },
         {
            to: "/dashboard/emergency/add",
            label: "Add Case",
            icon: <Plus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/notification-management",
      label: "Notification Management",
      icon: <Bell size={20} />,
      subItems: [
         {
            to: "/dashboard/notifications/view",
            label: "View Notifications",
            icon: <FileText size={20} />,
         },
         {
            to: "/dashboard/notifications/create",
            label: "Create Notification",
            icon: <FilePlus size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/feedback-management",
      label: "Feedback Management",
      icon: <Clipboard size={20} />,
      subItems: [
         {
            to: "/dashboard/feedback/view",
            label: "View Feedback",
            icon: <FileText size={20} />,
         },
         {
            to: "/dashboard/feedback/respond",
            label: "Respond to Feedback",
            icon: <Edit size={20} />,
         },
      ],
   },
   {
      to: "/dashboard/settings",
      label: "Settings",
      icon: <Edit size={20} />,
      subItems: [
         {
            to: "/dashboard/settings/view",
            label: "View Settings",
            icon: <FileText size={20} />,
         },
         {
            to: "/dashboard/settings/edit",
            label: "Edit Settings",
            icon: <Edit size={20} />,
         },
      ],
   },
];
