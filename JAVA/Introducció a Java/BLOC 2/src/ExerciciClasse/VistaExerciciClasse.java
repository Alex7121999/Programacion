package ExerciciClasse;

import java.util.Scanner;

public class VistaExerciciClasse {

    private Scanner sc = new Scanner(System.in);

    public int demanarEnter(String missatge) {
        int numero = 0;
        boolean valid = false;

        while (!valid) {
            System.out.print(missatge);

            try {
                numero = Integer.parseInt(sc.nextLine());
                valid = true;
            } catch (NumberFormatException e) {
                System.out.println("Error: introdueix un número enter vàlid.");
            }
        }

        return numero;
    }
}
