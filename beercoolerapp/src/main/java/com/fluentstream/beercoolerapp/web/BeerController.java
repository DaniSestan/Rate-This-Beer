package com.fluentstream.beercoolerapp.web;

import com.fluentstream.beercoolerapp.domain.Beer;
import com.fluentstream.beercoolerapp.service.BeerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/coolerinventoryboard")
@CrossOrigin
public class BeerController {

    @Autowired
    private BeerService beerService;

    @PostMapping("")
    public ResponseEntity<?>addBeerToInventoryBoard (@Valid @RequestBody Beer beer, BindingResult result){

        if(result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();

            for(FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }

            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Beer newBeer = beerService.saveOrUpdateBeer(beer);

        return new ResponseEntity<Beer>(newBeer, HttpStatus.CREATED);
    }

    @GetMapping("/beer")
    public Iterable<Beer> getAllBeers(){
        return beerService.findAll();
    }

    @GetMapping("beer/{beer_id}")
    public ResponseEntity<?> getBeerById(@PathVariable Long beer_id){
        Beer beerRequest = beerService.findById(beer_id);
        return new ResponseEntity<>(beerRequest, HttpStatus.OK);
    }
    @DeleteMapping("beer/{beer_id}")
    public ResponseEntity<?> deleteBeer(@PathVariable Long beer_id){
        beerService.delete(beer_id);
        return new ResponseEntity<String>("Beer deleted", HttpStatus.OK);
    }
}
