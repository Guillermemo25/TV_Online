// 🎬 Datos de los videos
const canales = [
    {
        id: 1,
        titulo: "Animal Planet",
        descripcion: "Canal de documentales sobre animales y naturaleza.",
        url: "https://embed.saohgdasregions.fun/embed/animalplanet.html",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Animal_Planet.png",
        clasificacion: "Documentales"
    },
    {
        id: 2,
        titulo: "Discovery Channel",
        descripcion: "Documentales sobre ciencia, naturaleza y cultura.",
        url: "https://embed.saohgdasregions.fun/embed/discoverychannel.html",
        img: "https://images.seeklogo.com/logo-png/4/1/discovery-channel-logo-png_seeklogo-41901.png",
        clasificacion: "Documentales"
    },
    {
        id: 3,
        titulo: "History",
        descripcion: "Canal documental sobre historia y ciencia.",
        url: "https://embed.saohgdasregions.fun/embed/history.html",
        img: "https://images.seeklogo.com/logo-png/22/1/the-history-channel-logo-png_seeklogo-222414.png",
        clasificacion: "Documentales"
    },
    {
        id: 4,
        titulo: "Nat Geo",
        descripcion: "Canal de ciencia, naturaleza y exploración.",
        url: "https://embed.saohgdasregions.fun/embed/natgeo.html",
        img: "https://thumbs.dreamstime.com/b/national-geographic-channel-logo-vector-format-available-illustrator-ai-national-geographic-channel-logo-148310928.jpg",
        clasificacion: "Documentales"
    },
    {
        id: 5,
        titulo: "Azteca Uno",
        descripcion: "Canal mexicano con programación general.",
        url: "https://embed.saohgdasregions.fun/embed/aztecauno.html",
        img: "https://images.seeklogo.com/logo-png/43/2/azteca-uno-logo-png_seeklogo-430704.png",
        clasificacion: "Entretenimiento"
    },
    {
        id: 6,
        titulo: "Azteca 7",
        descripcion: "Canal de televisión mexicana con programación general.",
        url: "https://embed.saohgdasregions.fun/embed/azteca7.html",
        img: "https://www.mundoprotegido.com/wp-content/uploads/2023/03/como-ver-azteca-7-en-vivo.png",
        clasificacion: "Entretenimiento"
    },
    {
        id: 7,
        titulo: "Canal 5",
        descripcion: "Canal de entretenimiento con series, películas y caricaturas.",
        url: "https://embed.saohgdasregions.fun/embed/canal5.html",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/07/Logotipo-Canal-5-M%C3%A9xico.png",
        clasificacion: "Entretenimiento"
    },
    {
        id: 8,
        titulo: "Distrito Comedia",
        descripcion: "Canal de comedia con programación mexicana.",
        url: "https://embed.saohgdasregions.fun/embed/distritocomedia.html",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Logo_Distrito_Comedia.png",
        clasificacion: "Entretenimiento"
    },
    {
        id: 9,
        titulo: "Las Estrellas",
        descripcion: "Canal principal de Televisa con novelas y entretenimiento.",
        url: "https://embed.saohgdasregions.fun/embed/lasestrellas.html",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Las_Estrellas_logo_%282016%29.png",
        clasificacion: "Entretenimiento"
    },
    {
        id: 10,
        titulo: "TLNovelas",
        descripcion: "Canal dedicado a telenovelas mexicanas.",
        url: "https://embed.saohgdasregions.fun/embed/tlnovelas.html",
        img: "https://cdn.mitvstatic.com/channels/mx_tlnovelas_m.png",
        clasificacion: "Entretenimiento"
    },
    {
        id: 11,
        titulo: "Cartoon Network",
        descripcion: "Canal de caricaturas y series animadas.",
        url: "https://embed.saohgdasregions.fun/embed/cartoonnetwork.html",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fe/CARTOON_NETWORK_logo.png",
        clasificacion: "Infantil"
    },
    {
        id: 12,
        titulo: "Disney Channel",
        descripcion: "Canal juvenil con series y películas de Disney.",
        url: "https://embed.saohgdasregions.fun/embed/disneychannel.html",
        img: "https://cdn.mitvstatic.com/channels/cl_disney-channel_m.png",
        clasificacion: "Infantil"
    },
    {
        id: 13,
        titulo: "Disney JR",
        descripcion: "Canal infantil de Disney para niños pequeños.",
        url: "https://embed.saohgdasregions.fun/embed/disneyjr.html",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWyVcgbta5_RL2K2EPgrPiK-DrW7icmSCNQ&s",
        clasificacion: "Infantil"
    },
    {
        id: 14,
        titulo: "Tooncast",
        descripcion: "Canal de caricaturas clásicas.",
        url: "https://embed.saohgdasregions.fun/embed/tooncast.html",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Tooncast.png",
        clasificacion: "Infantil"
    },
    {
        id: 15,
        titulo: "ESPN",
        descripcion: "Canal líder en deportes internacionales.",
        url: "https://embed.saohgdasregions.fun/embed/espnmexico.html",
        img: "https://pbs.twimg.com/profile_images/856564125455065089/MAJ4Buek_400x400.jpg",
        clasificacion: "Deportes"
    },
    {
        id: 16,
        titulo: "Fox Sports",
        descripcion: "Canal deportivo con transmisiones en vivo.",
        url: "https://embed.saohgdasregions.fun/embed/foxsportsmexico.html",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Fox_Sports_M%C3%A9xico_Logo_2022.png",
        clasificacion: "Deportes"
    },
    {
        id: 17,
        titulo: "Cinemax",
        descripcion: "Canal de cine con películas de estreno.",
        url: "https://embed.saohgdasregions.fun/embed/cinemax.html",
        img: "https://download.logo.wine/logo/Cinemax/Cinemax-Logo.wine.png",
        clasificacion: "Cine y Series"
    },
    {
        id: 18,
        titulo: "FX",
        descripcion: "Canal de series y películas para adultos.",
        url: "https://embed.saohgdasregions.fun/embed/fx.html",
        img: "https://images.seeklogo.com/logo-png/30/2/fx-tv-channel-logo-png_seeklogo-307536.png",
        clasificacion: "Cine y Series"
    },
    {
        id: 19,
        titulo: "Golden Edge",
        descripcion: "Canal de películas de acción y suspenso.",
        url: "https://embed.saohgdasregions.fun/embed/goldenedge.html",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Golden_Edge_Logo.png",
        clasificacion: "Cine y Series"
    },
    {
        id: 20,
        titulo: "Space",
        descripcion: "Canal de películas de acción, terror y suspenso.",
        url: "https://embed.saohgdasregions.fun/embed/space.html",
        img: "https://logos-world.net/wp-content/uploads/2023/03/Space-Logo.png",
        clasificacion: "Cine y Series"
    },
    {
        id: 21,
        titulo: "Star Channel",
        descripcion: "Canal de películas y series populares.",
        url: "https://embed.saohgdasregions.fun/embed/starchannel.html",
        img: "https://images.seeklogo.com/logo-png/40/2/star-channel-logo-png_seeklogo-403871.png",
        clasificacion: "Cine y Series"
    },
    {
        id: 22,
        titulo: "Studio Universal",
        descripcion: "Películas y contenido de Universal Studios.",
        url: "https://embed.saohgdasregions.fun/embed/studiouniversal.html",
        img: "https://cdn.mitvstatic.com/channels/fd8cde27-1fa8-46f4-a2ff-96436bbe6912_m.jpg",
        clasificacion: "Cine y Series"
    },
    {
        id: 23,
        titulo: "TNT",
        descripcion: "Películas, series y transmisiones en vivo.",
        url: "https://embed.saohgdasregions.fun/embed/tnt.html",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_TNT_Series.png",
        clasificacion: "Cine y Series"
    },
    {
        id: 24,
        titulo: "Warner Bros",
        descripcion: "Series y películas de Warner Channel.",
        url: "https://embed.saohgdasregions.fun/embed/warnerchannel.html",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Warner2018LA.png/250px-Warner2018LA.png",
        clasificacion: "Cine y Series"
    }
];