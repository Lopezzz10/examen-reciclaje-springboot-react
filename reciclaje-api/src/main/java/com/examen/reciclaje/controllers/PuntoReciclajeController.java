package com.examen.reciclaje.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.examen.reciclaje.entidades.PuntoReciclaje;
import com.examen.reciclaje.repositories.PuntoReciclajeRepository;

@RestController
@RequestMapping("/api/puntos")
public class PuntoReciclajeController {

    private final PuntoReciclajeRepository repository;

    public PuntoReciclajeController(PuntoReciclajeRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<PuntoReciclaje> listar() {
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PuntoReciclaje guardar(@RequestBody PuntoReciclaje punto) {
        punto.setId(null); 
        return repository.save(punto);
    }
}