

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-lg shadow-sm">
      <header className="mb-10 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: May 30, 2025</p>
      </header>

      <div className="prose prose-indigo max-w-none">
        {/* Who We Are Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Who we are
          </h2>
          <p className="text-gray-700">
            Our website address is: <a href="https://stockboxtech.com" className="text-blue-600 hover:underline font-medium">https://stockboxtech.com</a>.
          </p>
        </section>

        {/* Comments Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Comments
          </h2>
          <p className="text-gray-700 mb-3">
            When visitors leave comments on the site we collect the data shown in the comments form, 
            and also the visitor&apos;s IP address and browser user agent string to help spam detection.
          </p>
          <p className="text-gray-700">
            An anonymized string created from your email address (also called a hash) may be provided 
            to the Gravatar service to see if you are using it. The Gravatar service privacy policy is 
            available here: <a href="https://automattic.com/privacy/" className="text-blue-600 hover:underline font-medium">https://automattic.com/privacy/</a>. 
            After approval of your comment, your profile picture is visible to the public in the context of your comment.
          </p>
        </section>

        {/* Media Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Media
          </h2>
          <p className="text-gray-700">
            If you upload images to the website, you should avoid uploading images with embedded 
            location data (EXIF GPS) included. Visitors to the website can download and extract any 
            location data from images on the website.
          </p>
        </section>

        {/* Cookies Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Cookies
          </h2>
          <p className="text-gray-700 mb-3">
            If you leave a comment on our site you may opt-in to saving your name, email address 
            and website in cookies. These are for your convenience so that you do not have to fill 
            in your details again when you leave another comment. These cookies will last for one year.
          </p>
          <p className="text-gray-700 mb-3">
            If you visit our login page, we will set a temporary cookie to determine if your browser 
            accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
          </p>
          <p className="text-gray-700 mb-3">
            When you log in, we will also set up several cookies to save your login information and your 
            screen display choices. Login cookies last for two days, and screen options cookies last for 
            a year. If you select &quot;Remember Me&quot;, your login will persist for two weeks. If you log out of 
            your account, the login cookies will be removed.
          </p>
          <p className="text-gray-700">
            If you edit or publish an article, an additional cookie will be saved in your browser. 
            This cookie includes no personal data and simply indicates the post ID of the article you 
            just edited. It expires after 1 day.
          </p>
        </section>

        {/* Embedded Content Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Embedded content from other websites
          </h2>
          <p className="text-gray-700 mb-3">
            Articles on this site may include embedded content (e.g. videos, images, articles, etc.). 
            Embedded content from other websites behaves in the exact same way as if the visitor has 
            visited the other website.
          </p>
          <p className="text-gray-700">
            These websites may collect data about you, use cookies, embed additional third-party tracking, 
            and monitor your interaction with that embedded content, including tracking your interaction 
            with the embedded content if you have an account and are logged in to that website.
          </p>
        </section>

        {/* Data Sharing Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Who we share your data with
          </h2>
          <p className="text-gray-700">
            If you request a password reset, your IP address will be included in the reset email.
          </p>
        </section>

        {/* Data Retention Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How long we retain your data
          </h2>
          <p className="text-gray-700 mb-3">
            If you leave a comment, the comment and its metadata are retained indefinitely. 
            This is so we can recognize and approve any follow-up comments automatically instead 
            of holding them in a moderation queue.
          </p>
          <p className="text-gray-700">
            For users that register on our website (if any), we also store the personal information 
            they provide in their user profile. All users can see, edit, or delete their personal 
            information at any time (except they cannot change their username). Website administrators 
            can also see and edit that information.
          </p>
        </section>

        {/* User Rights Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            What rights you have over your data
          </h2>
          <p className="text-gray-700">
            If you have an account on this site, or have left comments, you can request to receive 
            an exported file of the personal data we hold about you, including any data you have 
            provided to us. You can also request that we erase any personal data we hold about you. 
            This does not include any data we are obliged to keep for administrative, legal, or security purposes.
          </p>
        </section>

        {/* Data Transfer Section */}
        <section className="mb-10 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Where we send your data
          </h2>
          <p className="text-gray-700">
            Visitor comments may be checked through an automated spam detection service.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Privacy




