import ProgrammerIcon from "@/assets/svg/ProgrammerIcon";
const Home = () => {
  return (
    <div className="pt-16 flex flex-col justify-center items-center text-center gap-8">
      <h1 className="font-bold text-3xl">Welcome to NextTS Challenges</h1>
      <div className="w-60 h-60 [&_*]:h-full [&_*]:w-full">
        <ProgrammerIcon />
      </div>
      <h3 className="font-bold text-2xl">
        Navigate between routes to see the different challenges.
      </h3>
    </div>
  );
};

export default Home;
