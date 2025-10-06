import Navbar from "../../components/shared/Navbar/Navbar.jsx";
import NewsCard from "./NewsCard.jsx";


function NewsPage() {
    const newsData = [
        {
            poster: "/news/1.webp",
            title: "Cairo-based architectural company",
            description: "Since moving to Canada in 1974 from India, where he worked as an architect for two leading firms....",
            publishedAt: "2025-07-23",
            creator: "David Parker",
            link: "https://calgaryherald.com/business/cairo-based-architectural-company-acquires-calgary-firms-selects-city-as-north-american-hq",
        }
    ];
    return <>
        <Navbar />
        <div className="min-h-screen bg-lightGray p-6">
            {/* Page Poster */}
            <div className="mb-10 relative">
                <img
                    src="/news/poster.webp"
                    alt="News Poster Mosaic Holding Corporation MHC"
                    className="w-full h-72 object-cover rounded-2xl shadow-lg"
                />
                <h1 className="absolute bottom-6 left-8 text-xLarge font-bold text-white drop-shadow-lg">
                    Latest News
                </h1>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsData.map((news, index) => (
                    <NewsCard key={index} {...news} />
                ))}
            </div>
        </div>
    </>

}

export default NewsPage;
