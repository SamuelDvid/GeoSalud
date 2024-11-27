
import { db } from "@/firebase";

Export default función GameOne (){
	Const testConection = async () => {
		Try{
			Const testDocRef=doc(db, “testCollection”, “testDcoument”);
			Const docSnap=await getDoc (testDocRef);
			If (docSnap.exists()) {
			Console.log (“Conexion Exitosa”, docsSnap.data());
			} else {
			 Console.log(“Documento no encontrado.”);
			}
			Catch (error) {
			Console.error(“Error al conectar con firebase:”, error);
			}
			};