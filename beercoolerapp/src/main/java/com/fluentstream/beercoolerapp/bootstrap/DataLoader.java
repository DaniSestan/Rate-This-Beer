//package com.fluentstream.beercoolerapp.bootstrap;
//
//import com.fluentstream.beercoolerapp.domain.Beer;
//import com.fluentstream.beercoolerapp.repository.BeerRepository;
//import com.fluentstream.beercoolerapp.service.BeerService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class DataLoader implements CommandLineRunner {
//
//    private final BeerService beerService;
//
//    @Autowired
//    public DataLoader(BeerService beerService) {
//        this.beerService = beerService;
//    }
//
//    @Override
//    public void run(String... args) throws Exception {
//        loadData();
//    }
//
//    private void loadData(){
//
//        Beer budWeiser = new Beer();
//        budWeiser.setName("Budweiser");
//        budWeiser.setLikes(2);
//        budWeiser.setDislikes(1);
//
//        beerService.saveOrUpdateBeer(budWeiser);
////
//        Beer miller = new Beer();
//        budWeiser.setName("Miller");
//        budWeiser.setLikes(3);
//        budWeiser.setDislikes(8);
//
//        beerService.saveOrUpdateBeer(miller);
////
////        Beer coors = new Beer();
////        budWeiser.setName("Coors");
////        budWeiser.setLikes(4);
////        budWeiser.setDislikes(4);
////
//////        repository.save(coors);
//
//
//    }
//}
