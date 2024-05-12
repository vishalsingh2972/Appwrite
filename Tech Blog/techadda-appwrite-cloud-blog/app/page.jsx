"use client"
import { Client, Databases, ID } from "appwrite";
import { useEffect,useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const client = new Client();
  const [blogs, setBlogs] = useState([]);

  client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('663fb9f0002367bc6b4d');

  const databases = new Databases(client);

  let promise = databases.listDocuments(
      'DATABASE_ID dal yaha',
      'COLLECTION_ID dal yaha',
    []
  );

  promise.then(function (response) {
      console.log(response);
      setBlogs(response.documents);

  }, function (error) {
      console.log(error);
  });

  function truncateHtml(htmlString) {
    // Create a temporary element to parse the HTML string
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
  
    // Get the text content of the element
    const textContent = tempElement.innerText.trim();
  
    // Check if the text content length is greater than 100
    if (textContent.length > 100) {
      // Return the first 100 characters with ellipsis
      return textContent.slice(0, 100) + '...';
    } else {
      // Return the original text content
      return textContent;
    }
  }

  // const promise = databases.createDocument(
  // "<DATABASE_ID>",
  // "<COLLECTION_ID>",
  //     ID.unique(),
  //     element
  // );

  // promise.then(function (response) {
  //     console.log(response);
  // }, function (error) {
  //     console.log(error);
  // });
  
  return (
    <>
      <Navbar/>
      <div className="container mx-auto mt-8">
        <h1 className="text-3x1 font-bold mb-6">Latest Blogs</h1>
        <div className="">
          {blogs.length===0 && "Loading...thoda rukja kake"}
          {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} metaDesc = {truncateHtml(blog.content)}/>
          ))}
        </div>
      </div>
    </>    
  );
}