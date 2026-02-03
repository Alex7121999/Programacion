package Prog.Orientada.Obj;

public class ClassePersona {

    public static void main(String[] args) {

        // Crear models (persones)
        ModelClassePersona p1 = new ModelClassePersona("12345678A", "Maria", "10-05-1995");
        ModelClassePersona p2 = new ModelClassePersona("87654321B", "Joan", "22-11-1980");

        // Crear vista
        VistaClassePersona vista = new VistaClassePersona();

        // Mostrar dades
        vista.mostrarPersona(p1.getNif(), p1.getNom(), p1.getEdat());
        vista.mostrarPersona(p2.getNif(), p2.getNom(), p2.getEdat());
    }
}

