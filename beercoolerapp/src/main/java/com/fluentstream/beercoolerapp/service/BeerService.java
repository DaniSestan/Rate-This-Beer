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


        if (((Integer)(beer.getLikes())== null)){
            beer.setLikes(0);
        }
        if (((Integer)(beer.getDislikes())== null)){
            beer.setDislikes(0);
        }
        if ((beer.getLikes()) > beer.getDislikes()){
            beer.setStatus("LIQUID_GOLD");
        }
        else if ((beer.getLikes()) < beer.getDislikes()){
            beer.setStatus("SWILL");
        }
        else {
            beer.setStatus("ACCEPTABLE");
        }

        System.out.println("TOTAL LIKES PRINTED:"+beer.getName());
        System.out.println("TOTAL LIKES PRINTED:"+beer.getLikes());
        System.out.println("TOTAL LIKES PRINTED:"+beer.getStatus());
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
