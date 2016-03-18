package com.theironyard.services;

import com.theironyard.entities.Photo;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by drewmunnerlyn on 3/17/16.
 */
public interface PhotoRepository extends CrudRepository<Photo, Integer> {
}
