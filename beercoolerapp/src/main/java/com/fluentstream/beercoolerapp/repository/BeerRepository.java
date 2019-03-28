package com.fluentstream.beercoolerapp.repository;

import com.fluentstream.beercoolerapp.domain.Beer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeerRepository extends CrudRepository<Beer, Long> {
    Beer getById(Long id);
}
