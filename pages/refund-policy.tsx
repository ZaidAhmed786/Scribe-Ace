import React from 'react';
import Footer from '@/components/global/footer';
import Header from '@/components/global/header' 
import Head from 'next/head'
const RefundPolicy = () => {
  return (
    <>
     <Head>
        <title>Refund Policy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image.png" />
    </Head>
    <Header />
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-left font-bold text-gray-800 mb-6">Refund Policy</h2>
          <p className="text-sm text-left text-gray-600 mb-8">Last Updated on April 11, 2024</p>
          
          <div className="mb-8">
            <h3 className="text-xl text-left font-semibold text-gray-800 mb-4">Full Refund Policy</h3>
            <p className="text-gray-700 mb-2">A full refund will be issued if you choose to cancel our services within 5 days of making the payment. If you terminate our services after the initial 5 days, you will be charged an amount equivalent to the working hours put into the project. The balance will be credited to your account within 45 days of cancellation.</p>
            <p className="text-gray-700 mb-2">Cancellation of any service renewal should be done 10 days prior to the start of the next billing cycle. Cancellations made after the start of the billing cycle will result in an amount equivalent to the working hours put into the project during that month being billable.</p>
            <p className="text-gray-700 mb-2">If you signed up for our services but did not make use of them, you are still entitled to pay us. The amount of refund will be credited to the account from which the payment was made within 45 days of service cancellation.</p>
          </div>
          
          <div>
            <h3 className="text-xl text-left font-semibold text-gray-800 mb-4">SEO Refund Policy</h3>
            <p className="text-gray-700 mb-2">Scribe Ace will not be liable for refund or guarantee of top search ranking under the following circumstances:</p>
            <ul className="text-gray-700 mb-4">
              <li>In case of effect on SEO ranking due to changes in ranking algorithm, policies or functionality of search engines.</li>
              <li>Link building, a part of SEO, is carried out based on the information provided by you. If the URLs given are incorrect, we will not be responsible for any subsequent errors and there will not be any refunds or money-back guarantee.</li>
              <li>Scribe Ace will not be responsible for SEO results if the client engages with any other third-party SEO services.</li>
              <li>Number of times and rank of a website appearing on the search list varies, and thus an immediate change in the search ranking cannot be guaranteed.</li>
              <li>Any adverse effect on ranking due to changes in website content by the client or third-party service provider hired by them.</li>
              <li>We make no guarantee that our SEO services will show the client’s website in the top ten search rank. However, understand that we work in your best interest and put in our best effort to provide genuinely profitable results. Our aim is to make your life simpler and your business more lucrative.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer  />
    </>
  );
};

export default RefundPolicy;
