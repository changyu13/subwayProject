package com.example.subway.controller;

import com.example.subway.entity.Station;
import com.example.subway.repository.SubwayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class LineController {
    @Autowired
    SubwayRepository subwayRepository;
    @GetMapping("/api/station")
    public ResponseEntity<ArrayList<Station>> getStation() {
        ArrayList<Station> subwayList = new ArrayList<>();
        subwayList = subwayRepository.findAll();
        if (subwayList==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        else
            return ResponseEntity.status(HttpStatus.OK).body(subwayList);
    }
}
