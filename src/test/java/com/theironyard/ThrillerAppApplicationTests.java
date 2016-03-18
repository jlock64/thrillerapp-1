package com.theironyard;

import com.fasterxml.jackson.databind.ObjectMapper;
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
		thrills.deleteAll();
		photos.deleteAll();
		favorites.deleteAll();
		mockMvc = MockMvcBuilders.webAppContextSetup(wap).build();
	}

	@Test
	public void testAddUser() throws Exception {
		User user = new User();
		user.setName("Alice");
		user.setPasswordHash("password");
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(user);
		mockMvc.perform(
				MockMvcRequestBuilders.post("/user")
						.content(json)
						.contentType("application/json")
		);

		Assert.assertTrue(users.count() == 1);
	}

    @Test
    public void testDeleteUser() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.delete("/user/1")
        );
        Assert.assertTrue(users.count() == 0);
    }

	@Test
	public void testLogin() throws Exception {
		mockMvc.perform(
				MockMvcRequestBuilders.post("/login")
						.param("name", "AliceTestUser")
		);
		Assert.assertTrue(users.count() == 1);
	}

//	@Test
//	public void testAddThrill() throws Exception {
//		testLogin();
//		mockMvc.perform(
//				MockMvcRequestBuilders.post("/thrill")
//						.param("title", "Test adding thrill TITLE")
//						.param("postTime", LocalDateTime.now().toString())
//						.param("date", LocalDate.now().toString())
//						.param("location", "Test adding thrill LOCATION")
//						.param("summary", "Test adding thrill SUMMARY")
//						.sessionAttr("name", "AliceTestUser")
//		);
//		Assert.assertTrue(thrills.count() == 1);
//	}

}