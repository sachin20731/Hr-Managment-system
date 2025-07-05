package com.hr.system.controller;





import com.hr.system.model.Designation;
import com.hr.system.repository.DesignationRepository;
import com.hr.system.service.DesignationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/designations")
@CrossOrigin
public class DesignationController {

    @Autowired
    private DesignationRepository designationRepository;

    @Autowired
    private DesignationService designationService;

    @GetMapping
    public List<Designation> getAllDesignations() {
        return designationService.getAllDesignations();
    }

    @PostMapping
    public Designation createDesignation(@RequestBody Designation designation) {
        return designationService.createDesignation(designation);
    }

    @DeleteMapping("/{id}")
    public void deleteDesignation(@PathVariable Long id) {
        designationService.deleteDesignation(id);
    }
}



