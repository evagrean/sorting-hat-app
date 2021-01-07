import React from "react";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center text-white font-serif font-normal text-lg py-2 bg-yellow-900 bg-opacity-80">
      <div className="credits disclaimer flex justify-center">
        <p>
          <span className="font-semibold">Picture credits: </span>

          <span>
            Great Hall: <a href="https://pixabay.com/de/users/waldomiguez-1847959/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1155171">Waldo Miguez</a> at <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1155171">Pixabay, </a>
          </span>
          <span>
            Sorting Hat: <a href="https://pixabay.com/de/users/nastasyaday-11197808/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5846674">Анастасия Белоусова</a> at <a href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5846674">Pixabay</a>
          </span>
        </p>
        <p className="px-5"> | </p>
        <p>
          <span className="font-semibold">Disclaimer: </span>

          <span>The Sorting Hat, Hogwarts and all the people and places named here are the intellectual property of J.K. Rowling</span>
        </p>
        <p className="px-5"> | </p>
        <p>
          <span className="mr-2">&#169;</span>App designed and developed by{" "}
          <a href="https://github.com/evagrean" target="_blank" rel="noopener noreferrer">
            Eva Greiner-Anzenbacher
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
