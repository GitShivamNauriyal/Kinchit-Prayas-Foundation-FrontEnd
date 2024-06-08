declare module 'react-router-sitemap' {
    import { ReactElement } from 'react';
    class Sitemap {
      constructor(router: ReactElement);
      build(hostname: string): Sitemap;
      save(filepath: string): void;
    }
    export default Sitemap;
  }
  