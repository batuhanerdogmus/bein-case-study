import Head from "next/head";
import Image from "next/image";
import API from "../components/constant";
import Banner from "../components/banner";
import MovieSlider from "../components/movieSlider";
import Layout from "../components/layout";

export default function Home({ series, films }) {
  return (
    <Layout>
      <div>
        <Banner />
        <MovieSlider
          seed={series}
          type="series"
          genre="Diziler"
          des="Sevilen yerli ve yabancı dizileri istediğin yerde izle!"
        />
        <MovieSlider
          seed={films}
          type="films"
          genre="Filmler"
          des="Sevilen yerli ve yabancı filmler istediğin yerde izle!"
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API}/series`);
  const res2 = await fetch(`${API}/films`);
  const series = await res.json();
  const films = await res2.json();
  return {
    props: { series, films },
  };
}
