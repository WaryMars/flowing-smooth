import { facebook, instagram, twitter } from "../assets/icon";


export const products = [
    {
      id: 1,
      name: 'XIYANIKE',
      href: '#',
      price: '10,99€',
      imageSrc: 'src/assets/images/images (1).png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '8,89€',
      imageSrc: 'src/assets/images/images (2).png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Bague Y2K',
      href: '#',
      price: '15,99€',
      imageSrc: 'src/assets/images/images (3).png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Bagues Waving',
      href: '#',
      price: '21€',
      imageSrc: 'src/assets/images/images (4).png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Bague 2',
      href: '#',
      price: '11,99€',
      imageSrc: 'src/assets/images/images (5).png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Swift alone',
      href: '#',
      price: '7,86€',
      imageSrc: 'src/assets/images/images (6).png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: 'Red Island',
      href: '#',
      price: '18,50€',
      imageSrc: 'src/assets/images/images (7).png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 8,
      name: 'Pink heart',
      href: '#',
      price: '25€',
      imageSrc: 'src/assets/images/images.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
];

export const categories = [
  {
    id: 1,
    name: 'Bagues',
    href: '#',
    imageSrc: 'https://www.stoneandstrand.com/cdn/shop/files/homepage-shopping-icons-rings_87cbe88d-3233-4292-b701-432e64833e8b.jpg?v=1697014618',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Boucles d\'oreilles',
    href: '#',
    imageSrc: 'https://www.stoneandstrand.com/cdn/shop/files/homepage-shopping-icons-earrings_5433f51d-0726-4306-b970-731ccf05d4d2.jpg?v=1697014773',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Colliers',
    href: '#',
    imageSrc: 'https://www.stoneandstrand.com/cdn/shop/files/homepage-shopping-icons-necklaces_4f84d332-8585-4dd3-bf7b-a9885f32c2af.jpg?v=1697014891',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Bracelets',
    href: '#',
    imageSrc: 'https://www.stoneandstrand.com/cdn/shop/files/homepage-shopping-icons-bracelets_70b6042c-7979-44fd-9a6c-e462e8638b1e.jpg?v=1697015101',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  }
];

export const footerLinks = [
  {
      title: "Products",
      links: [
          { name: "Air Force 1", link: "/" },
          { name: "Air Max 1", link: "/" },
          { name: "Air Jordan 1", link: "/" },
          { name: "Air Force 2", link: "/" },
          { name: "Nike Waffle Racer", link: "/" },
          { name: "Nike Cortez", link: "/" },
      ],
  },
  {
      title: "Help",
      links: [
          { name: "About us", link: "/" },
          { name: "FAQs", link: "/" },
          { name: "How it works", link: "/" },
          { name: "Privacy policy", link: "/" },
          { name: "Payment policy", link: "/" },
      ],
  },
  {
      title: "Get in touch",
      links: [
          { name: "customer@nike.com", link: "mailto:customer@nike.com" },
          { name: "+92554862354", link: "tel:+92554862354" },
      ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export default products;
