export const getStaticPropsDefault = () => {
  return Array.from(Array(10).keys()).map((i) => `Test Element ${i}`);
};

export const getStaticPropsCrawler = () => {
  return Array.from(Array(100).keys()).map(
    (i) => `Test Element ${Math.floor(Math.random() * 100)}`
  );
};

export const DefaultComp = ({ initialData, path }) => {
  return (
    <div>
      This is Default {path}
      {initialData.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
};

export const CrawlerComp = ({ initialData, path }) => {
  return (
    <div>
      This is a Crawler {path}
      {initialData.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
};

export const Crawler = (path) => ({
  getStaticProps: async () => {
    const initialData = getStaticPropsCrawler();
    return { props: { initialData, path }, revalidate: 60 * 5 };
  },
  Component: CrawlerComp,
});

export const Default = (path) => ({
  getStaticProps: async () => {
    const initialData = getStaticPropsDefault();
    return { props: { initialData, path }, revalidate: 60 };
  },
  Component: DefaultComp,
});
