"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

import styles from "./styles.module.css";

import heroImage from "../../public/homeHero.png";

import ScheduleButton from "../components/ScheduleButton";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const options = { next: { revalidate: 30 } };
//get the first 15 words of the blog post body text followed by an ellipsis
const truncate = (text) => {
  const words = text.split(" ");
  if (words.length > 15) {
    return words.slice(0, 15).join(" ") + "...";
  }
  return text;
};

export default function Blog() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [heroPost, setHeroPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [heroLoading, setHeroLoading] = useState(false);

  useEffect(() => {
    const savedPage = localStorage.getItem("page");
    if (savedPage) {
      setPage(Number(savedPage));
    }
  }, []);

  // Save the page state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  const HERO_POST_QUERY = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...1]{_id, title, slug, publishedAt, mainImage, body, description}`;

  useEffect(() => {
    const fetchPostSolo = async () => {
      setHeroLoading(true);
      const fetchedPost = await client.fetch(HERO_POST_QUERY);
      setHeroPost(fetchedPost);
      setHeroLoading(false);
    };

    fetchPostSolo();
  }, [HERO_POST_QUERY]);

  const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[${(page - 1) * 6}...${page * 6}]{_id, title, slug, publishedAt, mainImage, body, description}`;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const fetchedPosts = await client.fetch(POSTS_QUERY);
      setPosts(fetchedPosts);
      setLoading(false);
    };

    fetchPosts();
  }, [page, POSTS_QUERY]);

  if (loading || heroLoading) {
    return (
      <div>
        <div className={styles.hero}>
          <div className={styles.heroCont}>
            <div className={styles.heroBlogCont}>
              <div className={styles.loadingSpinner}></div>
            </div>
            <div className={styles.heroImage}>
              {/* <Image
                src={heroImage}
                alt="placeholder"
                unoptimized
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                priority
              /> */}
              <div className={styles.heroFill}></div>
            </div>
          </div>
        </div>
        <div className={styles.heroMed}>
          <div className={styles.heroCont}>
            <div className={styles.heroBlogCont}>
              <div className={styles.loadingSpinner}></div>
            </div>
            <div className={styles.heroImage}>
              {/* <Image
                src={heroImage}
                alt="placeholder"
                unoptimized
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                priority
              /> */}
              <div className={styles.heroFill}></div>
            </div>
          </div>
        </div>
        <div className={styles.blogItemsCont}>
          <div className={styles.postSpinnerCont}>
            <div className={styles.loadingSpinner}></div>
          </div>
        </div>
        <div className={styles.paginationCont}>
          <button
            className={styles.paginationBtn}
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
          >
            Previous
          </button>
          <button
            className={styles.paginationBtn}
            onClick={() => setPage(page + 1)}
            disabled={posts.length < 3}
          >
            Next
          </button>
        </div>
        <div>
          <ContactForm isStandard={true} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
  const heroPostSolo = heroPost[0];
  return (
    <div>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroCont}>
          <div className={styles.heroBlogCont}>
            <div className={styles.heroText}>
              <h3>{heroPostSolo?.title ? "Latest Post" : ""}</h3>
              <p>
                {heroPostSolo?.publishedAt ? (
                  new Date(heroPostSolo?.publishedAt).toLocaleDateString()
                ) : (
                  <></>
                )}
              </p>
              <h1>{heroPostSolo?.title ? heroPostSolo?.title : ""}</h1>
              <p className={styles.heroTextTextCont}>
                {heroPostSolo?.description ? heroPostSolo?.description : ""}
              </p>
              {heroPostSolo?.title ? (
                <Link href={`/blog/${heroPostSolo?.slug.current}`}>
                  <button className={styles.heroPostBtn}>View post</button>
                </Link>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.heroImgCont}>
              {heroPostSolo?.mainImage ? (
                <Image
                  src={urlFor(heroPostSolo?.mainImage).url()}
                  alt={heroPostSolo?.title}
                  unoptimized
                  priority
                  //objectFit="cover"
                  //layout="fill"
                  width={500}
                  height={400}
                  className={styles.heroBlogImg}
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className={styles.heroImage}>
            {heroPostSolo?.mainImage ? (
              <Image
                src={urlFor(heroPostSolo?.mainImage).url()}
                alt={heroPostSolo?.title}
                unoptimized
                objectFit="cover"
                layout="fill"
                priority

                //placeholder="blur"
              />
            ) : (
              <div className={styles.heroFill}></div>
            )}
          </div>
        </div>
      </div>
      {/* Hero Medium */}
      <div className={styles.heroMed}>
        <div className={styles.heroCont}>
          <div className={styles.heroBlogCont}>
            <div className={styles.heroText}>
              <div className={styles.heroPostMedTopCont}>
                <div className={styles.heroPostMedTop}>
                  <h3>{heroPostSolo?.title ? "Latest Post" : ""}</h3>
                  <p>
                    {heroPostSolo?.publishedAt
                      ? new Date(heroPostSolo?.publishedAt).toLocaleDateString()
                      : ""}
                  </p>
                </div>
                <h1>{heroPostSolo?.title ? heroPostSolo?.title : ""}</h1>
              </div>
              <div className={styles.heroPostMedMid}>
                <div className={styles.heroImgContCont}>
                  <div className={styles.heroImgContMed}>
                    {heroPostSolo?.mainImage ? (
                      <Image
                        src={urlFor(heroPostSolo?.mainImage).url()}
                        alt={heroPostSolo?.title}
                        unoptimized
                        priority
                        //objectFit="cover"
                        //layout="fill"
                        width={300}
                        height={200}
                        className={styles.heroBlogImg}
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
              <p className={styles.heroTextTextCont}>
                {heroPostSolo?.description ? heroPostSolo?.description : ""}
              </p>
              {heroPostSolo?.title ? (
                <Link href={`/blog/${heroPostSolo?.slug.current}`}>
                  <button className={styles.heroPostBtn}>View post</button>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className={styles.heroImage}>
            {heroPostSolo?.mainImage ? (
              <Image
                src={urlFor(heroPostSolo?.mainImage).url()}
                alt={heroPostSolo?.title}
                unoptimized
                objectFit="cover"
                layout="fill"
                priority

                //placeholder="blur"
              />
            ) : (
              <div className={styles.heroFill}></div>
            )}
          </div>
        </div>
      </div>
      {/* blog item */}
      <div className={styles.blogItemsCont}>
        {posts.length ? (
          posts.map((post) => (
            <div className={styles.blogItem} key={post._id}>
              <div className={styles.blogItemImgCont}>
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    unoptimized
                    objectFit="cover"
                    //   layout="fill"
                    // placeholder="blur"
                    loading="lazy"
                    className={styles.blogItemImg}
                    width={500}
                    height={500}
                  />
                ) : (
                  <div className={styles.postSpinnerCont}>
                    <div className={styles.loadingSpinner}></div>
                  </div>
                )}
              </div>
              <div className={styles.blogItemText}>
                <h3>{new Date(post.publishedAt).toLocaleDateString()}</h3>
                <h1>{post.title}</h1>
                <div className={styles.blogItemBodyCont}>
                  <div className={styles.blogBodyFade}></div>
                  <p>{post.description ? post.description : ""}</p>
                </div>
              </div>
              <Link href={`/blog/${post.slug.current}`}>
                <div className={styles.blogItemBtnCont}>
                  <button className={styles.blogItemBtn}>View post</button>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className={styles.noPostsCont}>
            <h1>No more posts...</h1>
          </div>
        )}
      </div>
      <div className={styles.paginationCont}>
        <button
          className={
            page === 1 ? styles.paginationBtnDisabled : styles.paginationBtn
          }
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          Previous
        </button>
        <div className={styles.pageNumberCont}>
          <p>Page: {page}</p>
        </div>
        <button
          className={`${styles.paginationBtn} ${posts.length < 6 ? styles.paginationBtnDisabled : ""}`}
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={posts.length < 6}
        >
          Next
        </button>
      </div>
      <div>
        <ContactForm isStandard={true} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
