package fr.adriencaubel.oauth2_poc.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    @GetMapping("/public")
    public String publicApi() {
        return "public";
    }

    @GetMapping("/private")
    public String privateApi() {
        return "private";
    }
}
