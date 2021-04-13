import { Crawler } from "../../../components/Page";

const landing = Crawler("/filme");

export const getStaticProps = landing.getStaticProps;

export default landing.Component;
