package br.edu.ifpb.vinyljoy.vinyljoy.controller;

import br.edu.ifpb.vinyljoy.vinyljoy.model.Disco;
import br.edu.ifpb.vinyljoy.vinyljoy.service.DiscoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")


public class DiscoController {

	   @Autowired
	   private DiscoService discoService;
	   
	   @GetMapping("/discos")
	   public List<Disco> getDiscos() {
	       return this.discoService.getDiscos();
	   }
	   @GetMapping("/discos/{string}")
	   public Disco getDiscoPorBarCode(String barCodeDisco) {
	       return this.discoService.getDiscoPorBarCode(barCodeDisco);
	   }

	   @PostMapping("/discos")
	   public Disco inserirDisco(@RequestBody Disco disco) {
	       return this.discoService.inserirOuAtualizar(disco);
	       
	   }
	   @PutMapping("/discos/{string}")
	   public Disco atualizarDisco(@RequestBody Disco disco) {
	       return this.discoService.inserirOuAtualizar(disco);
	       
	   }
	   @DeleteMapping("/discos/{string}")
	   public void apagarDisco(@PathVariable("string") String barCode) {
	       this.discoService.apagar(barCode);
	   }
	}