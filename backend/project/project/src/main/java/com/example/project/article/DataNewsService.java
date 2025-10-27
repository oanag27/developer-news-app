package com.example.project.article;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DataNewsService {
    @Value("${url.technology-news}")
    private String techNewsUrl;

    private final ArticleService articleService;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public DataNewsService(ArticleService articleService) {
        this.articleService = articleService;
    }

    public List<Article> fetchAndSaveTop10Articles() {
        List<Article> savedArticles = new ArrayList<>();
        try {
            String response = restTemplate.getForObject(techNewsUrl, String.class);
            JsonNode results = objectMapper.readTree(response).get("results");

            // Loop top 10 articles
            for (int i = 0; i < 10; i++) {
                JsonNode node = results.get(i);
                Article article = new Article();
                article.setTitle(node.get("title").asText());
                article.setUrl(node.get("link").asText());
                article.setSource(node.get("source_id").asText());
                savedArticles.add(articleService.add(article)); // save to DB
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return savedArticles;
    }
}
