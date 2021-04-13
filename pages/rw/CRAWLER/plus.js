import { Crawler } from "../../../components/Page";

const landing = Crawler("/plus");

export const getStaticProps = landing.getStaticProps;

export default landing.Component;
