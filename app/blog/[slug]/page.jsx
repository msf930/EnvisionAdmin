import { RichTextComponents } from "../../components/RichTextComponents";
import ScheduleButton from "@/app/components/ScheduleButton";

import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";

import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{_id, title, slug, publishedAt, mainImage, body, description}`;

const { projectId, dataset } = client.config();
// const urlFor = (source) =>
//   projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({ params }) {
  const post = await client.fetch(POST_QUERY, params);
  // const postImageUrl = post.mainImage
  //   ? urlFor(post.mainImage)?.width(550).height(310).url()
  //   : null;

  return (
    //<main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
    <main>
      <div>
        <div className={styles.hero}>
          <div className={styles.heroCont}>
            <div className={styles.heroLogo}>
              <div className={styles.heroGoodbyeCont}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <ScheduleButton isCenter={false} />
              </div>
            </div>
            <div className={styles.heroImage}>
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt="placeholder"
                  unoptimized
                  objectFit="cover"
                  layout="fill"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.postBodyCont}>
        <div className={styles.postBody}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <div className={styles.post}>
            <p className={styles.postDate}>
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            {Array.isArray(post.body) && (
              <PortableText value={post.body} components={RichTextComponents} />
            )}
          </div>
        </div>
      </div>
      <div>
        <ContactForm isStandard={true} />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
