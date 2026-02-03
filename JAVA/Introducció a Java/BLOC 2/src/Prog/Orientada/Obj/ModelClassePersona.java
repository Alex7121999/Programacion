package Prog.Orientada.Obj;

import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public class ModelClassePersona {

    private String nif;
    private String nom;
    private String dataNaixement;

    public ModelClassePersona(String nif, String nom, String dataNaixement) {
        this.nif = nif;
        this.nom = nom;
        this.dataNaixement = dataNaixement;
    }

    public String getNif() {
        return nif;
    }

    public String getNom() {
        return nom;
    }

    public int getEdat() {
        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate data = LocalDate.parse(dataNaixement, format);
        return Period.between(data, LocalDate.now()).getYears();
    }
}
