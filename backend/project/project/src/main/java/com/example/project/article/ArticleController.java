package com.example.project.article;

import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/articles")
public class ArticleController {
    private final ArticleService service;
    private final DataNewsService newsService;
    public ArticleController(ArticleService serv, DataNewsService newsService) {
        this.service = serv;
        this.newsService = newsService;
    }
    @GetMapping
    public List<Article> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public Article getById(@PathVariable Long id) { return service.getById(id); }

    @PostMapping
    public Article add(@RequestBody Article article) { return service.add(article); }

    @PutMapping()
    public Article update(@RequestBody Article article) {
        return service.update(article);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { service.delete(id); }

    @GetMapping("/fetch")
    public List<Article> fetchTopTechArticles() {
        return newsService.fetchAndSaveTop10Articles();
    }
}
