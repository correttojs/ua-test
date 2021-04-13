import { Crawler } from "../../../components/Page";

const landing = Crawler("/serien");

export const getStaticProps = landing.getStaticProps;

export default landing.Component;
