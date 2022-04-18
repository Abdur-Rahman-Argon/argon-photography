import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blog-container">
      <h1>Bonus Part: Question Answer</h1>
      <div className="Card">
        <h2>Q: Difference between authorization and authentication?</h2>
        <p>
          <b>A:</b>
          Authentication হল প্রবেশকারী কে তার যাচাই প্রক্রিয়া, যেখানে
          Authorization হলো ব্যবহারকারীর কোনো নিদৃষ্ট application, file and data
          অ্যাকসেস রয়েছে কিনা তা যাচাই প্রক্রিয়া।
        </p>
        <p>
          কোনো ওয়েবসাইটে যখন কোনো ব্যবহারকারী আসে তখন প্রথম ধাপে ঐ ব্যবহারকারীর
          পরিচয় সনাক্ত করে। এরপর পরিচয় সনাক্ত হয়ে গেলে এই ওয়েবসাইটে তার কোন
          কোন সেবাই অ্যাকসেস আছে সেগুলোতে তার অ্যাকসেস দিয়ে দেয়।
        </p>
        <p>
          <b>Authentication</b> <br /> * Authentication ব্যবহারকারী কে তা যাচাই
          করে।
          <br />
          * পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর
          দ্বারা প্রদত্ত অন্যান্য তথ্যের মাধ্যমে Authentication কাজ করে।
          <br />
          * Authentication একটি পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার
          প্রথম ধাপ।
          <br />
        </p>
        <p>
          <b>Authorization</b>
          <br />
          * Authorization নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস
          করতে পারে।
          <br />
          *Authorization সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা
          বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।
          <br />
          *Authorization সর্বদা Authentication ar পরে সঞ্চালিত হয়।
          <br />
          *Authorization ব্যবহারকারীর কাছে দৃশ্যমান বা পরিবর্তনযোগ্য নয়
          <br />
        </p>
      </div>
      <div className="Card">
        <h2>
          <b>
            Q: Why are you using firebase? What other options do you have to
            implement authentication?
          </b>
        </h2>
        <p>
          <b>A:</b>
          firebase এর Authentication অনেক সুন্দর এবং সহজে ব্যবহার করা যায়।
          এছাড়া firebase এর Security অনেক স্ট্রং যা কারীকে নিশ্চিন্ত করে।{" "}
          <br />
          Firebase অনেক উদ্দেশ্যে ব্যবহার করা হয় যা আপনার Website বিকাশ ,
          বৃদ্ধি এবং এটিকে একটি মানসম্পন্ন Site বানাতে সাহায্য করতে পারে ।
          <br />
          তাছাড়া, ফায়ারবেস একটি ডেভেলপারকে মাথায় রেখে তৈরি করা হয়েছে যাতে
          তারা একটি Website তৈরি করার সময় যে সমস্ত সমস্যার সম্মুখীন হতে পারে
          তার সমাধান করতে পারে। তাই এটাই ভাল লাগে।
          <br />
          এখন ফায়ারবেস বিকল্প কিছু নেই তবে পরবর্তী যদি মন হয় অন্যান্য গুলো
          ভালো সেটা পরে দেখা যাবে
        </p>
      </div>
      <div className="Card">
        
        </h2>
        <p>
          <b>A: .</b>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
