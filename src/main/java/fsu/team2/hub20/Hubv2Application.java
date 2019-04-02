package fsu.team2.hub20;




import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import fsu.team2.hub20.Services.StorageService;

/**
 * 
 * @author bregn
 * 
 *
 */


@SpringBootApplication
public class Hubv2Application  implements CommandLineRunner{
	
	 @Resource
	 StorageService storageService;
	
	public static void main(String[] args) {
		SpringApplication.run(Hubv2Application.class, args);
	}

	@Override
	  public void run(String... arg) throws Exception {
	    storageService.deleteAll();
	    storageService.init();
	  }

	
}

