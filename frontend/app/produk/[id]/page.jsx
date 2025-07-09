import { supabase } from '../../../utils/supabase'

export default async function Page({ params }) {
  const { id } = params

  const { data, error } = await supabase.from('products').select('*').eq('id', id).single()

  if (error) {
    return <div>Produk tidak ditemukan.</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{data.judul}</h1>
      <p className="text-lg mt-2">Harga: Rp {data.harga.toLocaleString('id-ID')}</p>
      <img src={data.gambar} alt={data.judul} className="w-60 mt-4 rounded-lg" />
      <p className="mt-4 text-gray-600">{data.deskripsi}</p>
    </div>
  )
}
