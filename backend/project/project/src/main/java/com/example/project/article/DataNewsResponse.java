package com.example.project.article;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class  DataNewsResponse  {
    public List<ArticleDto> results;

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class ArticleDto {
        public String title;
        public String link;
        public String source_id;
    }
}
