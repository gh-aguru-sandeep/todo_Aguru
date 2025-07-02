package com.example.todo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "todos")
public class Todo {
    @Id
    private String id;
    private String task;
    private boolean completed;
    private int priority; // Changed from String to int

    public Todo() {}

    public Todo(String id, String task, boolean completed, int priority) {
        this.id = id;
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }
    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }
    public int getPriority() { return priority; }
    public void setPriority(int priority) { this.priority = priority; }
}
