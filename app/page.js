import Link from "next/link";
import FaqCard from "./components/Faq";
import Hero from "./components/Hero";
import Button from "./components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Mail from "./components/Mail";
import OurTeam from "./components/Team";
import BrandsThatChooseConture from "./components/Brand";
import ShortFormVideoEditing from "./components/ExpertiseItem";
import ImpactInMotion from "./components/ImpactInMotion";
import StrategySessionIdealFor from "./components/IdealForItem";
import MailSection from "./components/MailSection";
import VideoReview from "./components/VideoReview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <div className="w-full flex items-center justify-center flex-col ">
          <h1 className=" text-center w-full capitalize flex-wrap text-4xl p-4  font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            What sets us apart?
          </h1>
          <span className="text-gray-300 capitalize mx-auto md:my-4 my-2 text-xs md:text-base text-center relative z-10 leading-relaxed tracking-normal">
            <p className="text-gray-300 capitalize mx-auto md:my-4 my-2 text-2xl  text-center relative z-10 leading-relaxed tracking-normal font-bold">
              Our community at Conture Media.
            </p>{" "}
            We prioritize building a family-first environment where you can
            connect and collaborate with like-minded creators. Here, you&apos;re
            encouraged to discuss trending topics and share insights, creating a
            strong network of support and inspiration
          </span>
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center ">
          <ImpactInMotion />
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center ">
          <ShortFormVideoEditing />
        </div>
        <div className="overflow-hidden w-full items-center justify-center ">
          <BrandsThatChooseConture />
        </div>
        <div className="overflow-hidden w-full flex flex-col items-center justify-center ">
          <VideoReview />
        </div>
        <div className="w-full flex items-center justify-center flex-col my-10 md:p-5">
          <h2 className="text-4xl text-center p-4  font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Vision and Purpose: Words from Our Founder
          </h2>
          <p className="text-center  tracking-wide my-1 text-sm ">
            When you feel purposeless, find your purpose — and people will
            follow, transforming everything.
          </p>
          <p className="text-center  tracking-wide my-1 text-sm ">
            It&apos;s incredible—we navigate this unseen digital world, yet we
            can&apos;t fully experience it until the very end. At Conture Media,
            we embrace this journey, connecting and sharing every step of the
            way. We believe everyone has a story, but not everyone has the
            support they need. We strive to be that support, turning stories
            into shared experiences.&quot; What do you really have, if not the
            stories shaped by your journey?
          </p>
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center p-3">
          <OurTeam />
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center p-3">
          <StrategySessionIdealFor />
        </div>
      </div>

      <div
        className="w-full p-10 text-white flex md:flex-row flex-col  items-center justify-evenly"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <h1 className="md:w-1/2 text-center w-full capitalize flex-wrap text-4xl p-4  font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Grab Your Free E-Book: Mastering the Art of Viral Videos
        </h1>
        <div className="w-full md:w-1/2 justify-center items-center">
          <MailSection className="md:mb-4" />
        </div>
      </div>

      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <Link
          href={"/price"}
          className="my-4 text-[#FF1493] hover:underline flex items-center justify-center space-x-2 cursor-pointer"
        >
          <p>Go to Price Page</p>
          <FaArrowRightLong />
        </Link>
        <p className="text-4xl font-bold my-5 text-center">
          All the answers you&apos;re looking for
        </p>
        <div className="xl:w-1/2 w-full flex items-center justify-center p-3">
          <FaqCard numQuestions={4} />
        </div>

        <Link href="/faq">
          <Button text={"View all FAQs"} />
        </Link>
      </div>
      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <div className=" w-full flex md:flex-row flex-col items-center justify-center p-3">
          <Mail />
        </div>
      </div>
    </div>
  );
}
