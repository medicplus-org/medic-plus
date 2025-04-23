import React from "react";
import mental from "../../assets/images/mental.png";
import checkup1 from "../../assets/images/checkup1.png";
import chronic from "../../assets/images/chronic.png";

// Dummy data for blog posts
const blogPosts = [
  {
    title: "The Importance of Regular Health Checkups",
    description:
      "Regular health checkups can help catch potential issues early. Learn why it's important to schedule your annual appointments with your doctor.",
    image: checkup1, // Replace with your actual image
    date: "April 10, 2025",
    link: "/blog/health-checkups",
  },
  {
    title: "Top 5 Tips for Mental Well-being",
    description:
      "Mental health is just as important as physical health. Here are five tips to improve your mental well-being and stay positive.",
    image: mental, // Replace with your actual image
    date: "April 5, 2025",
    link: "/blog/mental-wellbeing",
  },
  {
    title: "How to Manage Chronic Pain Effectively",
    description:
      "Chronic pain can be difficult to manage. In this post, we discuss practical tips and methods for managing pain in daily life.",
    image: chronic, // Replace with your actual image
    date: "April 1, 2025",
    link: "/blog/chronic-pain",
  },
];

const BlogSection = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Latest Articles
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          Stay informed with the latest health tips, news, and updates.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-56 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.date}</span>
                  <a href={post.link} className="text-blue-600 hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
