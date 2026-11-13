import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";

const products = [
  {
    image: "./src/assets/products/product-1.png",
    name: "Eucalyptus Silk Scarf",
    description: "Silk · Eucalyptus / rust",
    price: "68",
  },
  {
    image: "./src/assets/products/product-2.png",
    name: "Fern Everyday Tote",
    description: "Organic cotton · Forest green",
    price: 42,
  },
  {
    image: "./src/assets/products/product-3.png",
    name: "Botanical Table Runner",
    description: "Linen · Earth / olive",
    price: 54,
  },
  {
    image: "./src/assets/products/product-4.png",
    name: "Leaf Impression Journal",
    description: "Handmade paper · Terracotta",
    price: 24,
  },
];

const journal = [
  {
    image: "./src/assets/journal/journal-1.png",
    name: "The leaves that tell our story",
    description: "IN THE STUDIO · 6 MIN READ",
  },
  {
    image: "./src/assets/journal/journal-2.png",
    name: "Caring for your botanical pieces",
    description: "CARE & KEEPING · 4 MIN READ",
  },
  {
    image: "./src/assets/journal/journal-3.png",
    name: "A table inspired by the seasons",
    description: "SLOW LIVING · 5 MIN READ",
  },
];

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section className="bg-primary" label="header">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-8 py-10">
            <div className="flex flex-col justify-start text-secondary gap-7">
              <p className="text-[13px] text-secondary font-secondary font-medium">
                BOTANICAL PRINTS. EVERYDAY POETRY.
              </p>
              <h1 className="text-[90px] font-bold text-secondary font-primary">
                Nature leaves an impression.
              </h1>
              <p className="text-[16px] w-100 text-secondary font-secondary">
                One leaf. One moment. One of a kind. Discover naturally dyed
                pieces that bring the quiet beauty of the outdoors into your
                everyday.
              </p>
              <div className="flex gap-8 items-center">
                <button className="bg-secondary text-primary py-3 px-4 rounded-md cursor-pointer">
                  Explore the collection
                </button>
                <a className="text-secondary font-secondary underline">
                  Meet our craft
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src="./src/assets/icons/flower.svg"
                  alt="flower"
                  className="h-10 w-10"
                />
                <p className="text-sm">
                  Small batches. Natural fibers. Never two alike.
                </p>
              </div>
            </div>
            <img
              src="./src/assets/img/hero.png"
              alt="This is Hero"
              className="h-170 w-215"
            />
          </div>
          <div className="flex items-center justify-center space-x-60 py-2">
            <div className="flex items-center gap-2">
              <img src="./src/assets/icons/vector.svg" alt="vector" />
              <p className="text-secondary font-medium">
                Printed with real leaves
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="./src/assets/icons/hand-heart.svg" alt="hand-heart" />
              <p className="text-secondary font-medium">
                Handcrafted in small batches
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="./src/assets/icons/sprout.svg" alt="sprout" />
              <p className="text-secondary font-medium">
                Natural dyes & fibers
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="./src/assets/icons/package.svg" alt="package" />
              <p className="text-secondary font-medium">
                Thoughtfully packaged
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary pt-30 pb-30" label="products">
        <div className="container mx-auto">
          <div className="flex flex-col justify-start gap-5">
            <p className="text-[11px] text-secondary font-secondary">
              THE PIECES YOU COME BACK TO
            </p>
            <div className="flex items-center justify-between gap-5">
              <h1 className="text-[56px] font-medium text-secondary font-primary">
                Everyday things, extraordinary by nature.
              </h1>
              <button className="cursor-pointer flex gap-5 bg-transparent border border-secondary text-secondary py-3 px-4 rounded-md">
                Shop all pieces{" "}
                <img src="./src/assets/icons/arrow.svg" alt="arrow" />
              </button>
            </div>
            <a className="flex items-center justify-between gap-5">
              {products.map((product) => (
                <a key={product.id} className="flex flex-col gap-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-105 w-90 object-cover rounded-md"
                  />
                  <div className="flex items-center justify-between gap-5">
                    <h1 className="text-2xl font-medium text-secondary font-primary">
                      {product.name}
                    </h1>
                    <p className="text-sm text-secondary">$ {product.price}</p>
                  </div>
                  <p className="text-sm text-secondary">
                    {product.description}
                  </p>
                </a>
              ))}
            </a>
          </div>
        </div>
      </section>
      <section className="bg-support" label="support">
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-15">
            <img
              src="./src/assets/support.png"
              alt="Support"
              className="h-150"
            />
            <div className="flex flex-col gap-8">
              <p className="text-[13px]">A SOFTER KIND OF EVERYDAY</p>
              <h1 className="text-6xl font-primary">Bring the outside in.</h1>
              <p className="text-secondary font-medium">
                A table set with stories. A corner made your own. Discover
                botanical textiles for a home that feels a little more alive.
              </p>
              <button className="mt-2 flex bg-transparent justify-center items-center gap-3 border border-secondary text-secondary w-60 py-3 rounded-md cursor-pointer">
                Explore home & living
                <img src="./src/assets/icons/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary pt-20 pb-20" label="process">
        <div className="container mx-auto">
          <div className="grid grid-flow-col grid-rows-2 justify-between items-center mb-10 space-x-50">
            <p className="text-sm text-secondary font-secondary">
              NO INK. NO SHORTCUTS. JUST NATURE.
            </p>
            <h1 className="text-5xl font-primary text-secondary">
              From leaf to lasting impression.
            </h1>
            <p className="text-secondary font-medium font-secondary text-sm">
              Ecoprinting is a slow conversation between plant and cloth. Leaves
              release their own pigments, leaving behind a beautiful record of
              the natural world.
            </p>
            <a className="bg-transparent text-secondary cursor-pointer mt-4 flex gap-3 text-sm">
              Discover the Process
              <img src="./src/assets/icons/arrow.svg" alt="arrow" />
            </a>
          </div>
          <img
            src="./src/assets/process.png"
            alt="Process"
            className="w-full"
          />
          <div className="flex items-center justify-between gap-10 mt-10">
            <div className="flex gap-6">
              <p className="text-[#A8694C] font-primary text-4xl">01</p>
              <div className="flex flex-col gap-2">
                <h1 className="text-secondary font-primary text-3xl">Gather mindfully</h1>
                <p className="text-secondary font-secondary text-sm">
                  Locally gathered leaves, chosen for their unique shapes and
                  natural pigments.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <p className="text-[#A8694C] font-primary text-4xl">02</p>
              <div className="flex flex-col gap-2">
                <h1 className="text-secondary font-primary text-3xl">Arrange with care</h1>
                <p className="text-secondary font-secondary text-sm">
                  Each leaf placed by hand onto thoughtfully sourced natural
                  fibers.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <p className="text-[#A8694C] font-primary text-4xl">03</p>
              <div className="flex flex-col gap-2">
                <h1 className="text-secondary font-primary text-3xl">Let nature work</h1>
                <p className="text-secondary font-secondary text-sm">
                  Bundled, steamed and slowly revealed. A print that can never
                  be repeated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background" label="story">
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-15">
            <div className="flex flex-col gap-8">
              <p className="text-[13px]">ROOTED IN CARE</p>
              <h1 className="text-6xl font-primary">
                Made by hands. Guided by nature.
              </h1>
              <p className="text-secondary font-medium">
                We’re a small botanical studio in Bandung, Indonesia, finding
                beauty in what grows around us. What began with a handful of
                leaves is now a practice of making less, more meaningfully.
              </p>
              <p className="text-secondary font-medium">
                Every piece supports local craft, celebrates natural materials,
                and carries a little of our story into yours.
              </p>
              <button className="mt-2 flex bg-transparent justify-center items-center gap-3 border border-secondary text-secondary w-40 py-3 rounded-md cursor-pointer">
                Our story
                <img src="./src/assets/icons/arrow.svg" alt="arrow" />
              </button>
            </div>
            <img src="./src/assets/story.png" alt="Support" className="h-150" />
          </div>
        </div>
      </section>
      <section className="bg-primary pt-20" label="testimonial">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-15">
            <div className="flex flex-col items-center gap-8">
              <p className="text-[13px]">A LITTLE LOVE, NATURALLY</p>
              <img src="./src/assets/icons/rating.svg" alt="rating" />
              <h1 className="text-4xl font-primary">
                “It feels like wearing a small piece of the forest. The detail
                in every leaf is even more beautiful in person.”
              </h1>
              <p className="text-[13px]">
                Maya R. · Eucalyptus Silk Scarf · Verified purchase
              </p>
              <p className="text-[13px]">4.9 / 5 from 128 thoughtful reviews</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary pt-30 pb-30" label="journal">
        <div className="container mx-auto">
          <div className="flex flex-col justify-start gap-5">
            <p className="text-[11px] text-secondary font-secondary">
              THE ECOPRINT JOURNAL
            </p>
            <div className="flex items-center justify-between gap-5">
              <h1 className="text-[56px] font-medium text-secondary font-primary">
                Notes from a slower life.
              </h1>
              <button className="cursor-pointer flex gap-5 bg-transparent border border-secondary text-secondary py-3 px-4 rounded-md">
                Read the Journal{" "}
                <img src="./src/assets/icons/arrow.svg" alt="arrow" />
              </button>
            </div>
            <a className="flex items-center justify-between">
              {journal.map((journal) => (
                <a key={journal.id} className="flex flex-col gap-5">
                  <img
                    src={journal.image}
                    alt={journal.name}
                    className="h-70 w-120"
                  />
                  <p className="text-[10px] text-secondary">
                    {journal.description}
                  </p>
                  <div className="flex justify-start gap-5">
                    <h1 className="text-3xl font-medium text-secondary font-primary">
                      {journal.name}
                    </h1>
                    <img src="./src/assets/icons/arrow.svg" alt="arrow" />
                  </div>
                </a>
              ))}
            </a>
          </div>
        </div>
      </section>
      <section className="bg-support pt-20 pb-20" label="subscribe">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-5">
              <p className="text-[13px]">GOOD THINGS GROW SLOWLY</p>
              <h1 className="text-6xl font-primary">
                A little nature in your inbox.
              </h1>
              <p className="text-[15px]">
                New collections, studio stories and thoughtful things. Not too
                often.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p>Your email address</p>
              <div className="flex gap-3">
              <input className="border-2 border-transparent border-b-secondary py-2 w-full" />
              <button className="cursor-pointer">Subscribe</button>
              </div>
              <p className="text-[13px] text-secondary">
                By subscribing, you agree to our privacy policy. Unsubscribe
                anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
