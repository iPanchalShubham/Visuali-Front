"use-client";
import React, { useEffect, useRef, useState } from "react";
import {
  Bar,
  Chart,
  Line,
  Pie,
  Radar,
  getElementAtEvent,
} from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js/auto";
import CommentsDrawer from "./commentsDrawer";

import VideoStats from "./videoStats";
import { Toaster, toast } from "react-hot-toast";
// const data = [
//   {
//     emotionName: "neutral",
//     intensity: 0.35207356144849417,
//     frequency: 0.3157894736842105,
//     comments: [
//       "This channel puts in the work!",
//       "Wouldn’t it be much more effective to at least partly grow hemp instead of planting trees in temperate regions? Hemp can be used immediately as a source for paper, building materials (hempcrete), textile, etc. CO2 is sequestered from day 1, instead of after 8 years onwards. It also much more flexible. The amount of CO2 sequestration is the same, if not more, than that of the beeches and softwoods in the documentary.",
//       "People who plant trees should be awarded and highly respected\nPlease let's take care of our planet, there're still a lot of people who lack enviromental consciousness, a lot!",
//       "Feels like Captain Pollution has Captain Planet in a death grip.",
//       "Its possible climat neutral is a cover from corporations and those controlling the systems. To stay in contol when the inevitable decline happens and a new system is in place by their choosing to remain in contol... in other words controlling the decline and the mess thats made in name of something ells.",
//       "May the Anthroprocene epoch make the Permian-Triassic extinction event seem like a minor footnote in the pages of Earth's history. Here's to making scenario SSP5-8.5 of the IPCC assessment a reality.",
//       "Humanity is a heat engine, no matter how you slice it.",
//       "Nature💚",
//       "Remove the print and paint colours on the labels, tons of harmful chemicals will be removed from the environment, less energy to process the labels and it makes it easy to recycle the plastics.",
//       "It means poor people eat bugs and don’t have electricity. \nWhile rich people fly planes and eat meat.",
//       "This should be applied to the context of higher education in emerging countries: Is program-accredited (by accreditation institutions) a lie?",
//       "Data Science for exactly this.",
//       "Per Capita Emissions are more important than total emission of a country.\nSimilarly Historical Emitters developed countries have Bigger responsibility. \nCommon but differentiated Responsibilities for developing countries.",
//       "Trees take fresh water  , trees take rain to grow 🤔",
//       "? I think the amount of co2 and the amount of biomass finally is in the very same scale.\nthe carbon binds in corbonhydrates. and finally is burned after being cut and used, e.g. as building material, its reduced to co2 of course.\nSo the woods stores the carbon for its nature span.\neach wood falling down will mainly be reclaimed by microorganisms creating co2. \nand very few will become earth too. for some time.",
//       "in my years we lost 13 elm, trees\nsince then 30 year ago\nwe planted 42 ash trees and in a muddy hollow 15 willow\nthey are 30 years old i think iv done my bit\nin fact we cant plant any more no space",
//       "Conclusion: carbon offsetting is a loophole actively acting against reducing carbon emissions",
//       "The IPCC definition of neutral says emissions not just C02! A long way to go to stop the 2nd law of thermodynamics",
//       "Until the airline industry shuts down or limits the numbers of flights around the globe nothing can save this planet.",
//       "You need energy to plant so net positive energy use",
//       "There was a climate crisis that destroyed civilisations, and that was about 3000 years ago. It is an irrefutable fact that as CO2 levels increase then plant growth does also. \r\nCO2 at 1000ppm [ three times present levels] is possibly optimum for forests, agriculture, and deserts.. If we could increase levels of CO2 to optimum levels of about 1000ppm \r\n the forests would flourish; the deserts would become productive; and the imminent destruc-tion of agriculture now sought would make many countries even a greater exporters of food ; plentiful for the world,   Commercial green houses use these facts for high yield and profitability.\n And of course human societies go well during the warm periods. \r\nOlder people flock to warmer areas at retirement. The climate threat is a globalist scam to redistribute wealth upwards yet again.\r\n\r\nWith the knowledge that  Co2 rises after warm earth periods not before as  we are conditioned to think by the fraudulent climate control  freaks. \r\n In any event human civilizations have always  been more successful in warmer periods.\r\n Commercial green houses use these facts for high yield and profitability .\nConversing with a luddite climate activist is as useful as discussing physics with a frog.",
//       "My home is truly net zero",
//       "Industrial society can, and never will be sustainable.",
//       "The used EV I'm driving \"....",
//       "CO2 is not a driver of warming. Historically, CO2 levels has risen AFTER warming, so it can be a result, but not the cause.",
//       "Humans are very good at deluding themselves. Which do you think is the correct answer:\na) plant more trees\nb) cut down on carbon emissions\nc) decrease population",
//       "Marine life is the reason for the oxygen you breathe today",
//       '"How much CO2 can a tree absorve?" not more CO2 then you issue traveling by car to plan the tree',
//       "As,attainable as a perpetual motion machine.",
//       "The responsibility lies in us, not these bs companies that deceive us. Cut down on meat & seafood consumption. Cut out fast fashion & fast furniture.",
//       'It is not "offsetting" but hiding co2. co2 will be released when tree is burnt. problem is wasteful economy model not  co2 emissions.',
//       "Cholesterol free, Organic and now Climate Neutral. All marketing gimmicks. It's all big business.",
//       "It’s all marketing hype…  while others get rich. For example planting trees is only a work around, not a solution.",
//       "If you think you can't affect the climate you don't understand physics.",
//       "Do not cut those trees..",
//       "8 billion x 800 = 6.4 trillion trees 😅",
//       "They plant here and for their consumer needs they use trees from third countries. Another in a series of  Western hypocrisies.",
//       "Lead, Snake oil, fat free, sugar free, Akin, Kale, Gluten free…",
//       "Drill baby, drill.",
//       '...                                                                                   BY   "COMPANIES"  YOU MEAN   "OIL  COMPANIES"\n...                                      NO ?\n...                                                                           "CHEMICAL COMPANIES"  AND/OR  "PLASTIC COMPANIES"',
//       "They were planting dead trees",
//       "you may restore forests by planting trees but not biod versity",
//       "CCPI (Climate Change Performance Index) rankings are published recently. \nLook at some pathetic countries that claims they are proactive against Climate Change, making others to pledge Carbon neutrality,\n but themselves ranks very low.\n\nPer Capita Emissions are more important than total emission of a country.\n\nSimilarly Historical Emitters developed countries have Bigger responsibility.\n\nCommon but differentiated Responsibilities.",
//       "O! And Nitrogen, hydrogen,  helium and all the other gases that keep this earth going.",
//       "Humans live On and Of Nature, Animals live In and With Nature, whom of these two will Always destroy Nature.",
//       "Yes\nNext question",
//       "HBO John Oliver tackled this farce.",
//       "Global 2 kids policy.",
//       "And its 4 mins ago !!",
//       "We can create negotiated borders of trees, and alternative energy production and sharing only  in a peace economy...perhaps that's why the USA is so keen to  proliferate . In its attempt to cause wars In Korea, with the Chinese, Israel  and it's oppression of Palistine and just about ever corner of the world including   Ukraine ...Along with  the manipulation of NATO  and UN ECT ,..is to keep the fossil fuel industry grinding along at any cost, whilst selling arms.. It's apparant the USA will go to any lengths to creat WAR culture and desperate economy💟❣️💌🍄🥀🌹💐🌈⭐🌏🌎🌍🍐🍏🥝🦋🐞🐃🐂🐄🦕🦖🐉🐽🌿🌱🍃☘️🌲🌳🌴",
//       "Main reason no plantation by humanity",
//       "It's a bit like carbon offset... a load of BS.",
//       "To these worshippers of Gaia - repent for the Kingdom of God is at hand!",
//       ":yougotthis::elbowcough:🌱🪴🌲🌳:washhands::washhands::washhands::socialdist:",
//     ],
//   },
//   {
//     emotionName: "approval",
//     intensity: 0.12273837611530311,
//     frequency: 0.11695906432748537,
//     comments: [
//       "using petrol to plant a tree, now that's what I call efficiency",
//       "Another great documentary by DW regarding climate change.Keep it up 👍.",
//       "Whilst there are questionable practices and a lack of standards, it's better to do some positive than none.",
//       "Corporations are all about carbon offsetting because it sounds good, just like the video says. But more important is finding ways to outfight reduce carbon emissions outright.",
//       'Yes "Greenwashing" is a sleazy tactic used more and more by these sleazy, tax-deferring, corporations. Thx DW!!! We all need to understand that not everything is as it appears. 👍',
//       "True 💯💖",
//       "Plant my tree in this recently clear cut area, looks nice on the balance sheet.",
//       "I very much agree that ' economic activity results in increase of carbon emissions \".  The man planting the trees will be able to produce more emissions himself because of his income from this tree planting scheme.",
//       "Unconditional right to stop our own life whenever we want for all adults, my body my choice.",
//       "This broadcast is 'Safe and Effective'. Sunny ways people!",
//       "3:34 A good hold 2 time engines, that thing pollute probably more than the tree they plant will absorb in CO2 over is life. Let's not talk about the big truck they use to move around. All that for a few dozen trees of a few species. The better way would be to put a light fence around the area and let nature do it's things ... +",
//       "Humanity has been clearing forests for thousands of years, to provide grazing, grain farming, building, burning from Malta through Europe, the America's, New Zealand, Australia even Easter Island and mother earth has accommodated it all, population collapse will do greater good than all the postering, imaginative marketing, rebranding etc.",
//       "Enabling private individuals to offset their carbon print reduction by compensating them for cash is a move in the right direction. \r\nUnless all fellow humans subscribe unitedly to the personal, financially rewarding Carbon-reduction Scheme, we will not be able to stop the climate digression.",
//       "How about Nuclear power, it would be a great energy source to use to produce everything for the renewable sources :D",
//       "2022 2 species losing for climate change last year 2 species is okay. People must buy local products",
//       "All Europe allow FREE catch of Green Energy at Home without taxes or fines. ⭐Green tránsition in 24h⭐",
//       "sure plant 12 trees and keep driving a 4.8L, that will solve everything",
//       "YES. NEXT",
//       "Start with stop using plastics. That would go a long way. This should be the bare minimum and a starting point. We can use alternatives now. Promote the idea.",
//       "tittle? yes...",
//     ],
//   },
//   {
//     emotionName: "curiosity",
//     intensity: 0.11029467274298553,
//     frequency: 0.0935672514619883,
//     comments: [
//       "“Reduced Climate Impact” would be a more appropriate product label.   Still how it’s defined matters.\n\nAlso, how about the distance it traveled and the refrigeration costs?",
//       "Climate neutrality is now an impossible dream, after the Ukraine war. Germany is refiring coal power plants. New Zealand pushed its climate neutrality target from 2025 to 2050. If rich developed countries with resources can't do it, why expect developing countries with much greater basic needs to comply?",
//       "Why are there no legal requirements for companies to offset their emissions?I would have thought that is it vital for governments to make this sort of thing compulsory.Anyway,I'll be taking a much closer look at the viability of carbon offsetting and trying to  hold companies accountable thanks to this informative documentary.Claims of climate neutrality need to be scrutinized very closely!! Maximum transparency is essential.Companies need to make the information public and easily accessible.",
//       "What’s the background music with the pan drums that starts at 0:39?",
//       "Can we evn mine enough minerals to create the EV's/batteries and solar/wind we will need?",
//       "How many trees are they currently being cutting down for firewood in Europe this winter? As soon as it's a real inconvenience environmentalism is well forgotten.",
//       "The more I see it the more it seems like the industrial revolution. That basically made a lot of rich people richer. Just like this.\nWhat good is it to offset your pollution if you just keep pumping it into the air? \nAny polluter mush be forced to capture carbon from it's manufacturing plant. \nElectric vehicles should not be allowed. They are very anti climate neutral.",
//       'How about a documentary on the "Climate Death Cult" ?',
//       "My gloves are so old they're sequestering carbon. They weren't black when I bought them. Can I get a Grant for that ?",
//       "In my opinion, it would be much better to have a plan to plant more trees rather than try to switch to so called green energy and electric cars that will turn out to be much more toxic than we are being told. There are over 1 billion cars in the world. Assume they last 15 years on average. That means that 70 million need to be scrapped and recycled annually. What is going to happen to those 70 million highly toxic EV batteries annually? We are warned not to throw away AA batteries because they are toxic. EV batteries are enormous. This is going to be the next pollution crisis and I predict will be a bigger problem than a gas powered world auto fleet.",
//       "What about the co2 footprint of the 80 million new souls we get each year,\nSo we should go vegan and drive a crappy ev so the population can keep growing?",
//       "Climate propaganda.. 😂 how many threes has to be planted  for one volcano explosion?  Helloooooo",
//       "Can the poor afford climate neutral?",
//       "If there is no CO2 in the future, what are the trees going to breathe in?",
//       "How long do climate change typical day our lives 😕",
//       "Does a beech tree store carbon dioxide???  Doesn't a tree use carbon dioxide as part of its photosynthesis process?  Why the misinformation???\n\nIs zero emissions really feasible and practical?",
//     ],
//   },
//   {
//     emotionName: "admiration",
//     intensity: 0.07817413883980796,
//     frequency: 0.07017543859649122,
//     comments: [
//       "I'm glad that such big media platform is not afraid to speak about it. Make all the effort to research such issues!\nWell done DW!!",
//       "Fantastic journal coverage 👌 about  climate Neutralized by increasing green areas- replanting  forests& reusing trash ...it's encouraging populations like Germany 🇩🇪 to mobilizes for a good, useful acting for climate neutrality in additionally of increasing ecosystem enlightening..my love and respect for  DW documentary channel 👏🏻 👍🏻",
//       "Good documentary!",
//       "Great channel",
//       "Excellent report. Thank you.",
//       "Big businesses see the label climate neutral as a great sales speech just like bio has been for years.",
//       "Good documentary, definitely interesting, but it would be better to have more than only climate neutrality.  It is essential to also work against other forms of environmental pollution, destruction.",
//       "It is possible and being done right now to reach climate goals with negative carbon footprint however the right boundaries have to be established and auditable and understandable accounting has to be done. \nSome of the true carbon removal technologies are pyrolysis to biochar, enhanced rock weathering, DACs etc. \nActual treeplanting as described in this program is a great idea however it does not have the longevity of the above mentioned to carbon removal methodologies. \nThe challenges that these other methodologies and at the very beginning of their lifecycle and literally $10-$15 trillion need to be spent over the next 5 to 10 years in order to not only stop CO2 emission increases but actually start reversing that trend and eventually reach an equilibrium point when we going to go after the existing CO2 imbalance in the atmosphere. In order to do correct carbon accounting scope one, two, three and four need to be accounted for.",
//       "The climate tipping point got blown past decades ago. This is all smoke and mirrors to tamp down hysteria about the end is pretty much here. I applaud the efforts but realistically its one step forward, two steps back unfortunately.",
//       "Good...",
//       "How pathetic you clear-cut a forest to plant trees what a brilliant idea doesn't Mother Nature do that naturally duh",
//       'We can\'t "make it", if you will. Good initiative and all that. But The mathematics will never add up. Resources taken from Earth over time. Millions up on millions of years. For god sake. We managed to screw it up in a hundred year span.',
//     ],
//   },
//   {
//     emotionName: "realization",
//     intensity: 0.06805847608949392,
//     frequency: 0.06432748538011696,
//     comments: [
//       "I used to believe in all these... Climate neutral , Fair Trade and everything organic marked..\nUntil I found out that, Big businesses come up with the clever ideas and created NGOs 🤣",
//       "We have the climate of our consumption, we have the job of our consumption.\nThe only thing we have to change is our consumption behaviour that is it.\nAnd of course we have to educate young people in order to not letting them making the same mistakes of older generations.",
//       "A few days ago where I live we broke the record for highest temperature for the\narea set back in the 1930's by 1 degree. It took all this time and after all the effort\nat environmental destruction the best we could do is 1 degree more.\nSomedays enduring all the doom and gloom just isn't worth the trouble.",
//       "It's time to stop ignoring what's right in front of us. \nOver a decade ago the United Nations stated that a global shift towards a plant based diet is vital to save the world from the worst impacts of climate change. lts now 2022. The planet we call home simply cannot take the decimating impact of animal  agriculture any longer. \nEvery time we purchase animal products, we're supporting an industry that is either the main contributor, or a leading contributor to every major form of environmental devastation. \nDeforestation, water pollution, eutrophication, soil erosion, habitat loss, species extinction, ocean dead zones, plastic \npollution, greenhouse gas emissions, water use, land use, and the list goes on. There is no way to get around the fact that animal agriculture is destroying the Earth. It's time to change.",
//       "Didn't know the Ukrainian president has a glove-making business on the side.",
//       "Planting trees isn't just natural the version of BECCS. They also provide habitat and interact with fungi. The biodiversity is far more impactful to long-term climate change policy than specifically using trees as if they only have one function. That sense of scale and efficiency is what got us in this mess. We need elegant and robust systems that may not be profitable. It's not about apologizing for the excess carbon and then we get to go back to driving extinction in other ways. Stop compartmentalizing the problem and see what is revealed: the problem is capitalism.",
//       "I believe that there is a natural climate cycle on Earth for millions of years BUT the our way of living since the Age of Industrialization just speeds it up ans makes it worse!",
//       "This economical model we created by producing cheaply abroad and selling high back home is flawed in many aspects.\nTo hunt down methods to reduce CO2 emissions back home is ridiculous compared to the ecological destruction taking place in the nations of production.\nCountries like Bangladesh, or Vietnam, China are being slowly poisoned by our ways of making a buck.\nNot to mention the human costs of low wages and poor regulations.\n Forget about CO2.\nWe need to learn a brand new way of conduct to save ourself and the planet.\nIt becomes obvious though that we clearly will not be capable to move into a positive trend  for the future.\nSurvival of the fittest, maybe not!?",
//       "'Climate' has been made a trademark, a currency - only to earn cash on it.",
//       "Leftist and the Greens have used and misused semantics so much, that they have become almost unintelligible.  They have descended into a babbling that only they understand.",
//       "And then the penny drops overpopulation overpopulation overpopulation....All efforts unless addressed are futile.....We know the regions to start......",
//     ],
//   },
// ];

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);
function Visualization({ data, videoInfoData }) {
  useEffect(() => {
    if(data?.status === 200){
      toast.success(() => (
        <span className="capitalize">
           <b>{data.message} </b>
        </span>
      ),{duration: 4000})
    }else{
      toast.error(() => (
        <span className="capitalize">
           <b>{data.message} </b> 
        </span>
      ),{duration: 4000})
    }
  },[])
  const [userData, setUserData] = useState({
    labels: data?.data.map((data) => data.emotionName),
    datasets: [
      {
        label: "Emotions",
        fill: true,
        data: data?.data.map((data) => data.intensity),
        backgroundColor: [
          "rgb(51, 153, 255)",
          "rgb(240 0 184)",
          "rgba(255,226,0,1.00)",
          "rgb(51, 204, 51)",
          "rgb(153, 51, 255)",
        ],
      },
      // {
      //   label: "Frequency",
      //   fill: true,
      //   data: data.map((data) => data.frequency),
      //   backgroundColor: [
      //     "rgba(66,133,244,0.7)",
      //     "rgba(219,68,55,0.7)",
      //     "rgba(244,180,0,0.7)",
      //     "rgba(15,157,88,0.7)",
      //     "rgba(255,0,255,0.7)",
      //   ],
      //   borderColor: "black",
      //   borderWidth: 1,
      // },
    ],
  });
  const [insight, setInsight] = useState();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        // text: "Chart.js Line Chart",
      },
    },
  };
  const chartRef = useRef(null);
  const printElementAtEvent = (element) => {
    if (!element.length) return;
    const { datasetIndex, index } = element[0];
    drawerHandler();
    // userData.labels[index], userData.datasets[datasetIndex].data[index]
    let emotionObj = data?.data.filter(
      (emotionObj) => emotionObj.emotionName === userData.labels[index]
    );
    setInsight(emotionObj[0]);
  };

  const click = (event) => {
    const { current: chart } = chartRef;
    // console.log(chartRef)
  

    if (!chart) {
      return;
    }
    printElementAtEvent(getElementAtEvent(chart, event));
  };

  const [drawerState, setDrawerState] = useState(false);
  const drawerHandler = () => {
    setDrawerState((prevState) => !prevState);
  };
  return (
    <div className={`${drawerState ? "overflow-y-auto" : "overflow-hidden"} `}>
      <div className="relative  bg-gray-100">
        <CommentsDrawer
          drawerHandler={drawerHandler}
          drawerState={drawerState}
          insight={insight}
        />
        <Toaster/>
        <div className="p-5">
          <div className="flex justify-center my-5">
            <VideoStats videoInfoData={videoInfoData} />
          </div>
          <div className="flex md:flex-row flex-col md:space-x-10 gap-y-10">
            <div className="max-w-6xl space-y-10">
              <div className="max-w-3xl rounded p-5 shadow bg-white">
                <Pie options={options} data={userData} type="pie" />
              </div>
              <div className="max-w-3xl rounded p-5  bg-white">
                <Chart options={options} data={userData} type="radar" />
              </div>
            </div>
            <div className="flex justify-center w-full  heigh rounded p-5 shadow bg-white">
              <Chart
                options={options}
                data={userData}
                type="bar"
                ref={chartRef}
                onClick={(e) => click(e)}
              />
            </div>
          </div>
          <div className=" flex justify-center mt-10 w-full rounded md:p-5 p-2 shadow  bg-white">
            <Line options={options} data={userData} type="line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visualization;
