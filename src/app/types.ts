export type seo = {
    entryTitle: string;
    title: string;
    description: string;
    canonicalUrl: string;
    isNoIndex:boolean;
  };
  
  export type items = {
    category: string[];
    url: string;
    chatId: string;
    isShowVaButton:boolean;
    isPageLiveChat:boolean;
    seo: seo;
  };
  
  export type Query = {
    pageTemplateCollection: any;
    items: items[];
  };
  