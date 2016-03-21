package com.theironyard.controllers;

import com.theironyard.entities.Favorite;
import com.theironyard.entities.Photo;
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
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileOutputStream;
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

    @RequestMapping(path = "/user", method = RequestMethod.POST)
    public User login(@RequestBody User user, HttpSession session) throws Exception {
        if (users.findByName(user.getName()) == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
            session.setAttribute("name", user.getName());
        } else if (users.findByName(user.getName()) != null) {
            User existing = users.findByName(user.getName());
            if (PasswordStorage.verifyPassword(user.getPassword(), existing.getPassword())) {
                session.setAttribute("name", user.getName());
            } else if (!PasswordStorage.verifyPassword(user.getPassword(), existing.getPassword())) {
                throw new Exception("Username and Password do not match");
            }
        }
        return user;
    }

    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate();
    }

    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public List<User> getUsers() {
        return (List<User>) users.findAll();
    }

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
    public Thrill addThrill(@RequestBody Thrill thrill, HttpSession session) throws Exception {
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
}



