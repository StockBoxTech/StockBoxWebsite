import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Blogpost = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    async function fetchBlogData() {
      
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        if (res.data && res.data.data) {
          setBlogData(res.data.data); // ✅ Accessing the object directly
        } else {
          setBlogData(null);
        }
        
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }
    fetchBlogData();
  }, [id]);

  if (!blogData) {
    return <div className="text-center text-red-500 font-bold mt-10">Blog not found!</div>;
  }

  const shareUrl = window.location.href;
  const facebookShareUrl = `https://facebook.com/stockbox`;
  const twitterShareUrl = `https://twitter.com/stockboxtech`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${shareUrl}`;
  const linkedinShareUrl = `https://www.linkedin.com/company/stockbox-technologies-pvt-ltd/posts/?feedView=all`;

  return (
    <div className="max-w-3xl mx-auto p-5 bg-amber-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{blogData.title}</h1>
      <p className="text-gray-600 mb-4">
  Published on: {new Date(blogData.updatedAt).toDateString()} | Category: {blogData.category?.blogCategoryName || "Uncategorized"}
</p>

      {/* Thumbnail Image */}
      {blogData.thumbImage?.secure_url && (
        <img
          src={blogData.thumbImage.secure_url}
          alt="Blog Thumbnail"
          className="w-full h-auto object-cover rounded-lg mb-6"
        />
      )}

      {/* Blog Content */}
      <div
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blogData.content }}
      ></div>

      {/* Social Media Share Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="text-green-500">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Blogpost;
