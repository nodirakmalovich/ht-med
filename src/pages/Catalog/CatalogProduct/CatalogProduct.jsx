import useCatalogModalApi from "@/component/CatalogModal/api/catalogApi"
import { useCatalogProductApi } from "./api/CatalogProduct";
import ProductCard from "@/component/Cards/ProductCard/ProductCard";

export default function CatalogProduct() {

    const { catalogProduct } = useCatalogProductApi()


    return (
        <ProductCard
            image={ }
        />
    )
}