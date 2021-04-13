import { Default } from "../components/Page";

const landing = Default("/filme");

export const getStaticProps = landing.getStaticProps;

export default landing.Component;
