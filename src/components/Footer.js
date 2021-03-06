import React from "react";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center px-5 pt-5 pb-10  text-white text-lg bg-yellow-900 bg-opacity-70 border-t-4 border-pink-900">
      <div className="copyright text-center my-3">
        <p className="mr-2">
          &#169; 2021 Designed and developed by
          <a href="https://github.com/evagrean" target="_blank" rel="noopener noreferrer">
            <span> Eva Greiner-Anzenbacher</span>
          </a>
        </p>
      </div>
      <div className="credits text-center my-3">
        <p className="font-semibold">Picture credits: </p>
        <p>
          Great Hall: <a href="https://pixabay.com/de/users/waldomiguez-1847959/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1155171">Waldo Miguez</a> at <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1155171">Pixabay, </a>
        </p>
        <p>
          Sorting Hat: <a href="https://pixabay.com/de/users/nastasyaday-11197808/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5846674">Анастасия Белоусова</a> at <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5846674">Pixabay</a>
        </p>
      </div>
      <div className="disclaimer text-center my-3">
        <p>The Sorting Hat, Hogwarts and all the people and places mentioned here are the intellectual property of J.K. Rowling</p>
      </div>
    </div>
  );
};

export default Footer;
