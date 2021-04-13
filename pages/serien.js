import { Default } from "../components/Page";

const landing = Default("/serien");

export const getStaticProps = landing.getStaticProps;

export default landing.Component;
