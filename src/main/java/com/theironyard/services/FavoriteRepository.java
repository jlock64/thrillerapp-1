package com.theironyard.services;

import com.theironyard.entities.Favorite;
import com.theironyard.entities.Thrill;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by drewmunnerlyn on 3/17/16.
 */
public interface FavoriteRepository extends CrudRepository<Favorite, Integer> {
    Favorite findByUserAndThrill(User user, Thrill thrill);

}
