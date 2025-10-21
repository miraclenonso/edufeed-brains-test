"use client";

import React, { useState } from "react";
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

  /** -------------------------------
   * Fetch posts (with category, search & pagination)
   * ------------------------------- **/
  const fetchPosts = async (categoryId = "home", query = "", pageNumber = 1) => {
    let url = `https://edufeedbrains.com/wp-json/wp/v2/posts?per_page=15&page=${pageNumber}&_embed`;
    if (categoryId !== "home") url += `&categories=${categoryId}`;
    if (query) url += `&search=${encodeURIComponent(query)}`;

    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    const total = res.headers.get("X-WP-TotalPages") || 1;
    return { data, total: Number(total) };
  };

  /** -------------------------------
   * Fetch categories
   * ------------------------------- **/
  const fetchCategories = async () => {
    const res = await fetch(
      `https://edufeedbrains.com/wp-json/wp/v2/categories?per_page=20`,
      { cache: "no-store" }
    );
    return await res.json();
  };

  /** -------------------------------
   * Preload content before rendering
   * ------------------------------- **/
  React.useMemo(async () => {
    setLoading(true);
    try {
      const [catData, postData] = await Promise.all([
        fetchCategories(),
        fetchPosts(activeCategory, searchQuery, currentPage),
      ]);
      setCategories(catData);
      setPosts(postData.data);
      setTotalPages(postData.total);
    } catch (err) {
      console.error("Error loading content:", err);
    } finally {
      setLoading(false);
    }
  }, [activeCategory, currentPage]);

  /** -------------------------------
   * Handle category click
   * ------------------------------- **/
  const handleCategoryClick = async (categoryId) => {
    setActiveCategory(categoryId);
    router.push(`/blog/1`);
    setLoading(true);
    const postData = await fetchPosts(categoryId, searchQuery, 1);
    setPosts(postData.data);
    setTotalPages(postData.total);
    setLoading(false);
  };

  /** -------------------------------
   * Handle pagination
   * ------------------------------- **/
  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      router.push(`/blog/${currentPage + 1}`);
    }
  };

  const handlePrevPage = async () => {
    if (currentPage > 1) {
      router.push(`/blog/${currentPage - 1}`);
    }
  };

  /** -------------------------------
   * Handle search
   * ------------------------------- **/
  const handleSearch = async (e) => {
    e.preventDefault();
    router.push(`/blog/1`);
    setLoading(true);
    const postData = await fetchPosts(activeCategory, searchQuery, 1);
    setPosts(postData.data);
    setTotalPages(postData.total);
    setLoading(false);
  };

  return (
    <div className={styles.blogContainer}>
      {loading ? (
        <p>Loading content...</p>
      ) : (
        <>
          <h1 className={styles.mainTitle}>Our Blog</h1>

          {/* Search & mobile category filters */}
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
                <button type="submit" className={styles.searchButton}>
                  Search
                </button>
              </div>
            </form>

            <div className={styles.mobileCategories}>
              <a
                onClick={() => handleCategoryClick("home")}
                className={
                  activeCategory === "home"
                    ? styles.activeCategory
                    : styles.categoryItem
                }
              >
                Home
              </a>

              {categories.map((cat) => (
                <a
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={
                    activeCategory === cat.id
                      ? styles.activeCategory
                      : styles.categoryItem
                  }
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.gridLayout}>
            {/* Main Posts Section */}
            <div className={styles.postsColumn}>
              {posts.length > 0 ? (
                <>
                  {posts.map((post) => (
                    <article key={post.id} className={styles.postCard}>
                      <div className={styles.imageWrapper}>
                        <a
                          href={post.link}
                          className={styles.imageLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={
                              post._embedded?.["wp:featuredmedia"]?.[0]
                                ?.source_url ||
                              "https://edufeedbrains.com/wp-content/uploads/2024/09/default-image.jpg"
                            }
                            alt={post.title.rendered}
                            className={styles.postImage}
                          />
                        </a>
                      </div>

                      <div className={styles.postContent}>
                        <p className={styles.postMeta}>
                          {post._embedded?.author?.[0]?.name ||
                            "Edufeed Brains"}{" "}
                          | {new Date(post.date).toLocaleDateString()}
                        </p>

                        <h2 className={styles.postTitle}>
                          <a
                            href={post.link}
                            className={styles.postLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {post.title.rendered}
                          </a>
                        </h2>

                        <p
                          className={styles.postExcerpt}
                          dangerouslySetInnerHTML={{
                            __html:
                              post.excerpt.rendered
                                .replace(/<[^>]+>/g, "")
                                .slice(0, 180) + "...",
                          }}
                        />

                        <a
                          href={post.link}
                          className={styles.readMore}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More{" "}
                          <span className="material-symbols-outlined">
                            arrow_forward
                          </span>
                        </a>
                      </div>
                    </article>
                  ))}

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
                      <span className={styles.activePage}>{currentPage}</span> /{" "}
                      <span>{totalPages}</span>
                    </div>

                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={styles.pageButton}
                    >
                      Next
                    </button>
                  </nav>
                </>
              ) : (
                <p>No posts found.</p>
              )}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarBox}>
                {/* Search Bar */}
                <form onSubmit={handleSearch} className={styles.searchBar}>
                  <div className={styles.searchContainer}>
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton}>
                      Search
                    </button>
                  </div>
                </form>

                {/* Categories */}
                <div>
                  <h3 className={styles.sidebarTitle}>Categories</h3>
                  <div className={styles.categories}>
                    <a
                      onClick={() => handleCategoryClick("home")}
                      className={
                        activeCategory === "home"
                          ? styles.activeCategory
                          : styles.categoryItem
                      }
                    >
                      Home
                    </a>

                    {categories.map((cat) => (
                      <a
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className={
                          activeCategory === cat.id
                            ? styles.activeCategory
                            : styles.categoryItem
                        }
                      >
                        {cat.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </>
      )}
    </div>
  );
}
