package EndevinarEx1;

public class VistaEndevinar {
    private static String modeV = "CONSOLA";

    public static void mostrarMissatge(String missatge) {
        if (modeV.equals("CONSOLA")) System.out.println(missatge);
        else if (modeV.equals("UPERCASE")) System.out.println(missatge.toUpperCase());
    }

    public static void setModeV(String mode) {
        if (!mode.equals("")) return;
        modeV = mode;
    }
}
