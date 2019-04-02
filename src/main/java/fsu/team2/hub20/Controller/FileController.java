package fsu.team2.hub20.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;


import fsu.team2.hub20.Services.StorageService;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(path = "/api",  method = {RequestMethod.GET, RequestMethod.POST})
public class FileController {
	@Controller
	public class UploadController {
	 
	  @Autowired
	  StorageService storageService;
	 
	  List<String> files = new ArrayList<String>();
	  @CrossOrigin()
	  @RequestMapping(value = "/post", method =RequestMethod.POST,  consumes = "application/json", produces = "application/json")
	  public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
	    String message = "";
	    try {
	      storageService.store(file);
	      files.add(file.getOriginalFilename());
	 
	      message = "You successfully uploaded " + file.getOriginalFilename() + "!";
	      return ResponseEntity.status(HttpStatus.OK).body(message);
	    } catch (Exception e) {
	      message = "FAIL to upload " + file.getOriginalFilename() + "!";
	      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
	    }
	  }
	  @CrossOrigin("http://localhost:4200")
	  @GetMapping("/getallfiles")
	  public ResponseEntity<List<String>> getListFiles(Model model) {
	    List<String> fileNames = files
	        .stream().map(fileName -> MvcUriComponentsBuilder
	            .fromMethodName(UploadController.class, "getFile", fileName).build().toString())
	        .collect(Collectors.toList());
	 
	    return ResponseEntity.ok().body(fileNames);
	  }
	 
	  @GetMapping("/files/{filename:.+}")
	  @ResponseBody
	  public ResponseEntity<Resource> getFile(@PathVariable String filename) {
	    Resource file = storageService.loadFile(filename);
	    return ResponseEntity.ok()
	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
	        .body(file);
	  }
	}
}