package ExerciciClasse;

public class ExerciciClasse {

    public static void main(String[] args) {

        VistaExerciciClasse vista = new VistaExerciciClasse();
        ModelExerciciClasse model = new ModelExerciciClasse();

        int valor = vista.demanarEnter("Introdueix un número enter: ");
        model.setValor(valor);

        System.out.println("Has introduït: " + model.getValor());
    }
}