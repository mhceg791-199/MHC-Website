import Paragraph from "../../components/shared/paragraph.jsx";
import SectionHeader from "../../components/shared/sectionHeader/sectionHeader.jsx";

function NewsPage() {
    return (
        <>
            <div className="">
                <img
                    className="w-full lg:h-[70vh] object-cover"
                    src="/news/1.webp"
                    alt=""
                />
                <div className="bg-lightGray relative translate-y-[-10%]  sm:mx-10  p-8 md:px-14">
                    <div className="flex items-center">
                        <SectionHeader firstWord="Cairo-Based Architectural Company Scores a Coup" link="/https://calgaryherald.com/business/cairo-based-architectural-company-acquires-calgary-firms-selects-city-as-north-american-hq" />
                    </div>
                    <Paragraph p="Since moving to Canada in 1974 from India, where he worked as an architect for two leading firms, Arup Datta has enjoyed a successful career, being involved in many exciting projects. Early on, he was recruited by the former Cohos Evamy and Partners and worked on the design of major Calgary office towers, including the Husky Tower and Bankers Hall." />
                    <br />
                    <br />
                    <Paragraph p="He took a three-year contract in Nigeria to design a $130-million twin office tower and convention facility, but returned to Calgary and joined MSA (Maurice Sunderland Architecture) and enjoyed the opportunity to be involved in the design of West Edmonton Mall and Mall of America in Minnesota. He launched his own firm of Arup Datta Architecture Ltd. (ADAL) in 1988, and 37 successful years later has made another exciting move, joining ADAL into Mosaic Holding Corp., (MHC), a Cairo-based company that is expanding into North America." />
                    <br />
                    <br />
                    <Paragraph p="It specializes in acquiring mid-cap companies with strong track records, deeply embedded in the architectural landscape. CEO Omar Attaby was thrilled to convince Datta and another Calgary architectural firm owned by Max Tayefi to join him." />
                    <br />
                    <br />
                    <SectionHeader fontSize="lg"
                        firstWord="Read More" link="/https://calgaryherald.com/business/cairo-based-architectural-company-acquires-calgary-firms-selects-city-as-north-american-hq" />




                    <div className="bg-gray-400 rounded-xl w-full h-[1px] mt-5"></div>
                </div>
            </div>
        </>
    );
}

export default NewsPage;
