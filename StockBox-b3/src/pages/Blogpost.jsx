import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./blogpost.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClock, 
  faUser, 
  faBookmark, 
  faShareAlt,
  faLink,
  faArrowLeft 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faWhatsapp, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { Helmet } from "react-helmet";

const Blogpost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    async function fetchBlogData() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        if (res.data?.data) {
          setBlogData(res.data.data);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    }
    fetchBlogData();
  }, [id]);

  const shareUrl = window.location.href;
  const title = blogData?.title || "Check out this blog post";
  
  const socialLinks = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: faFacebookF,
      bgColor: "bg-[#1877F2]"
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      icon: faTwitter,
      bgColor: "bg-[#1DA1F2]"
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + shareUrl)}`,
      icon: faWhatsapp,
      bgColor: "bg-[#25D366]"
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`,
      icon: faLinkedinIn,
      bgColor: "bg-[#0A66C2]"
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Add actual bookmarking functionality here
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const estimateReadingTime = (content) => {
    if (!content) return "1 min read";
    const text = content.replace(/<[^>]*>/g, '');
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    return `${readingTime} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="animate-pulse bg-gray-200 rounded-xl w-16 h-16 mx-auto mb-6"></div>
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded w-64 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8 max-w-md mx-auto bg-white rounded-2xl shadow-xl">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Error Loading Blog</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200"
            >
              Try Again
            </button>
            <button 
              onClick={() => navigate('/blogs')}
              className="px-6 py-3 bg-white text-gray-800 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors font-medium shadow hover:shadow-md"
            >
              Back to Blog List
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blogData.title} | Your Blog Name</title>
        <meta name="description" content={blogData.content?.replace(/<[^>]*>/g, '').substring(0, 160) + '...'} />
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={blogData.content?.replace(/<[^>]*>/g, '').substring(0, 160) + '...'} />
        {blogData.thumbImage?.secure_url && (
          <meta property="og:image" content={blogData.thumbImage.secure_url} />
        )}
      </Helmet>
          
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/blogs')}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-8 transition-colors font-medium group"
        >
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="text-indigo-600 group-hover:text-indigo-800" />
          </div>
          <span>Back to All Blogs</span>
        </button>

        {/* Article Container */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Featured Image */}
          {blogData.thumbImage?.secure_url && (
            <div className="w-full h-80 md:h-96 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                src={blogData.thumbImage.secure_url}
                alt={blogData.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                {/* Category Tag */}
                {blogData.category && (
                  <span className="inline-block px-4 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-full mb-3">
                    {blogData.category.blogCategoryName}
                  </span>
                )}

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3 drop-shadow-lg">
                  {blogData.title}
                </h1>

                {/* Author and Date */}
                <div className="flex flex-wrap items-center gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <FontAwesomeIcon icon={faUser} className="text-white" />
                    </div>
                    <span className="text-sm font-medium">{blogData.author || "Unknown Author"}</span>
                  </div>
                  <span className="text-sm flex items-center gap-1">
                    <FontAwesomeIcon icon={faClock} />
                    {formatDate(blogData.updatedAt)}
                  </span>
                  <span className="text-sm flex items-center gap-1">
                    <FontAwesomeIcon icon={faBookmark} className="text-sm" />
                    {estimateReadingTime(blogData.content)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="px-6 py-8 md:px-10 md:py-12">
            {/* Content */}
            <div 
              ref={contentRef}
              className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-800 prose-blockquote:border-l-indigo-600 prose-blockquote:bg-gray-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-xl prose-img:rounded-xl prose-img:shadow-md"
              dangerouslySetInnerHTML={{ __html: blogData.content }} 
            />

            {/* Divider */}
            <div className="border-t border-gray-200 my-10"></div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="flex items-center gap-3">
                <button 
                  onClick={toggleBookmark}
                  className={`p-3 rounded-full flex items-center gap-2 transition-colors ${isBookmarked ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                  aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this article"}
                >
                  <FontAwesomeIcon icon={faBookmark} />
                  <span className="text-sm font-medium hidden sm:inline">
                    {isBookmarked ? "Bookmarked" : "Bookmark"}
                  </span>
                </button>
                
                <button 
                  onClick={copyToClipboard}
                  className="p-3 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors flex items-center gap-2"
                  aria-label="Copy link to clipboard"
                >
                  <FontAwesomeIcon icon={faLink} />
                  <span className="text-sm font-medium hidden sm:inline">Copy Link</span>
                </button>
              </div>

              {/* Social Share Buttons */}
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-gray-700">Share this article:</p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full text-white ${social.bgColor} hover:opacity-90 transition-opacity flex items-center justify-center w-12 h-12`}
                      aria-label={`Share on ${social.name}`}
                    >
                      <FontAwesomeIcon icon={social.icon} className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Floating Copy Link Notification */}
        {isCopied && (
          <div className="fixed bottom-6 right-6 bg-gray-800 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 animate-fade-in-out z-50">
            <FontAwesomeIcon icon={faLink} className="text-indigo-400" />
            <span>Link copied to clipboard!</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogpost;