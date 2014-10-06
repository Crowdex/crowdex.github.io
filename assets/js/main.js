var teamData = [

    { id: 1, name: "Ing. Michal Kompan, PhD.", linkedin: null, github: null,
      profileData: [ "Popis popis popis popis popis", "Popis popis popis popis popis popis popis popis popis popis" ]
    },
    
    { id: 2, name: "Bc. Dušan Cymorek", linkedin: null, github: null,
      profileData: [ "Popis popis popis popis popis", "Popis popis popis popis popis popis popis popis popis popis" ]
    },
    
    { id: 3, name: "Bc. Peter Gašpar", linkedin: "https://www.linkedin.com/pub/peter-gašpar/91/968/95/", github: "petergaspar",
      profileData: [ "Bakalársky projekt Odporúčanie s využitím osobných vyjadrení.",
                     "Má pokročilé vedomosti a skúsenosti s programovacím jazykom PHP.",
                     "V práci nadobudol základné znalosti frameworku Nette.",
                     "Počas štúdia sa oboznámil najmä s jazykmi C, Java, MySQL.",
                     "Zaujíma sa o webové technológie a tvorbu webových aplikácií.",
                     "Vo voľnom čase najviac obľubuje čítanie kníh, sledovanie komediálnych seriálov a šport."
                   ]
    },
    
    { id: 4, name: "Bc. Vlamidír Ľalík", linkedin: "https://www.linkedin.com/pub/vladim%C3%ADr-%C4%BEal%C3%ADk/90/a28/3b4", github: null,
      profileData: [ "Bakalársky projekt Klientská časť pre bezdrôtové ovládanie pohybu vo virtuálnom priestore Android(Java), Unity3D (C#).",
                     "Má skúsenosti Javou, Php frameworkom (codeigniter), MySQL databázami, C++.",
                     "Pracovné skúsenosti s webovými aplikáciami (Wordpress).",
                     "Zaujíma sa o tvorbu mobilných a webových aplikácií.",
                     "Baví ho snowboard, fitness, horský bicykel." ]
    },
    
    { id: 5, name: "Bc. Michal Polko", linkedin: null, github: null,
      profileData: [ "Popis popis popis popis popis", "Popis popis popis popis popis popis popis popis popis popis" ]
    },
    
    { id: 6, name: "Bc. Slavomír Šárik", linkedin: "https://www.linkedin.com/pub/slavom%C3%ADr-%C5%A1%C3%A1rik/96/4b1/610", github: "slavosarik",
      profileData: [ "Bakalársky projekt Vytváranie databázových SQL dopytov v prirodzenom jazyku, Java, MySQL.",
                     "Pracovná skúsenosť v startupe s RubyOnRails.",
                     "Má skúsenosti s Javou, SQL databázami a webovými aplikáciami v Jave a RubyOnRails.",
                     "Zaujíma sa o mobilné technológie a hardware.",
                     "Baví ho jazda na motokárach a horskom bicykli."
                   ]
    },
    
    { id: 7, name: "Bc. Miroslav Šafárik", linkedin: null, github: null,
      profileData: [ "Bakalárske štúdium ukončil na matfyze v Bratislave vypracovaním bakalárskej práce na tému Informačný systém pre autoškoly. ",
                     "Pri jej tvorbe získal skúsenosti s frameworkom .NET (najmä s technológiami ADO.NET Entity Framework, WCF a WPF) a jazykom C#. ",
                     "Počas štúdia sa tiež oboznámil s jazykmi C++, Java, SQL, PL/SQL a PHP. ",
                     "Má základné skúsenosti s PHP frameworkom Yii a s Javou EE.",
                     "Má veľmi rád letectvo a lietadlá ako také.",
                     "Vo voľnom čase si rád pozrie dobrý film alebo seriál, prípadne si rád prečíta, čo sa deje v politike na Slovensku a vo svete."
                   ]
    },
    
    { id: 8, name: "Bc. Štefan Šmihla", linkedin: "https://www.linkedin.com/pub/%C5%A1tefan-%C5%A1mihla/85/628/352/en", github: null,
      profileData: [ "Bakalársky projekt \"Vplyv biometrických charakteristík používateľa na autentifikáciu pod smartfónovou platformou\".", 
                     "Má skúsenosti Python, Ruby, Java, C, PostgreSQL, MySQL.", 
                     "Pracovné skúsenosti API & Integration developer (Python, MySQL) a APi community support.", 
                     "Zaujíma sa o bezpečnosť, integrovateľnosť, webový backend, mobilné technológie.", 
                     "Baví ho programovanie, hebrejčina, kryptografia, psychológia, turistika, lyžovanie, korčuľovanie a prechádzky po lese."
                   ]
    }

];

$(function() {
    
    //$('#teamModal').modal('show');
    //loadTeamProfile(0);
    
    fullfillProfiles();
    
    $('[data-toggle="tooltip"]').tooltip();

});

function fullfillProfiles() {

    //user-desc-7
    $.each(teamData, function(key, data) {
        
        $("[rel='user-desc-"+key+"']").html(teamData[key].profileData[1].substr(0, 50)+"... <i class=\"fa fa-plus-circle\"></i>");
        
    });

}

function loadTeamProfile(id, modal) {

    var modal = (typeof(modal) == "undefined" ? false:modal);
    
    if (modal) {
        $('#teamModal').modal('show');
    }
    
    $("[rel='team-user-picture']").attr("src", "assets/img/team/"+teamData[id].id+".jpg");
    $("[rel='team-user-name']").html(teamData[id].name);
    
    if (teamData[id].linkedin) {
        $("[rel='team-user-links'] .linkedin").show().attr("href", teamData[id].linkedin);
        $("[rel='team-user-links'] .linkedin span").html("Pracovný profil");
    }
    else {
        $("[rel='team-user-links'] .linkedin").hide();
    }
    
    if (teamData[id].github) {
        $("[rel='team-user-links'] .github").show().attr("href", "https://github.com/"+teamData[id].github);
        $("[rel='team-user-links'] .github span").html(teamData[id].github);
    }
    else {
        $("[rel='team-user-links'] .github").hide();
    }
    
    $("[rel='team-user-data']").html("");
    
    $.each(teamData[id].profileData, function(key, value) {
        $("[rel='team-user-data']").append('<li>'+value+'</li>');
    });

}