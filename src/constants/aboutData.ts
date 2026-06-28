export interface AboutData {
  title: string;
  paragraphs: string[];
  image: string;
}

const aboutData: AboutData = {
  title: 'A little more about me',
  paragraphs: [
    'Beyond engineering, I am an avid traveler. Experiencing diverse cultures broadens my perspective and fuels the creativity I bring to problem-solving and product thinking.',
    'I also enjoy nail art — a hobby that pairs precision with creativity, much like writing clean, maintainable, and efficient code.',
  ],
  image: '/assets/Gp.png',
};

export default aboutData;
