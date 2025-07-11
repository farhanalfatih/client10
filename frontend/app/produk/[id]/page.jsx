import { supabase } from "../../../utils/supabase";
import ProductDetailClient from "./ProductDetailClient";


export default async function Page(props) {
  const { id } = props.params;

  const { data: produk, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !produk) {
    return <div className="text-center text-red-600 font-semibold mt-10">Produk tidak ditemukan.</div>;
  }

  return <ProductDetailClient produk={produk} />;
}
