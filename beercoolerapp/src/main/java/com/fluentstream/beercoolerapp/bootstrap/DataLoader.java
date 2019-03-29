package com.fluentstream.beercoolerapp.bootstrap;

import com.fluentstream.beercoolerapp.domain.Beer;
import com.fluentstream.beercoolerapp.repository.BeerRepository;
import com.fluentstream.beercoolerapp.service.BeerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final BeerService beerService;

    @Autowired
    public DataLoader(BeerService beerService) {
        this.beerService = beerService;
    }

    @Override
    public void run(String... args) throws Exception {

        preloadData();
    }


    protected void preloadData() {
        Beer budWeiser = new Beer();
        budWeiser.setName("Budweiser");
        budWeiser.setLikes(2);
        budWeiser.setDislikes(1);

        Beer miller = new Beer();
        miller.setName("Miller");
        miller.setLikes(4);
        miller.setDislikes(7);
        beerService.saveOrUpdateBeer(budWeiser);
        beerService.saveOrUpdateBeer(miller);

    }

}
