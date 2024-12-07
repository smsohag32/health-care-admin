export const handlePrint = () => {
   const content = document.getElementById("employee-profile-print");

   if (!content) {
      console.error("No content found with the specified ID");
      return;
   }

   content.classList.add("print-only");
   window.print();
   content.classList.remove("print-only");
};
