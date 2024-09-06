import CatalogModal from "@/component/CatalogModal/CatalogModal";
import Search from "@/component/Search/Search";
import './ui/HomeHero.scss'

export default function HomeHero() {
    return (

        <div className="my-container">
            <div className="catalog_box flex gap-[21px] items-center my-[30px]">
                <CatalogModal />
                <Search />
            </div>
        </div>


    )
}