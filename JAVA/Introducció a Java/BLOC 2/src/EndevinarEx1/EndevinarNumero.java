package EndevinarEx1;

import java.util.Scanner;

public class EndevinarNumero {
    public static Scanner scan = new Scanner(System.in);

    public static void main(String[] args) {
        String resposta;
        do {
            int comp;
            ModelEndevinar.reiniciarIntents();
            ModelEndevinar.generarNumeroAleatori();
            VistaEndevinar.mostrarMissatge("El numero generat és " + ModelEndevinar.getNumeroAleatori());
            do {
                System.out.println("Escriu un numero entre 0 i 99");
                resposta = scan.nextLine();
                int num = Integer.parseInt(resposta);
                ModelEndevinar.incrementarIntents();
                ;
                comp = ModelEndevinar.compararNumero(num);
                if (comp == 0)
                    VistaEndevinar.mostrarMissatge("Has endevinat el numero en " + ModelEndevinar.getIntents() + " intents");
                else if (comp > 0) VistaEndevinar.mostrarMissatge("El numero es mes gran");
                else VistaEndevinar.mostrarMissatge("El numero es mes petit");
            } while (comp != 0);
            System.out.print("Vols tornar a jugar?");
            resposta = scan.nextLine();
        } while (resposta.toUpperCase().equals("Si"));
    }
}
