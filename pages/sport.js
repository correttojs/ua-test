import { Default } from "../components/Page";

const landing = Default("/sport");

export const getStaticProps = landing.getStaticProps;

export default landing.Component;
