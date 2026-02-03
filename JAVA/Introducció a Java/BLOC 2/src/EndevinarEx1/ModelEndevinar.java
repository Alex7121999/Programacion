package EndevinarEx1;

public class ModelEndevinar {
    private static int intents;
    private static int numeroAleatori;

    public static void generarNumeroAleatori() {
        numeroAleatori = (int) (Math.random() * 100);
    }

    public static void reiniciarIntents() {
        intents = 0;
    }

    public static void incrementarIntents() {
        intents++;
    }

    public static int compararNumero(int num) {
        if (numeroAleatori == num) return 0;
        if (numeroAleatori > num) return 1;
        return -1;
    }

    public static int getIntents() {
        return intents;
    }

    public static int getNumeroAleatori() {
        return numeroAleatori;
    }
}




