import React from 'react';
import './about-page.scss';

export const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="about-page__title">About</h1>
      <p className="about-page__paragraph">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt est et, expedita fugiat id illo impedit laudantium
          obcaecati officia omnis, porro quisquam quod sequi sunt totam velit voluptas? Sint!
        </span>
        <span>
          Atque dignissimos dolor minima molestias nam officia omnis optio pariatur porro quia reiciendis ullam vero, voluptate? Accusamus
          aliquam distinctio eligendi, est in ipsam iusto maiores molestias officiis quas, quis voluptatum.
        </span>
        <span>
          Aut dolor, esse exercitationem fugit ipsa ipsam iste laboriosam molestiae nemo, nobis nulla quam reiciendis sint, soluta sunt
          totam voluptates. Aut commodi deleniti dolor id odit porro quasi qui recusandae!
        </span>
        <span>
          Autem, ipsam nisi? Adipisci dolores exercitationem facere itaque labore laudantium maiores, numquam ratione rerum vel. Assumenda
          atque blanditiis, consequuntur expedita odit perspiciatis quis similique ut? Doloremque est eveniet perspiciatis ullam.
        </span>
        <span>
          Autem dignissimos ducimus harum perferendis repudiandae tempora tempore. Assumenda consequuntur corporis dignissimos dolores ea
          eligendi enim facilis itaque, laborum molestias mollitia natus nemo pariatur perferendis porro quo vero vitae voluptas.
        </span>
        <span>
          Amet dolores ducimus fugit hic nesciunt nobis nostrum quam rerum ullam voluptatum? Accusantium aperiam, consectetur doloremque
          illum ipsa, minima odit officia pariatur perferendis praesentium quasi veniam voluptas. Odit repellat, vel.
        </span>
        <span>
          Aperiam excepturi id illum laudantium nobis pariatur perspiciatis voluptatem? Amet doloremque fugit nihil nobis obcaecati odio
          recusandae veritatis voluptate voluptatum! Distinctio facilis numquam porro quidem quod tempora, vel. Ducimus, voluptatum?
        </span>
        <span>
          A ab accusamus aperiam dicta dolore doloribus ea earum error esse et eum excepturi facere hic, iure modi nesciunt nihil, nulla
          officiis pariatur placeat quae quos rerum sequi, sunt veritatis.
        </span>
      </p>
      <p className="about-page__icons-wrapper">
        <a
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
          className="about-page__facebook about-page__icon">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
          className="about-page__twitter about-page__icon">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.pinterest.com"
          rel="noopener noreferrer"
          target="_blank"
          className="about-page__pinterest about-page__icon">
          <i className="fa-brands fa-pinterest"></i>
        </a>
      </p>
    </div>
  );
};
