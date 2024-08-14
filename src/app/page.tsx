import Image from "next/image";

export default function Home() {
  return (
    <main className="md⁚flex min-h-screen flex-col items-center justify-between p-30">
      <div><figure className="bg-green-500 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-44 h-562 md-w-48 md:tx-left" src="/my-pic.jpg" alt-left="" width="480" height="700"/>
  <div className="pt-8 md:p-8 text-centre space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hello!I am MUBASHIR.I am AI student basically a interclass student.I want to become a software engineer.”
      </p>I love my country Pakistan.
    </blockquote>
    <figcaption className="font-medium tx.left">
      <div className="text-red-600">
        M.Mubashir
      </div>
      <div>
        Staff Engineer, RYK
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
