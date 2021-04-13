import { Default } from "../components/Page";

const landing = Default("/plus");

export const getStaticProps = landing.getStaticProps;

export default landing.Component;
