import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function InfiniteScrollPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMorePosts();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMorePosts();
    }
  };

  const loadMorePosts = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const newPosts = Array.from({ length: 10 }, (_, i) => ({
        id: posts.length + i + 1,
        text: `Post #${posts.length + i + 1}`,
      }));

      // Insert the secret clue at post #25
      if (posts.length + 1 === 25) {
        newPosts[0].text = "Clue: Download the LEGO Database dataset from Kaggle!";
        newPosts[0].link = "https://www.kaggle.com/datasets/rtatman/lego-database";
      }

      setPosts((prev) => [...prev, ...newPosts]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Infinite Scrolling Clue Hunt</h1>
      <div className="space-y-3">
        {posts.map((post) => (
          <Card key={post.id} className="p-3">
            {post.text}
            {post.link && (
              <a href={post.link} className="text-blue-500 block mt-2">
                Get the Dataset Here
              </a>
            )}
          </Card>
        ))}
      </div>
      {loading && <p className="text-gray-500 mt-4">Loading more...</p>}
    </div>
  );
}
