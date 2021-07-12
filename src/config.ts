const CONFIG = {
    menuItems: [
        {
            name: "Home",
            link: "home"
        },
        {
            name: "Sobre",
            link: "about"
        },
        {
            name: "Serviços",
            link: "services"
        },
        {
            name: "Contato",
            link: "contact"
        },
    ],
    homeContent: {
        greeting: 'Olá, nós somos'
    },
    aboutContent: {
        title: "Sobre nós",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
               labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
               laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
               voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    servicesContent: {
        title: "O que fazemos?",
        cards: [
            {
                title: "Desenvolvimento",
                text: "desenvolvimento de software como: webapps, hotsites, landing pages, android apps."
            },
            {
                title: "UI / UX",
                text: "desenvolvimento da jornada e experiência do usuário, UX writing, criação de protótipos."
            },
            {
                title: "Design",
                text: "Naming, branding, posts e vídeos para mídias sociais."
            }
        ]
    },
    
    contactContent: {
        title: "Entre em contato",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "Seu email",
        messagePlaceholder: "Descreva brevemente o motivo de seu contato ...",
        filesText: "anexar",
        btnText: "enviar"
    }
}

export default CONFIG;