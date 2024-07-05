import { IDocument } from "./document-type";


const formatDate = (dateString: string): string => {
    const [monthString, dayString,  yearString] = dateString.split('-');    const month = parseInt(monthString, 10);
    const year = parseInt(yearString, 10);
    const day = parseInt(dayString, 10)
    const date = new Date(year, month - 1, day || parseInt(dayString, 10));
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).replace(/-/g, '/');
};
  
export const transformDocuments = (data: IDocument[]) =>
    data.map((document) => ({
      ...document,
      createdAt: formatDate(document.createdAt),
}));