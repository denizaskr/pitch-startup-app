import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
    <section className="pink_container">
    <h1 className="heading">Pitch Your Startup, Connect With Entrepreneurs</h1>
   <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Compotetions</p>
   <SearchForm />
    </section>
  
    </>
  );
}
