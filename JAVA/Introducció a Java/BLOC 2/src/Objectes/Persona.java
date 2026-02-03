package Objectes;

public class Persona {
    // Atributs privat de l'objecte (no són estàtics)
    private static int id = 0;
    private int identificador;
    private String nom;
    private int edat;
    private String email;
    private String telefon;

    public Persona(String nom, int edat, String email, String telefon) {
        this.nom = nom;
        this.edat = edat;
        this.email = email;
        this.telefon = telefon;
        this.identificador = ++id;
    }

    public Persona(String nom) {
        this.nom = nom;
        this.identificador = ++id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) throws Exception {
        if (nom.isEmpty() || nom.isBlank()) throw new Exception("No es pot possar un nom buit");
        this.nom = nom;
    }

    public int getEdat() {
        return edat;
    }

    public void setEdat(int edat) {
        this.edat = edat;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public int getIdentificador() {
        return identificador;
    }

    @Override
    public String toString() {
        return "nom = " + nom +
                "\n edat = " + edat +
                "\n email = " + email +
                "\n telefon = " + telefon +
                "\n identificador = " + identificador;
    }
}



