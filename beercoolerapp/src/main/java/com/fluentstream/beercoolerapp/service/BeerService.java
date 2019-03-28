package com.fluentstream.beercoolerapp.service;

import com.fluentstream.beercoolerapp.domain.Beer;
import com.fluentstream.beercoolerapp.repository.BeerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BeerService {

    @Autowired
    private BeerRepository beerRepository;

    public Beer saveOrUpdateBeer(Beer beer){

        if (beer.getLikes()== null){
            beer.setLikes(0);
        }

        if (beer.getDislikes()== null){
            beer.setDislikes(0);
        }

        if ((beer.getLikes().intValue())>(beer.getDislikes().intValue())){
            beer.setStatus("LIQUID_GOLD");
        }
        else if ((beer.getLikes().intValue())<(beer.getDislikes().intValue())){
            beer.setStatus("SWILL");
        }
        else {
            beer.setStatus("ACCEPTABLE");
        }

        return beerRepository.save(beer);

    }

    public Iterable<Beer> findAll(){
        return beerRepository.findAll();
    }

    public Beer findById(Long id){
        return beerRepository.getById(id);
    }

    public void delete(Long id){
        Beer beer = findById(id);
        beerRepository.delete(beer);
    }
}
