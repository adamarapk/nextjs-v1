export default function Home() {
return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-500 via-yellow-300 to-amber-400 p-4">

  <div
    className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg p-8 w-full max-w-md">

    <div className="flex flex-col gap-4 font-bold text-white">
      <h2 className="text-2xl font-bold text-center">
        Damara Putra Kusuma
      </h2>
      <div className="bg-black/20 p-4 rounded-xl">
      <p className="">
        Semoga Tech Mayantara Asia...
      </p>
      <ul className="">
        <li>Semakin sukses,</li>
        <li>Panjang Umur,</li>
        <li>Siap menerima dan beradaptasi dengan perubahan apapun.</li>
      </ul>
      </div>
    </div>

  </div>
</div>
);
}