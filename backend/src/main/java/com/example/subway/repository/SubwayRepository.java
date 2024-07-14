package com.example.subway.repository;

import com.example.subway.entity.Station;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface SubwayRepository extends JpaRepository<Station,Integer> {
    @Override
    ArrayList<Station> findAll();
}
