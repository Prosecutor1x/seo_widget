import Widget from "@/components/widget/main.widget";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-4 bg-gray-200">
      <div className="text-2xl font-bold space-y-4">
        {" "}
        <h1 className="text-center text-lg lg:text-2xl">Hello Welcome To The SEO WIDGET</h1>
        <p className="text-lg font-normal text-center">~ Krishnarjun Nanda</p>

        <div className="flex justify-center  border-2 border-gray-300 rounded-2xl p-12 shadow-xl bg-white px-4">
          <Widget/>
        </div>
      </div>
    </main>
  );
}
