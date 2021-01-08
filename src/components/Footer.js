import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex flex-col items-stretch justify-between px-5 py-1 md:flex-row w-screen text-white text-lg bg-yellow-900 bg-opacity-80">
        <div className="outline-white credits p-2">
          <p className="font-semibold">Picture credits: </p>

          <p>
            Great Hall: <a href="https://pixabay.com/de/users/waldomiguez-1847959/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1155171">Waldo Miguez</a> at <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1155171">Pixabay, </a>
          </p>
          <p>
            Sorting Hat: <a href="https://pixabay.com/de/users/nastasyaday-11197808/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5846674">Анастасия Белоусова</a> at <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5846674">Pixabay</a>
          </p>
        </div>

        <div className="outline-white disclaimer p-2">
          <p>The Sorting Hat, Hogwarts and all the people and places named here are the intellectual property of J.K. Rowling</p>
        </div>
        <div className="outline-white copyright p-2">
          <p className="mr-2">
            &#169; App designed and developed by
            <a href="https://github.com/evagrean" target="_blank" rel="noopener noreferrer">
              <p>Eva Greiner-Anzenbacher</p>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
  // <div className="footer flex flex-col items-center px-5 text-white font-serif font-normal text-lg py-2 bg-yellow-900 bg-opacity-80">
  //   <div className="credits disclaimer flex justify-center">
  // <p>
  //   <p className="font-semibold">Picture credits: </p>

  //   <p>
  //     Great Hall: <a href="https://pixabay.com/de/users/waldomiguez-1847959/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1155171">Waldo Miguez</a> at <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1155171">Pixabay, </a>
  //   </p>
  //   <p>
  //     Sorting Hat: <a href="https://pixabay.com/de/users/nastasyaday-11197808/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5846674">Анастасия Белоусова</a> at <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5846674">Pixabay</a>
  //   </p>
  // </p>
  //     <p className="px-5"> | </p>
  //     <p>
  //       <p className="font-semibold">Disclaimer: </p>

  //       <p>The Sorting Hat, Hogwarts and all the people and places named here are the intellectual property of J.K. Rowling</p>
  //     </p>
  //     <p className="px-5"> | </p>
  //     <p>
  //       <p className="mr-2">&#169;</p>App designed and developed by
  //       <a href="https://github.com/evagrean" target="_blank" rel="noopener noreferrer">
  //         <p> Eva Greiner-Anzenbacher</p>
  //       </a>
  //     </p>
  //   </div>
  // </div>
};

export default Footer;
