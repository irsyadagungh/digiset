import Image from "next/image";
import Padlock from "../../assets/icon/padlock-check.svg"
import CardHero from "@/components/cardHero";

export default function Home() {
  return (
    <div
      className={`relative w-screen h-full font-[family-name:var(--font-cabin)]`}
    >
      <nav className={`fixed z-10 w-full gap-2 py-4 px-16 flex justify-end`}>
          <a href="#" className={`text-lg border-blue border py-1 px-4 rounded-md`}>
            Login
          </a>
          <a href="#" className={`text-lg bg-blue py-1 px-4 rounded-md`}>
            Sign In
          </a>
      </nav>
      <div
        className={`w-[700px] h-[700px] bg-purple absolute -left-96 -top-72 rounded-full`}
      ></div>
      <div
        className={`w-[600px] h-[600px] bg-blue absolute -right-96 top-24  rounded-full`}
      ></div>

      {/* CONTAINER BLUR EFECT */}
      <main
        className={`w-screen h-fit justify-center py-24 lg:py-0 flex flex-col bg-bgPrimary bg-opacity-50 backdrop-blur-2xl`}
      >
        {/* SECTION 1 */}
        <section
          className={`container w-screen md:h-screen flex flex-wrap items-center`}
        >
          <div className={`flex flex-col md:w-1/2`}>
            <h1 className={`text-xl md:text-3xl lg:text-6xl`}>
              Digitalize Your Assets Safely and Transparently
            </h1>
            <p className={`text-textSecondary mt-4 lg:mt-10 lg:text-xl`}>
              Manage, track and optimize your assets in one trusted blockchain
              technology-based platform.
            </p>
            <button
              className={`w-24 bg-blue py-1 md:py-2 md:px-2 rounded-md mt-4`}
            >
              <a href="#" className={`text-sm`}>
                Get Started
              </a>
            </button>
          </div>
        </section>

        {/* SECTION 2 FEATURES */}
        <section
          className={`container py-16 w-screen md:h-screen flex flex-col flex-wrap`}
        >
          <h1 className={` md:text-lx lg:text-3xl mb-10`}>Features</h1>

          {/* CONTAINER */}
          <div
            className={`w-full h-fit flex flex-col gap-4 flex-wrap md:flex-row`}
          >
            {/* CONTENT */}
            <CardHero
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="m10.5,23h-6c-1.93,0-3.5-1.57-3.5-3.5v-7c0-1.93,1.57-3.5,3.5-3.5h10c.615,0,1.22.162,1.75.468.239.139.545.056.683-.182.139-.239.057-.545-.182-.683-.239-.138-.492-.244-.75-.336v-1.767c0-3.584-2.916-6.5-6.5-6.5S3,2.916,3,6.5v1.776c-1.742.621-3,2.271-3,4.224v7c0,2.481,2.019,4.5,4.5,4.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM4,6.5c0-3.033,2.467-5.5,5.5-5.5s5.5,2.467,5.5,5.5v1.533c-.166-.018-.332-.033-.5-.033H4.5c-.171,0-.334.032-.5.051v-1.551Zm5.5,8.5c.276,0,.5.224.5.5v2c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5Zm8-4c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Zm0,12c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5,5.5,2.468,5.5,5.5-2.467,5.5-5.5,5.5Zm3.35-6.857c.192.198.187.515-.012.707l-2.703,2.614c-.36.355-.835.533-1.311.533s-.949-.177-1.312-.531l-1.364-1.347c-.197-.193-.199-.51-.005-.707.194-.195.511-.198.707-.004l1.363,1.345c.337.33.886.326,1.223-.004l2.706-2.618c.2-.191.516-.187.707.012Z" />
                </svg>
              }
              title={"Blockchain Based Security"}
              description={
                "Your transactions are recorded transparently and cannot be manipulated."
              }
            />
            <CardHero
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="m10.5,23h-6c-1.93,0-3.5-1.57-3.5-3.5v-7c0-1.93,1.57-3.5,3.5-3.5h10c.615,0,1.22.162,1.75.468.239.139.545.056.683-.182.139-.239.057-.545-.182-.683-.239-.138-.492-.244-.75-.336v-1.767c0-3.584-2.916-6.5-6.5-6.5S3,2.916,3,6.5v1.776c-1.742.621-3,2.271-3,4.224v7c0,2.481,2.019,4.5,4.5,4.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM4,6.5c0-3.033,2.467-5.5,5.5-5.5s5.5,2.467,5.5,5.5v1.533c-.166-.018-.332-.033-.5-.033H4.5c-.171,0-.334.032-.5.051v-1.551Zm5.5,8.5c.276,0,.5.224.5.5v2c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5Zm8-4c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Zm0,12c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5,5.5,2.468,5.5,5.5-2.467,5.5-5.5,5.5Zm3.35-6.857c.192.198.187.515-.012.707l-2.703,2.614c-.36.355-.835.533-1.311.533s-.949-.177-1.312-.531l-1.364-1.347c-.197-.193-.199-.51-.005-.707.194-.195.511-.198.707-.004l1.363,1.345c.337.33.886.326,1.223-.004l2.706-2.618c.2-.191.516-.187.707.012Z" />
                </svg>
              }
              title={"Blockchain Based Security"}
              description={
                "Your transactions are recorded transparently and cannot be manipulated."
              }
            />
            <CardHero
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="m10.5,23h-6c-1.93,0-3.5-1.57-3.5-3.5v-7c0-1.93,1.57-3.5,3.5-3.5h10c.615,0,1.22.162,1.75.468.239.139.545.056.683-.182.139-.239.057-.545-.182-.683-.239-.138-.492-.244-.75-.336v-1.767c0-3.584-2.916-6.5-6.5-6.5S3,2.916,3,6.5v1.776c-1.742.621-3,2.271-3,4.224v7c0,2.481,2.019,4.5,4.5,4.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM4,6.5c0-3.033,2.467-5.5,5.5-5.5s5.5,2.467,5.5,5.5v1.533c-.166-.018-.332-.033-.5-.033H4.5c-.171,0-.334.032-.5.051v-1.551Zm5.5,8.5c.276,0,.5.224.5.5v2c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5Zm8-4c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Zm0,12c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5,5.5,2.468,5.5,5.5-2.467,5.5-5.5,5.5Zm3.35-6.857c.192.198.187.515-.012.707l-2.703,2.614c-.36.355-.835.533-1.311.533s-.949-.177-1.312-.531l-1.364-1.347c-.197-.193-.199-.51-.005-.707.194-.195.511-.198.707-.004l1.363,1.345c.337.33.886.326,1.223-.004l2.706-2.618c.2-.191.516-.187.707.012Z" />
                </svg>
              }
              title={"Blockchain Based Security"}
              description={
                "Your transactions are recorded transparently and cannot be manipulated."
              }
            />
            <CardHero
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="m10.5,23h-6c-1.93,0-3.5-1.57-3.5-3.5v-7c0-1.93,1.57-3.5,3.5-3.5h10c.615,0,1.22.162,1.75.468.239.139.545.056.683-.182.139-.239.057-.545-.182-.683-.239-.138-.492-.244-.75-.336v-1.767c0-3.584-2.916-6.5-6.5-6.5S3,2.916,3,6.5v1.776c-1.742.621-3,2.271-3,4.224v7c0,2.481,2.019,4.5,4.5,4.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM4,6.5c0-3.033,2.467-5.5,5.5-5.5s5.5,2.467,5.5,5.5v1.533c-.166-.018-.332-.033-.5-.033H4.5c-.171,0-.334.032-.5.051v-1.551Zm5.5,8.5c.276,0,.5.224.5.5v2c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5Zm8-4c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Zm0,12c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5,5.5,2.468,5.5,5.5-2.467,5.5-5.5,5.5Zm3.35-6.857c.192.198.187.515-.012.707l-2.703,2.614c-.36.355-.835.533-1.311.533s-.949-.177-1.312-.531l-1.364-1.347c-.197-.193-.199-.51-.005-.707.194-.195.511-.198.707-.004l1.363,1.345c.337.33.886.326,1.223-.004l2.706-2.618c.2-.191.516-.187.707.012Z" />
                </svg>
              }
              title={"Blockchain Based Security"}
              description={
                "Your transactions are recorded transparently and cannot be manipulated."
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
}
