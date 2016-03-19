package com.theironyard;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.theironyard.entities.Thrill;
import com.theironyard.entities.User;
import com.theironyard.services.FavoriteRepository;
import com.theironyard.services.PhotoRepository;
import com.theironyard.services.ThrillRepository;
import com.theironyard.services.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.time.LocalDate;
import java.time.LocalDateTime;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = ThrillerAppApplication.class)
@WebAppConfiguration
public class ThrillerAppApplicationTests {
	@Autowired
	UserRepository users;

	@Autowired
	ThrillRepository thrills;

	@Autowired
	PhotoRepository photos;

	@Autowired
	FavoriteRepository favorites;

	@Autowired
	WebApplicationContext wap;

	MockMvc mockMvc;

	@Before
	public void before() {
		users.deleteAll();
		thrills.deleteAll();
		photos.deleteAll();
		favorites.deleteAll();
		mockMvc = MockMvcBuilders.webAppContextSetup(wap).build();
	}

	@Test
	public void testAddUser() throws Exception {
		User user = new User();
		user.setName("Alice");
		user.setPassword("password");
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(user);
		mockMvc.perform(
				MockMvcRequestBuilders.post("/user")
						.content(json)
						.contentType("application/json")
		);

		Assert.assertTrue(users.count() == 1);
	}

//    @Test
//    public void testDeleteUser() throws Exception {
//        testAddUser();
//        mockMvc.perform(
//                MockMvcRequestBuilders.delete("/user/1")
//        );
//        Assert.assertTrue(users.count() == 0);
//    }

	@Test
	public void testLogin() throws Exception {
		User user = new User();
		user.setName("Alice");
		user.setPassword("password");
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(user);
		mockMvc.perform(
				MockMvcRequestBuilders.post("/login")
						.content(json)
						.contentType("application/json")
		);
		Assert.assertTrue(users.count() == 1);
	}

//	@Test
//	public void testAddThrill() throws Exception {
//        testAddUser();
//        testLogin();
////		User user = new User();
//		Thrill thrill = new Thrill();
////        thrill.setUser(users.findByName("Alice"));
//		thrill.setTitle("TestTITLE");
//		thrill.setPostTime(LocalDateTime.now());
//		thrill.setDate(LocalDate.now());
//		thrill.setLocation("TestLOCATION");
//		thrill.setSummary("Test adding thrill SUMMARY");
//		ObjectMapper mapper = new ObjectMapper();
//		String json = mapper.writeValueAsString(thrill);
//		mockMvc.perform(
//				MockMvcRequestBuilders.post("/thrill")
//					.content(json)
//					.contentType("application/json")
//					.sessionAttr("name", "Alice")
//		);
//		Assert.assertTrue(thrills.count() == 1);
//	}

}