package br.edu.ifpb.vinyljoy.vinyljoy.service;

import br.edu.ifpb.vinyljoy.vinyljoy.repositories.DiscoRepository;
import br.edu.ifpb.vinyljoy.vinyljoy.model.Disco;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DiscoService {

	   @Autowired
	   private DiscoRepository discoRepository;

	   public List<Disco> getDiscos() {
	       return this.discoRepository.findAll();
	   }

	   public Disco getDiscoPorBarCode(String barCodeDisco) {
	       return this.discoRepository.findById(barCodeDisco).orElse(null);
	   }

	   @Transactional
	   public Disco inserirOuAtualizar(Disco disco) {
	       Disco discoInserido = this.discoRepository.save(disco);
	       if (disco.getBarCode().length() < 9) {
	           throw new RuntimeException("Codigo de barras não permitido");
	       }
	       return discoInserido;
	   }

	   public void apagar(String barCode) {
	       this.discoRepository.deleteById(barCode);
	   }
	}
