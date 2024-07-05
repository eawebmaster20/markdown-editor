export interface DocumentIterface {
    createdAt: string;
    name: string;
    content: string;
    renderedText:string | Promise<string>
  }