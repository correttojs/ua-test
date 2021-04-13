import { Crawler } from "../../../components/Page";

const landing = Crawler("/sport");

export const getStaticProps = landing.getStaticProps;

export default landing.Component;
