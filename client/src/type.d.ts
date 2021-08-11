export interface Book {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  publishedDate: string;
}


export interface Result {
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: [];
    publisher: string;
    publishedDate: string;
    imageLinks: {
    thumbnail: string;
    }
  }
  selfLink: string;
  etag: string;
  id: string;
  kind: string;
  accessInfo: { country: string; viewability: string; embeddable: boolean; publicDomain: boolean; textToSpeechPermission: string }
}

export interface ContextProps {
  unSortedResults: Result[]; 
  setResults: any; 
  sortOrder: 'Oldest' | 'Newest'; 
  setSortOrder: any; 
  myList: Book[]; 
  setMyList: any;
}

