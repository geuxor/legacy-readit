export interface Book {
  title: string;
  description: string;
  image: string;
  author: string;
  publishedDate: string;
}

export interface Result {
  title: string;
  description: string;
  image: string;
  author: string;
  publishedDate: string;
}


// accessInfo: { country: "ES", viewability: "PARTIAL", embeddable: true, publicDomain: false, textToSpeechPermission: "ALLOWED", … }
// etag: "NOSDIlgUzVg"
// id: "0J9GDwAAQBAJ"
// kind: "books#volume"
// saleInfo: { country: "ES", saleability: "FOR_SALE", isEbook: true, listPrice: { … }, retailPrice: { … }, … }
// searchInfo: { textSnippet: "<b>Git</b> considera la toma de instantáneas para … proyectos. Gitutiliza instantáneas para&nbsp;..." }
// selfLink: "https://www.googleapis.com/books/v1/volumes/0J9GDwAAQBAJ"
// volumeInfo: { title: string, subtitle: "Desarrollo frontend y backend - Curso visual y práctico", authors: Array(3), publisher: "RedUsers", publishedDate: "2018-01-12", … }
