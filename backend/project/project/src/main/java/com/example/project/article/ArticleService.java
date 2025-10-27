package com.example.project.article;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ArticleService {
    private final IArticleRepository repository;
    public ArticleService(IArticleRepository repo)
    {
        this.repository = repo;
    }
    public List<Article> getAll()
    {
        return repository.findAll();
    }
    public Article getById(Long id)
    {
        return repository.findById(id).orElse(null);
    }
    public Article add(Article article)
    {
        return repository.save(article);
    }
    public Article update(Article article)
    {
        return repository.save(article);
    }
    public void delete(Long id)
    {
        repository.deleteById(id);
    }
}
