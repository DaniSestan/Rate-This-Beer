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

        Beer miller = new Beer();
        miller.setName("Miller High Life");
        miller.setLikes(10);
        miller.setDislikes(0);

        Beer budWeiser = new Beer();
        budWeiser.setName("Fat Tire");
        budWeiser.setLikes(3);
        budWeiser.setDislikes(0);

        beerService.saveOrUpdateBeer(budWeiser);
        beerService.saveOrUpdateBeer(miller);
    }
}
