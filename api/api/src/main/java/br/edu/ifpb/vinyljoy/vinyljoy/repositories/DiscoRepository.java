package br.edu.ifpb.vinyljoy.vinyljoy.repositories;

import br.edu.ifpb.vinyljoy.vinyljoy.model.Disco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DiscoRepository extends JpaRepository<Disco, String> {

   public List<Disco> findByTituloAndGenero(String titulo, String genero);

   @Query("SELECT d FROM Disco d where d.titulo='Rock")
   public List<Disco> getDiscosRock();
}

