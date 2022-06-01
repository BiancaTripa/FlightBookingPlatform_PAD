package com.example.httpPageSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HttpPageSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(HttpPageSpringApplication.class, args);
	}

	@Autowired
	BlogRespository blogRespository;

	@GetMapping("/blog")
	public List<Blog> index(){
		return blogRespository.findAll();
	}

	@GetMapping("/blog/{id}")
	public Blog show(@PathVariable String id){
		int blogId = Integer.parseInt(id);
		return blogRespository.findOne(blogId);
	}

	@PostMapping("/blog/search")
	public List<Blog> search(@RequestBody Map<String, String> body){
		String searchTerm = body.get("text");
		return blogRespository.findByTitleContainingOrContentContaining(searchTerm, searchTerm);
	}

	@PostMapping("/blog")
	public Blog create(@RequestBody Map<String, String> body){
		String title = body.get("title");
		String content = body.get("content");
		return blogRespository.save(new Blog(title, content));
	}

	@PutMapping("/blog/{id}")
	public Blog update(@PathVariable String id, @RequestBody Map<String, String> body){
		int blogId = Integer.parseInt(id);
		// getting blog
		Blog blog = blogRespository.findOne(blogId);
		blog.setTitle(body.get("title"));
		blog.setContent(body.get("content"));
		return blogRespository.save(blog);
	}

	@DeleteMapping("blog/{id}")
	public boolean delete(@PathVariable String id){
		int blogId = Integer.parseInt(id);
		blogRespository.delete(blogId);
		return true;
	}
}