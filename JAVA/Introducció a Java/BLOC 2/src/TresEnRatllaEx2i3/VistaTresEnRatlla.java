package TresEnRatllaEx2i3;

import java.util.Scanner;

public class VistaTresEnRatlla {

    private Scanner scanner = new Scanner(System.in);

    public void mostrarTauler(char[][] tauler) {
        System.out.println("   1  2  3 ");
        for (int i = 0; i < tauler.length; i++) {
            System.out.print((char) ('A' + i) + " ");
            for (int j = 0; j < tauler[i].length; j++) {
                System.out.print(" " + tauler[i][j] + " ");
            }
            System.out.println();
        }
    }

    public int[] demanarMoviment(char jugador) {
        String resposta;
        int[] resultat = new int[2];

        do {
            System.out.print("Jugador " + jugador + " - Introdueix fila i columna (ex: B2): ");
            resposta = scanner.nextLine().toUpperCase().trim();
        } while (!resposta.matches("^[A-C][1-3]$"));

        resultat[0] = resposta.charAt(0) - 'A';
        resultat[1] = resposta.charAt(1) - '1';
        return resultat;
    }

    public void mostrarGuanyador(char jugador) {
        System.out.println("Ha guanyat el jugador " + jugador);
    }

    public boolean demanarReiniciar() {
        System.out.print("Vols tornar a jugar? (S/N): ");
        String resposta = scanner.nextLine().trim().toUpperCase();
        return resposta.equals("S");
    }
}