import { Default } from "../components/Page";

const landing = Default("/");

export const getStaticProps = landing.getStaticProps;

export default landing.Component;
