package TresEnRatllaEx2i3;

public class TresEnRatlla {

    public static void main(String[] args) {

        ModelTresEnRatlla joc = new ModelTresEnRatlla();
        VistaTresEnRatlla view = new VistaTresEnRatlla();

        boolean continuar;

        do {
            char jugador = 'O';
            int[] mov;

            // PARTIDA
            do {
                view.mostrarTauler(joc.getTauler());
                jugador = (jugador == 'X') ? 'O' : 'X';

                do {
                    mov = view.demanarMoviment(jugador);
                } while (!joc.casellaBuida(mov[0], mov[1]));

                joc.posarFitxa(mov[0], mov[1], jugador);

            } while (!joc.hiHaTres(jugador));

            view.mostrarGuanyador(jugador);

            // PREGUNTAR SI VOL TORNAR A JUGAR
            continuar = view.demanarReiniciar();
            if (continuar) {
                joc.reiniciar();
            }

        } while (continuar);

        System.out.println("Gràcies per jugar!");
    }
}