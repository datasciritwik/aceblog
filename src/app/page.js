"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchMarkdownData } from "../utils/fetchMarkdownData";
import BlogLayout from "../components/BlogLayout";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DEFAULT_MARKDOWN = `# Welcome to AceBlog\n\nNo posts found.\n\n- Check your internet connection.\n- Or add some posts to Firebase!`;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMarkdownData();
        setPosts(data);
      } catch (error) {
        setError(true);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#ffd57a]/10 to-[#ff9ecb]/10">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-[#7b61ff] border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-[#1e2a6f] text-lg font-medium">Loading amazing content...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 bg-gradient-to-br from-[#ffd57a]/5 via-[#ff9ecb]/5 to-[#7b61ff]/5 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/40">
              <MarkdownRenderer content={DEFAULT_MARKDOWN} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BlogLayout posts={posts} />
      <Footer />
    </div>
  );
}