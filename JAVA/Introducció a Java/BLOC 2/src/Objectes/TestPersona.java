package Objectes;

public class TestPersona {
    public static void main(String [] args){
        Persona p1 = new Persona ("Pere");
        Persona p2 = new Persona ("Pere", 35, "psanches@sapalomera.cat", "999999999");
        Persona p3 = new Persona ("Pere", 35, "psanches@sapalomera.cat", "999999999");
        modificarNom(p2, "Anna");
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);
    }

    public static void modificarNom(Persona p, String nom){
        try{
            p.setNom(nom);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
