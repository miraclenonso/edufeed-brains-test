"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function BlogPage() {
  const { page } = useParams();
  const router = useRouter();

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("home");
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const currentPage = Number(page) || 1;

  // Decode HTML entities
  const decodeHTML = (html) => {
    if (!html) return "";
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  // Strip HTML tags and decode
  const plainTextFromHTML = (html, max = 180) => {
    if (!html) return "";
    const stripped = html.replace(/<[^>]+>/g, "");
    return decodeHTML(stripped).trim().slice(0, max) + (stripped.length > max ? "..." : "");
  };

  /** Fetch posts (title-only search included) */
  const fetchPosts = async (categoryId = "home", query = "", pageNumber = 1) => {
    let url = `https://edufeedbrains.com/wp-json/wp/v2/posts?per_page=15&page=${pageNumber}&_embed`;
    if (categoryId !== "home") url += `&categories=${categoryId}`;
    if (query) url += `&search=${encodeURIComponent(query)}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      console.error("WP posts fetch failed:", res.status);
      return { data: [], total: 1 };
    }

    const data = await res.json();
    const total = res.headers.get("X-WP-TotalPages") || 1;

    // ✅ Filter by title only (case-insensitive)
    const titleOnly = query
      ? data.filter((post) =>
          decodeHTML(post.title.rendered).toLowerCase().includes(query.toLowerCase())
        )
      : data;

    return { data: titleOnly, total: Number(total) };
  };

  /** Fetch categories (excluding 'Uncategorized') */
  const fetchCategories = async () => {
    const res = await fetch(`https://edufeedbrains.com/wp-json/wp/v2/categories?per_page=50`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();

    // ✅ Remove "Uncategorized" category
    const filtered = data.filter(
      (cat) => cat.name.toLowerCase() !== "uncategorized"
    );

    return filtered;
  };

  /** Initial load & page param watcher */
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const [catData, postData] = await Promise.all([
          fetchCategories(),
          fetchPosts(activeCategory, searchQuery, currentPage),
        ]);
        if (!mounted) return;
        setCategories(catData);
        setPosts(postData.data);
        setTotalPages(postData.total);
      } catch (err) {
        console.error("Error loading data:", err);
        if (mounted) {
          setCategories([]);
          setPosts([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  /** Category click */
  const handleCategoryClick = async (categoryId) => {
    setActiveCategory(categoryId);
    setLoading(true);
    router.push(`/blog/1`);
    const postData = await fetchPosts(categoryId, searchQuery, 1);
    setPosts(postData.data);
    setTotalPages(postData.total);
    setLoading(false);
  };

  /** Pagination */
  const handleNextPage = () => {
    if (currentPage < totalPages) router.push(`/blog/${currentPage + 1}`);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) router.push(`/blog/${currentPage - 1}`);
  };

  /** Search (title-only) */
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    router.push(`/blog/1`);
    const postData = await fetchPosts(activeCategory, searchQuery, 1);
    setPosts(postData.data);
    setTotalPages(postData.total);
    setLoading(false);
  };

  return (
    <div className={styles.blogContainer}>
      {loading ? (
        <div className={styles.loadingWrapper}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <>
          <h1 className={styles.mainTitle}>Our Blog</h1>

          {/* Search + Mobile Categories */}
          <div className={styles.mobileFilters}>
            <form onSubmit={handleSearch} className={styles.searchBar}>
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton} aria-label="Search">
                  <span className="material-symbols-outlined">search</span>
                </button>
              </div>
            </form>

            <div className={styles.mobileCategories}>
              <a
                onClick={() => handleCategoryClick("home")}
                className={activeCategory === "home" ? styles.activeCategory : styles.categoryItem}
              >
                Home
              </a>

              {categories.map((cat) => (
                <a
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={activeCategory === cat.id ? styles.activeCategory : styles.categoryItem}
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.gridLayout}>
            <div className={styles.postsGrid}>
              {posts.length > 0 ? (
                posts.map((post) => {
                  const featured =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://edufeedbrains.com/wp-content/uploads/2024/09/default-image.jpg";
                  const titleText = decodeHTML(post.title.rendered);
                  const excerptText = plainTextFromHTML(post.excerpt.rendered, 180);

                  return (
                    <article key={post.id} className={styles.postCard}>
                      <div className={styles.imageWrapper}>
                        <a
                          href={post.link}
                          className={styles.imageLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={featured} alt={titleText} className={styles.postImage} />
                        </a>
                      </div>

                      <div className={styles.postContent}>
                        <p className={styles.postMeta}>
                          {post._embedded?.author?.[0]?.name || "Edufeed Brains"} |{" "}
                          {new Date(post.date).toLocaleDateString()}
                        </p>

                        <h2 className={styles.postTitle}>
                          <a
                            href={post.link}
                            className={styles.postLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {titleText}
                          </a>
                        </h2>

                        <p className={styles.postExcerpt}>{excerptText}</p>
                      </div>
                    </article>
                  );
                })
              ) : (
                <p>No posts found.</p>
              )}

              {/* Pagination */}
              <nav className={styles.pagination}>
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={styles.pageButton}
                >
                  Previous
                </button>

                <div className={styles.pageNumbers}>
                  <span className={styles.activePage}>{currentPage}</span> / <span>{totalPages}</span>
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={styles.pageButton}
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
