package com.antonioalv.portfolio.model;

import lombok.NonNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;


@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    private String name;
//    @NotNull
    private String email;
//    @NotNull
    private String message;
//    @NotNull
//    private Boolean contacted;

//    @ManyToOne(cascade=CascadeType.PERSIST)
//    private Admin admin;

//    @OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
//    private Set<Event> events;
}
