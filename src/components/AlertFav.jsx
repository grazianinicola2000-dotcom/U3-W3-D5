import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

function AlertFav() {
  return (
    <Alert variant="destructive" className="max-w-md fixed left-1/2 -translate-x-1/2 top-5  z-10">
      <AlertCircleIcon />
      <AlertTitle>Operazione fallita</AlertTitle>
      <AlertDescription>L'elemento è già presente nei preferiti</AlertDescription>
    </Alert>
  );
}

export default AlertFav;
