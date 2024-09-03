interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  content: string;
  readTime: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    image: "/future.avif",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    readTime: "8 min read",
    date: "2023-06-15",
    slug: "future-of-ai-in-everyday-life",
    content: `
      <p>Artificial Intelligence (AI) is rapidly transforming our world, touching every aspect of our daily lives. From the moment we wake up to the time we go to bed, AI is there, often working silently in the background to make our lives easier, more efficient, and more connected.</p>

      <h2>The Smart Home Revolution</h2>
      <p>One of the most visible ways AI is changing our lives is through smart home technology. Voice-activated assistants like Amazon's Alexa, Google Home, and Apple's Siri are becoming increasingly sophisticated, capable of controlling our lights, thermostats, and even our kitchen appliances. These AI-powered assistants learn our preferences over time, anticipating our needs and making our homes more comfortable and energy-efficient.</p>

      <h2>AI in Healthcare</h2>
      <p>In the healthcare sector, AI is making significant strides. Machine learning algorithms are being used to analyze medical images, potentially detecting diseases like cancer at earlier, more treatable stages. AI-powered chatbots are providing 24/7 mental health support, and predictive analytics are helping hospitals manage resources more effectively.</p>

      <h2>The Future of Work</h2>
      <p>In the workplace, AI is automating routine tasks, freeing up humans to focus on more creative and strategic work. From AI-powered writing assistants to advanced data analysis tools, these technologies are augmenting human capabilities rather than replacing them entirely.</p>

      <h2>Challenges and Ethical Considerations</h2>
      <p>However, the rise of AI also brings challenges. Issues of privacy, data security, and the potential for bias in AI systems are at the forefront of discussions among technologists, policymakers, and ethicists. As AI becomes more prevalent in our lives, it's crucial that we address these concerns and ensure that AI is developed and used responsibly.</p>

      <h2>Conclusion</h2>
      <p>As we look to the future, it's clear that AI will continue to play an increasingly important role in our everyday lives. By embracing these technologies while also critically examining their impact, we can harness the power of AI to create a more efficient, connected, and equitable world.</p>
    `,
  },
  {
    id: 2,
    title: "10 Must-Visit Hidden Gems in Europe",
    image: "/travel.avif",
    author: {
      name: "Olivia Taylor",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    readTime: "8 min read",
    date: "2023-05-22",
    slug: "must-visit-hidden-gems-europe",
    content: `<p>Europe is filled with well-known tourist destinations, but for the adventurous traveler, the real magic lies in discovering its hidden gems. Here are ten lesser-known European destinations that offer unique experiences and breathtaking beauty.</p>

      <h2>1. Piran, Slovenia</h2>
      <p>This charming coastal town on the Adriatic Sea boasts Venetian architecture, narrow winding streets, and a relaxed Mediterranean atmosphere. Don't miss the view from the bell tower of St. George's Church.</p>

      <h2>2. Civita di Bagnoregio, Italy</h2>
      <p>Known as the "dying city," this ancient hilltop town is accessible only by a long pedestrian bridge. Its isolation has preserved its medieval charm and offers stunning views of the surrounding valley.</p>

      <h2>3. Giethoorn, Netherlands</h2>
      <p>Often called the "Venice of the North," this car-free village is crisscrossed by canals and connected by over 180 bridges. Explore by foot, bike, or traditional punter boat.</p>

      <h2>4. Sintra, Portugal</h2>
      <p>While not entirely unknown, Sintra often gets overlooked by visitors to Lisbon. Its colorful palaces, lush gardens, and mystical atmosphere make it feel like a fairy tale come to life.</p>

      <h2>5. Meteora, Greece</h2>
      <p>This complex of Eastern Orthodox monasteries perched atop towering rock formations offers a unique blend of natural beauty and human ingenuity.</p>

      <h2>6. Hallstatt, Austria</h2>
      <p>This picturesque lakeside village in the Salzkammergut region is a UNESCO World Heritage site known for its salt production history and stunning Alpine scenery.</p>

      <h2>7. Cesky Krumlov, Czech Republic</h2>
      <p>This well-preserved medieval town features a stunning castle complex, winding cobblestone streets, and a vibrant arts scene.</p>

      <h2>8. Ronda, Spain</h2>
      <p>Perched dramatically atop a deep gorge, Ronda offers spectacular views, historic bullrings, and a rich cultural heritage.</p>

      <h2>9. Colmar, France</h2>
      <p>With its colorful half-timbered houses and flower-lined canals, Colmar looks like it's straight out of a storybook. It's also the capital of Alsatian wine country.</p>

      <h2>10. Kotor, Montenegro</h2>
      <p>This coastal town, nestled between mountains and the Adriatic Sea, boasts well-preserved medieval architecture and stunning natural beauty.</p>

      <h2>Conclusion</h2>
      <p>These hidden gems offer a chance to experience Europe beyond the usual tourist trails. Each destination provides a unique blend of history, culture, and natural beauty that will satisfy any adventurous traveler's wanderlust.</p>`,
  },
  {
    id: 3,
    title: "The Rise of Plant-Based Cuisine",
    image: "/culinary.avif",
    author: {
      name: "Marcus Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    readTime: "8 min read",
    date: "2023-05-22",
    slug: "rise-of-plant-based-cuisine",
    content: `<p>In recent years, the culinary world has witnessed a remarkable shift towards plant-based cuisine, with fine dining establishments leading the charge. This trend goes beyond simply catering to vegetarian or vegan diets; it's about elevating plant-based ingredients to new heights of gastronomic excellence.</p>

      <h2>The Chef's Perspective</h2>
      <p>Many renowned chefs are embracing the challenge of creating exquisite dishes using only plant-based ingredients. This shift requires creativity, innovation, and a deep understanding of flavors and textures. Chefs are discovering that vegetables, fruits, grains, and legumes can be just as versatile and satisfying as animal products when prepared with skill and imagination.</p>

      <h2>Innovative Techniques</h2>
      <p>To create plant-based dishes that rival traditional fine dining fare, chefs are employing a range of innovative techniques:</p>
      <ul>
        <li>Fermentation to develop complex flavors</li>
        <li>Molecular gastronomy to create unique textures</li>
        <li>Smoke and char techniques to add depth to vegetables</li>
        <li>House-made plant-based cheeses and meat alternatives</li>
      </ul>

      <h2>Sustainability and Ethics</h2>
      <p>The rise of plant-based fine dining is not just about culinary innovation; it's also driven by growing concerns about sustainability and ethics in food production. Many restaurants are partnering with local farms to source fresh, seasonal produce, reducing their carbon footprint and supporting local economies.</p>

      <h2>Notable Restaurants</h2>
      <p>Several restaurants around the world have gained recognition for their exceptional plant-based menus:</p>
      <ul>
        <li>Eleven Madison Park (New York City) - Transitioned to an entirely plant-based menu in 2021</li>
        <li>L'Arpège (Paris) - Offers a vegetable-centric tasting menu</li>
        <li>Noma (Copenhagen) - Known for its innovative use of local, plant-based ingredients</li>
        <li>Atelier Crenn (San Francisco) - Offers a pescatarian menu with a focus on vegetables</li>
      </ul>

      <h2>The Future of Fine Dining</h2>
      <p>As more diners become interested in plant-based options for health, environmental, or ethical reasons, we can expect to see continued innovation in this space. The rise of plant-based cuisine in fine dining is not just a trend, but a reflection of changing attitudes towards food and its impact on our health and the planet.</p>

      <h2>Conclusion</h2>
      <p>The rise of plant-based cuisine in fine dining represents a exciting evolution in the culinary world. It challenges chefs to push the boundaries of their creativity, offers diners new and exciting flavors, and promotes a more sustainable approach to haute cuisine. As this trend continues to grow, we can look forward to even more innovative and delicious plant-based creations in the world of fine dining.</p>`,
  },
  {
    id: 4,
    title: "Sustainable Fashion: More Than Just a Trend",
    image: "/fashion.avif",
    author: {
      name: "Samantha Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    readTime: "8 min read",
    date: "2023-05-22",
    slug: "sustainable-fashion-trend",
    content: `Sustainable fashion is more than just a buzzword; it’s a movement reshaping the fashion industry for the better. As consumers become more conscious of their environmental and social impact, sustainable fashion is gaining momentum, challenging the traditional practices of fast fashion.

But what exactly is sustainable fashion? At its core, it’s about creating clothing in ways that are environmentally friendly, ethically produced, and socially responsible. This means using eco-friendly materials, reducing waste, ensuring fair labor practices, and creating garments that are meant to last.

The rise of sustainable fashion reflects a growing awareness of the fashion industry’s environmental impact. From excessive water usage in textile production to the staggering amount of waste generated by discarded clothing, the need for change is clear. By choosing sustainable fashion, consumers can help reduce their carbon footprint and support brands that prioritize the planet and people.

Moreover, sustainable fashion is not just about being eco-conscious; it’s also about embracing quality over quantity. Instead of constantly chasing the latest trends, sustainable fashion encourages investing in timeless pieces that are versatile, durable, and made with care. This shift towards mindful consumption is not only better for the environment but also promotes a more thoughtful and personal approach to style.

Brands are responding to this demand by innovating with new materials, such as organic cotton, recycled fabrics, and even biodegradable textiles. They are also adopting circular fashion practices, like clothing rentals, resale platforms, and take-back programs, to extend the life cycle of garments.

While sustainable fashion is growing, there’s still work to be done. Consumers, brands, and policymakers must continue to collaborate to push the industry towards greater sustainability. This means supporting brands that are transparent about their practices, advocating for stronger regulations, and educating ourselves about the impact of our fashion choices.

Sustainable fashion is more than just a trend—it’s a necessary evolution of the industry. As we continue to embrace this movement, we’re not only making a statement about our values but also contributing to a healthier planet and a more ethical world. Let’s make sustainability the standard, not the exception.`,
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
