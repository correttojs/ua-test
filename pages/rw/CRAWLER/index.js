import { Crawler } from "../../../components/Page";

const landing = Crawler("/");

export const getStaticProps = landing.getStaticProps;

export default landing.Component;
