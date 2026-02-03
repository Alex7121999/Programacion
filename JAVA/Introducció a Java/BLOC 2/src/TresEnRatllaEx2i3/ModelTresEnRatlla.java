package TresEnRatllaEx2i3;

public class ModelTresEnRatlla {

    public static final int NFC = 3;
    private char[][] tauler;

    public ModelTresEnRatlla() {
        reiniciar();
    }

    public char[][] getTauler() {
        return tauler;
    }

    public void reiniciar() {
        tauler = new char[][]{
                {'·', '·', '·'},
                {'·', '·', '·'},
                {'·', '·', '·'}
        };
    }

    public boolean casellaBuida(int f, int c) {
        return tauler[f][c] == '·';
    }

    public void posarFitxa(int f, int c, char jugador) {
        tauler[f][c] = jugador;
    }

    public boolean hiHaTres(char jugador) {
        return tresFila(jugador) || tresColumna(jugador) || tresDiagonal(jugador);
    }

    private boolean tresFila(char jugador) {
        for (int i = 0; i < NFC; i++) {
            if (tauler[i][0] == jugador && tauler[i][1] == jugador && tauler[i][2] == jugador)
                return true;
        }
        return false;
    }

    private boolean tresColumna(char jugador) {
        for (int i = 0; i < NFC; i++) {
            if (tauler[0][i] == jugador && tauler[1][i] == jugador && tauler[2][i] == jugador)
                return true;
        }
        return false;
    }

    private boolean tresDiagonal(char jugador) {
        if (tauler[0][0] == jugador && tauler[1][1] == jugador && tauler[2][2] == jugador)
            return true;
        if (tauler[0][2] == jugador && tauler[1][1] == jugador && tauler[2][0] == jugador)
            return true;
        return false;
    }
}