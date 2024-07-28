"use client";
import { Carousel } from "antd";
import Image from "next/image";
import YouTube from "react-youtube";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Inside your component

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <HeroSection />
      {/* About */}
      <AboutSection />
      {/* T-shirts */}
      <UpcomingMerchSection />
      <TshirtsCarousel />
      {/* Lyrics */}
      <LyricsSection />
      {/* Vinyls */}
      <VinylRecordCarousel />
      {/* Event section */}
      <EventsSection />
      {/* Jewelry */}
      <JewellerySection />
      {/* Instagram */}
      <InstagramSection />
      {/* Label section */}
      <LabelSection />
      {/* Contact */}
      <ContactSection />
    </main>
  );
}

const HeroSection = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      enablejsapi: 1,
      modestbranding: 1,
      mute: 1,
      playsinline: 1,
      origin: typeof window !== "undefined" ? window.location.origin : "",
      playlist: "ysftXz2INGs",
    },
  };

  const onReady = (event) => {
    event.target.playVideo();
    event.target.mute();
  };

  const onEnd = (event) => {
    event.target.playVideo(); // Replay the video when it ends
  };

  return (
    <section className="relative z-10 w-full h-screen overflow-hidden">
      <div className="min-h-screen overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 w-full h-full">
          {/* <iframe
            src="https://www.youtube.com/embed/ysftXz2INGs?si=pFyC4jZ5yeoz44O5&autoplay=1&mute=1&loop=1&controls=0&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full object-contain"
            title="background video"></iframe> */}
          <YouTube
            videoId="ysftXz2INGs"
            opts={opts}
            onReady={onReady}
            onEnd={onEnd}
            className="w-full h-full youtube-container"
          />
        </div>

        {/* Backdrop */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center  text-center text-white px-8 pt-36">
          {/* Logo */}
          <div className="mb-8" data-aos="fade-up">
            <Image
              src="/images/cj-logo.png"
              alt="Soulja Logo"
              width={150}
              height={150}
              color="#fff"
              style={{
                fill: "white",
                color: "#ffffff",
                accentColor: "#ffffff",
              }}
            />
          </div>

          {/* Catchy phrase */}
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            data-aos="fade-up">
            Unleash Your Inner Soulja
          </h1>
          <p className="text-xl md:text-2xl mb-8" data-aos="fade-up">
            Experience the beat, live the lifestyle
          </p>

          {/* CTA Button */}
          <a
            data-aos="fade-up"
            href="#shop"
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Shop Now
          </a>
        </div>
        {/* Bottom Cloud */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full">
            <path
              fill="#f3f4f6"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-20 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-up">
          About Soulja
        </h2>
        <p
          className="text-lg text-gray-700 max-w-2xl mx-auto text-center"
          data-aos="fade-up">
          Soulja is more than just music; it's a lifestyle. We blend urban beats
          with cutting-edge fashion to create a unique experience for our fans.
          Our mission is to inspire and empower through our art and merchandise.
        </p>
      </div>
    </section>
  );
};

const UpcomingMerchSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-white py-16 w-full">
      <div className="container mx-auto px-8">
        <h2
          className="text-4xl font-bold mb-12 text-center text-black"
          data-aos="fade-up">
          Upcoming Merch
        </h2>
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          data-aos="fade-up">
          {/* Image Column */}
          <motion.div
            className="w-full md:w-1/2 m-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <Image
              src="/images/soulja-baseball.png"
              alt="Limited Edition Crank That Anniversary Hoodie"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <Image
            data-aos="fade-up-left"
            src="/images/s.png"
            alt="S"
            width={100}
            height={100}
            className="shadow-1xl absolute -right-2 -top-12"
          />
          <Image
            data-aos="fade-up-left"
            src="/images/o.png"
            alt="o"
            width={100}
            height={100}
            className="shadow-1xl absolute -right-2 top-8"
          />
          <Image
            data-aos="fade-up-left"
            src="/images/u.png"
            alt="u"
            width={100}
            height={100}
            className="shadow-1xl absolute -right-2 top-32"
          />
          <Image
            data-aos="fade-up-left"
            src="/images/l.png"
            alt="l"
            width={100}
            height={100}
            className="shadow-1xl absolute -right-2 top-56"
          />
          <Image
            data-aos="fade-up-left"
            src="/images/j.png"
            alt="j"
            width={100}
            height={100}
            className="shadow-1xl absolute -right-2 top-80"
          />
          <Image
            data-aos="fade-up-left"
            src="/images/a.png"
            alt="a"
            width={100}
            height={100}
            className="shadow-1xl absolute -right-2 top-[400px]"
          />
          {/* Information Column */}
          <div className="max-w-full md:w-1/2 my-5 md:mb-0 md:pr-8">
            <h3
              className="text-3xl font-bold mb-4 text-black"
              data-aos="fade-up">
              Limited Edition "Crank That" Anniversary Hoodie
            </h3>
            <p className="text-lg text-gray-700 mb-6" data-aos="fade-up">
              Celebrate the 15th anniversary of "Crank That" with our exclusive,
              limited-edition hoodie. Featuring a unique design that pays homage
              to the iconic hit that started it all.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li data-aos="fade-up">Premium quality, super-soft fabric</li>
              <li data-aos="fade-up">Embroidered "Crank That" logo</li>
              <li data-aos="fade-up">Available in black and gold colorway</li>
              <li data-aos="fade-up">Sizes: S, M, L, XL, XXL</li>
            </ul>
            <p className="text-xl font-bold text-black mb-6" data-aos="fade-up">
              Price: $89.99
            </p>
            <p className="text-lg text-gray-700 mb-6" data-aos="fade-up">
              Release Date: August 1, 2023
            </p>
            <button
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300"
              data-aos="fade-up">
              Pre-order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TshirtsCarousel = () => {
  const tshirts = [
    {
      id: 1,
      name: "Classic Logo Tee",
      price: "$29.99",
      image: "/images/travis-merch1.gif",
    },
    {
      id: 2,
      name: "Urban Beat Tee",
      price: "$34.99",
      image: "/images/travis-merch1.gif",
    },
    {
      id: 3,
      name: "Soulja Vibes Tee",
      price: "$32.99",
      image: "/images/travis-merch1.gif",
    },
    {
      id: 4,
      name: "Rhythm & Style Tee",
      price: "$29.99",
      image: "/images/travis-merch1.gif",
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidesToShow = (windowWidth) => {
    if (windowWidth < 640) {
      return 1;
    } else if (windowWidth < 1024) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <section className="bg-white py-28 w-full">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 text-center"
          data-aos="fade-up"
          data-aos-duration="1000">
          Soulja Merch
        </h2>
        <Carousel
          autoplay
          arrows={true}
          dots={true}
          draggable={true}
          slidesToShow={slidesToShow}
          data-aos="fade-up"
          data-aos-duration="1000"
          className="custom-arrows custom-dots">
          {tshirts.map((tshirt, i) => (
            <div
              key={tshirt.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="px-4 flex items-center justify-center">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <Image
                  src={tshirt.image}
                  alt={tshirt.name}
                  width={300}
                  height={300}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {tshirt.name}
                </h3>
                <p className="text-lg text-gray-700 text-center">
                  {tshirt.price}
                </p>
                <div className="text-center">
                  <button className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const LyricsSection = () => {
  const lyrics = [
    "Oh Yeah منشية فنتاستك و الدنيا لافة لافة لافة لافة ",
    "سوبرمان بي نظراتي بجدع ليزر ,قال لي يا مكنة شربتا موية اللديتر",
    "بس الحمدلله ,انا بي خير اخواني بي خير الحاج و الحجة بي خير",
    "بعمل الحاجة ما بندم في جبرة دولة و في uk mandem",
    "ممنوع دخولك هنا منطقة جامدين ,في عيد ميلادك بطرشق البلالين ",
    "ايام و بتغير مواضعنا ,مرات ترفعنا مرات تواضعنا",
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="py-16 bg-white w-full text-black overflow-hidden min-h-screen flex flex-col justify-center">
      {lyrics.map((line, index) => (
        <LyricLine
          key={index}
          line={line}
          index={index}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </section>
  );
};

const LyricLine = ({ line, index, scrollYProgress }) => {
  const isEven = index % 2 === 0;
  const xRange = isEven ? ["-100%", "100%"] : ["100%", "-100%"];

  const x = useTransform(scrollYProgress, [0, 1], xRange);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div className="whitespace-nowrap" style={{ x, opacity }}>
      <p
        className={`text-7xl font-extrabold my-4 ${
          isEven ? "funky-text" : "hollow-text"
        }`}>
        {line}
      </p>
    </motion.div>
  );
};

const VinylRecordCarousel = () => {
  const records = [
    {
      id: 1,
      name: "Crank That",
      artist: "Soulja Boy",
      year: "2007",
      image: "/images/Vinyl-1.png",
    },
    {
      id: 2,
      name: "Kiss Me Thru the Phone",
      artist: "Soulja Boy Tell'em",
      year: "2008",
      image: "/images/Vinyl-2.webp",
    },
    {
      id: 3,
      name: "Pretty Boy Swag",
      artist: "Soulja Boy",
      year: "2010",
      image: "/images/Vinyl-1.png",
    },
    {
      id: 4,
      name: "Turn My Swag On",
      artist: "Soulja Boy Tell'em",
      year: "2009",
      image: "/images/Vinyl-2.webp",
    },
  ];
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidesToShow = (windowWidth) => {
    if (windowWidth < 640) {
      return 1;
    } else if (windowWidth < 1024) {
      return 2;
    } else {
      return 3;
    }
  };
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 w-full">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-8 text-center text-black"
          data-aos="fade-up">
          Vinyl Classics
        </h2>
        <Carousel
          autoplay
          arrows={true}
          dots
          draggable={true}
          className="vinyl-carousel"
          slidesToShow={slidesToShow}>
          {records.map((record, i) => (
            <div
              key={record.id}
              className="px-4 py-8"
              data-aos="fade-up"
              data-aos-delay={i * 100}>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <div className="relative w-64 h-64 mb-6">
                  <Image
                    src={record.image}
                    alt={record.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">
                      Play
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {record.name}
                </h3>
                <p className="text-lg text-gray-300 mb-1">{record.artist}</p>
                <p className="text-md text-gray-400">{record.year}</p>
                <button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-600 transition duration-300">
                  Buy
                </button>
              </motion.div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const EventsSection = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const eventDate = new Date("2024-05-15T20:00:00").getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <section className="bg-gradient-to-r from-purple-800 to-indigo-900 py-16 w-full">
      <div className="container mx-auto px-8">
        <h2
          className="text-4xl font-bold mb-12 text-center text-white"
          data-aos="fade-up">
          Upcoming Events
        </h2>
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          data-aos="fade-up">
          {/* Image Column */}
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <Image
              src="/images/travis-event.webp"
              alt="Soulja Boy Concert"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl border-4 border-white"
            />
          </motion.div>
          {/* Event Info Column */}
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="flex-row flex md:flex-col justify-between">
              <h3
                className="text-3xl font-bold mb-2 text-white"
                data-aos="fade-up">
                Soulja Live
              </h3>
              <p className="text-xl text-purple-200 mb-6" data-aos="fade-up">
                Get ready to crank that!
              </p>
            </div>

            <div
              className="bg-white bg-opacity-20 rounded-lg p-6 mb-6"
              data-aos="fade-up">
              <p className="text-lg text-white mb-2">
                <strong>Date:</strong> May 15, 2024
              </p>
              <p className="text-lg text-white mb-2">
                <strong>Time:</strong> 8:00 PM
              </p>
              <p className="text-lg text-white mb-2">
                <strong>Venue:</strong> Mega Arena, Los Angeles
              </p>
            </div>
            <div className="flex justify-between p-3 mb-8" data-aos="fade-up">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-3xl font-bold text-white">{value}</div>
                  <div className="text-sm text-purple-200">{unit}</div>
                </div>
              ))}
            </div>
            <button
              className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300 mb-6 w-full"
              data-aos="fade-up">
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const JewellerySection = () => {
  const jewelleryItems = [
    {
      id: 1,
      name: "Soulja Chain",
      price: "$999.99",
      image: "/images/bling1.webp",
      description: "Iconic Soulja Boy signature chain",
    },
    {
      id: 2,
      name: "Crank That Pendant",
      price: "$599.99",
      image: "/images/bling2.webp",
      description: "Gold pendant inspired by the hit single",
    },
    {
      id: 3,
      name: "Bling Ring Set",
      price: "$799.99",
      image: "/images/bling1.webp",
      description: "Set of 3 diamond-encrusted rings",
    },
    {
      id: 4,
      name: "Swag Earrings",
      price: "$399.99",
      image: "/images/bling2.webp",
      description: "Flashy earrings for the true Soulja fan",
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidesToShow = (windowWidth) => {
    if (windowWidth < 640) {
      return 1;
    } else if (windowWidth < 1024) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-100 to-white py-16 w-full">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-12 text-center text-black"
          data-aos="fade-up">
          Soulja Bling Collection
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
        <Carousel
          autoplay
          arrows={true}
          dots={true}
          draggable={true}
          slidesToShow={slidesToShow}
          className="custom-arrows custom-dots">
          {jewelleryItems.map((item, i) => (
            <div
              key={item.id}
              className="p-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-600">
                      {item.price}
                    </span>
                    <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Carousel>
        {/* </div> */}
      </div>
    </section>
  );
};

const InstagramSection = () => {
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "/images/travis-event.webp",
      caption: "New album dropping soon! 🎵🔥 #SouljaMusic",
      likes: 15000,
      comments: 532,
      link: "https://www.instagram.com/p/example1/",
    },
    {
      id: 2,
      imageUrl: "/images/travis-event.webp",
      caption: "Behind the scenes at the video shoot 🎥 #CrankThat2024",
      likes: 20000,
      comments: 789,
      link: "https://www.instagram.com/p/example2/",
    },
    {
      id: 3,
      imageUrl: "/images/travis-event.webp",
      caption: "Feeling blessed 🙏 Thank you to all my fans!",
      likes: 25000,
      comments: 1024,
      link: "https://www.instagram.com/p/example3/",
    },
    {
      id: 4,
      imageUrl: "/images/travis-event.webp",
      caption: "New merch available now! 👕 Link in bio",
      likes: 18000,
      comments: 678,
      link: "https://www.instagram.com/p/example4/",
    },
    {
      id: 5,
      imageUrl: "/images/travis-event.webp",
      caption: "On stage tonight! 🎤 Who's coming?",
      likes: 22000,
      comments: 912,
      link: "https://www.instagram.com/p/example5/",
    },
    {
      id: 6,
      imageUrl: "/images/travis-event.webp",
      caption: "Studio vibes 🎧 #NewMusic",
      likes: 19000,
      comments: 743,
      link: "https://www.instagram.com/p/example6/",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 w-full">
      {/* <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-16 w-full"> */}
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-12 text-center text-black"
          data-aos="fade-up">
          Soulja's Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <Image
                data-aos="fade-up"
                src={post.imageUrl}
                alt={`Instagram post ${post.id}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <div className="text-white text-center">
                  <p className="text-2xl font-bold">{post.likes} ❤️</p>
                  <p className="text-xl">{post.comments} 💬</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <a
            href="https://www.instagram.com/souljaboy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
            Follow Soulja on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

const LabelSection = () => {
  const labelArtists = [
    {
      id: 1,
      name: "Lil Flash",
      photo: "/images/travis-event.webp",
      description: "Rising trap star with hard-hitting beats",
      instagram: "https://www.instagram.com/lilflash",
      spotify: "https://open.spotify.com/artist/lilflash",
    },
    {
      id: 2,
      name: "Kay Bandz",
      photo: "/images/travis-event.webp",
      description: "Smooth R&B vibes with a hip-hop edge",
      instagram: "https://www.instagram.com/kaybandz",
      spotify: "https://open.spotify.com/artist/kaybandz",
    },
    {
      id: 3,
      name: "AGoff",
      photo: "/images/travis-event.webp",
      description: "Lyrical genius with conscious rap flows",
      instagram: "https://www.instagram.com/agoff",
      spotify: "https://open.spotify.com/artist/agoff",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Image
            data-aos="fade-up"
            src="/images/Cactus-Jack-Symbol.png"
            alt="Stacks on Deck Entertainment Logo"
            width={150}
            height={150}
            className="mb-6"
          />
          <h2
            className="text-4xl font-bold text-white text-center"
            data-aos="fade-up">
            SVNBIRDS
          </h2>
          <p
            className="text-xl text-white text-center mt-4 max-w-2xl"
            data-aos="fade-up">
            Launching the next generation of hip-hop superstars. We're not just
            a label, we're a movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labelArtists.map((artist) => (
            <div data-aos="fade-up">
              <motion.div
                key={artist.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <Image
                  src={artist.photo}
                  alt={artist.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-gray-600 mb-4">{artist.description}</p>
                  <div className="flex justify-between">
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300">
                      Instagram
                    </a>
                    <a
                      href={artist.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition duration-300">
                      Spotify
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <a
            href="#"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
            Join SVNBIRDS
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-16 w-full">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-12 text-center text-white"
          data-aos="fade-up">
          Contact Soulja
        </h2>
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0" data-aos="fade-up">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-8 shadow-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Send Message
              </motion.button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4" data-aos="fade-up">
                Get in Touch
              </h3>
              <p className="mb-4" data-aos="fade-up">
                For business inquiries, fan mail, or just to say hello, reach
                out to us using the form or the contact information below.
              </p>
              <div className="mb-4">
                <p className="font-bold" data-aos="fade-up">
                  Email:
                </p>
                <p data-aos="fade-up">contact@souljaboy.com</p>
              </div>
              <div className="mb-4">
                <p className="font-bold" data-aos="fade-up">
                  Management:
                </p>
                <p data-aos="fade-up">management@souljaboy.com</p>
              </div>
              <div className="mb-8">
                <p className="font-bold" data-aos="fade-up">
                  Address:
                </p>
                <p data-aos="fade-up">
                  123 Soulja Street, Los Angeles, CA 90001
                </p>
              </div>

              {/* Social Media Links */}
              <h3 className="text-2xl font-bold mb-4">Follow Soulja</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.instagram.com/souljaboy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-pink-400">
                  <FaInstagram size={24} />
                </motion.a>
                <motion.a
                  href="https://www.twitter.com/souljaboy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-blue-400">
                  <FaTwitter size={24} />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/souljaboy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-red-600">
                  <FaYoutube size={24} />
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@souljaboy"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-pink-500">
                  <FaTiktok size={24} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const InstagramSection = () => {
//   const instagramPosts = [
//     {
//       id: 1,
//       imageUrl: "/images/soulja-insta-1.jpg",
//       caption: "New album dropping soon! 🎵🔥 #SouljaMusic",
//       likes: 15000,
//       comments: 532,
//     },
//     {
//       id: 2,
//       imageUrl: "/images/soulja-insta-2.jpg",
//       caption: "Behind the scenes at the video shoot 🎥 #CrankThat2024",
//       likes: 20000,
//       comments: 789,
//     },
//     {
//       id: 3,
//       imageUrl: "/images/soulja-insta-3.jpg",
//       caption: "Feeling blessed 🙏 Thank you to all my fans!",
//       likes: 25000,
//       comments: 1024,
//     },
//     {
//       id: 4,
//       imageUrl: "/images/soulja-insta-4.jpg",
//       caption: "New merch available now! 👕 Link in bio",
//       likes: 18000,
//       comments: 678,
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-12 text-center text-white">
//           Soulja's Instagram
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {instagramPosts.map((post) => (
//             <motion.div
//               key={post.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}>
//               <Image
//                 src={post.imageUrl}
//                 alt={`Instagram post ${post.id}`}
//                 width={300}
//                 height={300}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4">
//                 <p className="text-gray-800 mb-2">{post.caption}</p>
//                 <div className="flex justify-between text-gray-600">
//                   <span>{post.likes} likes</span>
//                   <span>{post.comments} comments</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
