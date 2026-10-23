import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { puppies, getPuppyBySlug } from "../../../data/puppies";
import PuppyDetailClient from "./PuppyDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return puppies.map((puppy) => ({
    slug: puppy.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const puppy = getPuppyBySlug(slug);

  if (!puppy) {
    return {
      title: "Puppy Not Found | TeddyPups Dubai",
    };
  }

  return {
    title: `${puppy.name} - ${puppy.breed} (${puppy.gender}, ${puppy.age}) | TeddyPups Dubai`,
    description: puppy.description,
  };
}

async function PuppyDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const puppy = getPuppyBySlug(slug);

  if (!puppy) {
    notFound();
  }

  return <PuppyDetailClient puppy={puppy} />;
}

export default function PuppyDetailPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-4xl animate-bounce-gentle">🐾</span>
            <p className="font-serif font-bold text-lg text-[#3b2010]">
              Loading puppy details...
            </p>
          </div>
        </div>
      }
    >
      <PuppyDetailContent params={params} />
    </Suspense>
  );
}
