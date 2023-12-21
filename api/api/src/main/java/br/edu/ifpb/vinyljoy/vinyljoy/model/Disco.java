package br.edu.ifpb.vinyljoy.vinyljoy.model;


import jakarta.persistence.Id;

import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "tb_disco")
public class Disco {

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private String barCode;
   private String titulo;
   private String banda;
   private String genero;
   private String gravadora;
 

 
   public String getTitulo() {
       return titulo;
   }

   public void setTitulo(String titulo) {
       this.titulo = titulo;
   }

   public String getBarCode() {
       return barCode;
   }

   public void setBarCode(String barCode) {
       this.barCode = barCode;
   }

   public String getBanda() {
       return banda;
   }

   public void setBanda(String banda) {
       this.banda = banda;
   }
   
   public String getGenero() {
       return genero;
   }

   public void setGenero(String genero) {
       this.genero = genero;
   }
   public String getGravadora() {
       return gravadora;
   }

   public void setGravadora(String gravadora) {
       this.gravadora= gravadora;
   }
}
