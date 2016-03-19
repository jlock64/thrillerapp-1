package com.theironyard.controllers;

import com.theironyard.entities.Favorite;
import com.theironyard.entities.Thrill;
import com.theironyard.entities.User;
import com.theironyard.services.FavoriteRepository;
import com.theironyard.services.PhotoRepository;
import com.theironyard.services.ThrillRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by drewmunnerlyn on 3/17/16.
 */
@RestController
public class ThrillerAppController {
    @Autowired
    UserRepository users;

    @Autowired
    ThrillRepository thrills;

    @Autowired
    PhotoRepository photos;

    @Autowired
    FavoriteRepository favorites;

    Server dbui;

    @PostConstruct
    public void construct() throws SQLException, SQLException {
        dbui = Server.createWebServer().start();
    }

    @PreDestroy
    public void destroy() {
        dbui.stop();
    }

    @PostConstruct
    public void init() throws PasswordStorage.CannotPerformOperationException {
        User user = new User();
        user.setName("Alice");
        user.setPassword(PasswordStorage.createHash("password"));
        users.save(user);
    }

    @RequestMapping(path = "/user", method = RequestMethod.POST)
    public User login(@RequestBody User user, HttpSession session) throws Exception {
        User existingUser = users.findByName(user.getName());
        if (existingUser == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
            existingUser = user;
        }
        else if (!PasswordStorage.verifyPassword(user.getPassword(), existingUser.getPassword())) {
            throw new Exception("incorrect password!");
        }
        session.setAttribute("name", existingUser.getName());
        return existingUser;
    }

//    @RequestMapping(path = "/login", method = RequestMethod.GET)
//    public User getLogin(HttpSession session) {
//        String name = (String) session.getAttribute("name");
//        return users.findByName(name);
//    }

    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate();
    }

    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public List<User> getUsers() {
        return (List<User>) users.findAll();
    }

//    @RequestMapping(path = "/user", method = RequestMethod.POST)
//    public void addUser(@RequestBody User user) throws PasswordStorage.CannotPerformOperationException {
//        user.setPassword(PasswordStorage.createHash(user.getPassword()));
//        users.save(user);
//    }

    @RequestMapping(path = "/user/{id}", method = RequestMethod.PUT)
    public void updateUser(@RequestBody User user, @PathVariable("id") int id) {
        users.save(user);
    }

    @RequestMapping(path = "/user/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable("id") int id) {
        users.delete(id);
    }

    @RequestMapping(path = "/user/{id}", method = RequestMethod.GET)
    public User getUser(@PathVariable("id") int id) {
        return users.findOne(id);
    }

    @RequestMapping(path = "/thrill", method = RequestMethod.POST)
    public Thrill addThrill(@RequestBody Thrill thrill, HttpSession session) {
        String name = (String) session.getAttribute("name");
        User user = users.findByName(name);
        thrill.setUser(user);
        thrills.save(thrill);
        return thrill;
    }

    @RequestMapping(path = "/thrill", method = RequestMethod.GET)
    public List<Thrill> getThrills() {
        return (List<Thrill>) thrills.findAll();
    }

    @RequestMapping(path = "/thrill/{id}", method = RequestMethod.GET)
    public Thrill getThrill(@PathVariable("id") int id) {
        return thrills.findOne(id);
    }


    @RequestMapping(path = "/thrill/{id}", method = RequestMethod.DELETE)
    public void deleteThrill(@PathVariable("id") int id) {
        thrills.delete(id);
    }

    @RequestMapping(path = "/thrill/{id}", method = RequestMethod.PUT)
    public void editThrill(@RequestBody Thrill thrill, @PathVariable("id") int id) {
        thrills.save(thrill);
    }

    @RequestMapping(path = "/favorite", method = RequestMethod.POST)
    public void favorite(HttpSession session, int id) {
        String name = (String) session.getAttribute("name");
        if (name != null) {
            User user = users.findByName(name);
            Thrill thrill = thrills.findOne(id);
            favorites.save(new Favorite(user, thrill));
        }
    }


    //need a Put route for favorite? to be able to toggle/edit whether or not you still "favorite" something

    //need a Get route for favorite to findAll? to be able to get the total amount of favorites for a thrill item and then rank by amount of favorites Ascending order

    //need the following routes for photo: get(one), get(all), delete ? don't need put since you dont edit photo uploads.
}



