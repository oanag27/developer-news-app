package com.example.project.article;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class Article {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String url;
    private String source;
    public String getTitle() {
        return title;
    }
    public String getUrl() {
        return url;
    }
    public String getSource() {
        return source;
    }
    public void setUrl(String url)
    {
        this.url = url;
    }
    public void setSource(String source)
    {
        this.source = source;
    }
    public void setTitle(String title)
    {
        this.title = title;
    }
}
